import {
  Component,
  OnInit,
  ViewChild,
  ChangeDetectorRef,
} from '@angular/core';
import { ConfirmationService, MenuItem } from 'primeng/api';
import { VecinosService } from './vecinos/vecinos.service';
import { OverlayPanel } from 'primeng/overlaypanel';
import { DialogService } from 'primeng/dynamicdialog';
import { HttpService } from './http.service';
import { Comunidad } from './interfaces/Comunidad.interface';
import { User } from './interfaces/User.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ConfirmationService],
})
export class AppComponent implements OnInit {
  public itemsMenu: MenuItem[] = [];
  public label: string = 'Iniciar sesion';
  public class: string = 'pi pi-user-plus';
  public password: string = 'abc123.';
  public username: string = 'Diego';
  private subItems: MenuItem[] = [];

  @ViewChild('loginConfirm') loginConfirm: OverlayPanel | undefined;
  @ViewChild('logoutConfirm') logoutConfirm: OverlayPanel | undefined;

  constructor(
    public service: VecinosService,
    private confirmationService: ConfirmationService,
    private cdr: ChangeDetectorRef,
    public dialogService: DialogService,
    private httpService: HttpService
  ) {}

  ngOnInit(): void {
    this.itemsMenu = [
      {
        label: 'Inicio',
        routerLink: [''],
        command: ()=>{this.service.sidebarVisible = false}
      },
      {
        label: 'Comunidad de vecinos',
        items: this.subItems
      },
    ];

    // items: [
    //   {
    //     label: 'Obras',
    //     items: [{
    //       label: 'En curso',
    //       routerLink: ['/vecinos/obras/en_curso']
    //     }, {
    //       label: 'Finalizadas',
    //       routerLink: ['/vecinos/obras/finalizadas']
    //     }, {
    //       label: 'Presupuestos',
    //       routerLink: ['/vecinos/obras/presupuestos']
    //     }]
    //   },
    //   {
    //     label: 'Reuniones',
    //     items: [{
    //       label: 'Reuniones presenciales',
    //       routerLink: ['/vecinos/reuniones/presenciales']
    //     }, {
    //       label: 'Reuniones no Presenciales',
    //       routerLink: ['/vecinos/reuniones/no_presenciales']
    //     }]
    //   },
    //   {
    //     label: 'Avisos',
    //     routerLink: ['/vecinos/avisos']
    //   },
    //   {
    //     label: 'Cuentas',
    //     routerLink: ['/vecinos/cuentas']
    //   }
    // ]
  }

  async inicializarComunidades(user: User) {
    const comunidades: Comunidad[] = await this.httpService.getComunidades();
    comunidades.forEach((comunidad) => {
      this.subItems.push({
        label: comunidad.direccion,
        items: [
          {
            label: 'Organigrama',
            items: [
              {
                label: 'Presidente',
                routerLink: ['/vecinos/organigrama/presidente'],
                command: ()=>{console.log("hola");
                }
              }, {
                label: 'Secretario',
                routerLink: ['/vecinos/organigrama/secretario']
              }, {
                label: 'Vecinos',
                routerLink: ['/vecinos/organigrama/vecinos']
              }
            ],
          },
        ],
      });
      this.cdr.detectChanges();
    });
  }

  //Si la sesion está iniciada hace salir el mensaje para cerrar y viceversa
  loginOrLogut(event: Event) {
    this.service.logueado
      ? this.logoutConfirm!.toggle(event)
      : this.loginConfirm!.toggle(event);
  }

  logout() {
    this.service.logout();
    this.label = 'Iniciar sesion';
    this.class = 'pi pi-user-plus';
    this.logoutConfirm!.hide();
  }

  async login() {
    const correcto = await this.service.login(this.username, this.password);
    if (correcto) {
      this.label = 'Cerrar sesion';
      this.class = 'pi pi-user-minus';
      this.inicializarComunidades(this.service.userLogueado!);
      this.loginConfirm!.hide();
    }
  }
}
