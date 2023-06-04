import {
  Component,
  OnInit,
  ViewChild,
  ChangeDetectorRef,
  Inject,
} from '@angular/core';
import { ConfirmationService, MenuItem } from 'primeng/api';
import { VecinosService } from './vecinos/vecinos.service';
import { OverlayPanel } from 'primeng/overlaypanel';
import { DialogService } from 'primeng/dynamicdialog';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { Comunidad } from './interfaces/Comunidad.interface';
import { DOCUMENT } from '@angular/common';

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
  // public stateOptions: any[] = [{label: 'Claro', value: 'lara-ligth.css'}, {label: 'Oscuro', value: 'lara-dark.css'}];
  // public value: string = 'theme.scss';
  private subItems: MenuItem[] = [
    {
      label: 'Usted no pertenece a ninguna comunidad de vecinos',
      disabled: true,
    },
  ];

  @ViewChild('loginConfirm') loginConfirm: OverlayPanel | undefined;
  @ViewChild('logoutConfirm') logoutConfirm: OverlayPanel | undefined;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    public service: VecinosService,
    private confirmationService: ConfirmationService,
    private cdr: ChangeDetectorRef,
    public dialogService: DialogService
  ) {}

  ngOnInit(): void {
    this.itemsMenu = [
      {
        label: 'Inicio',
        routerLink: [''],
      },
      {
        label: 'Comunidades de vecinos',
        expanded: true,
        items: this.subItems,
      },
    ];
  }

  // cambiarTema() {
  //   console.log(this.value);
    
  //   let themeLink = this.document.getElementById('app-theme') as HTMLLinkElement;
  //   if (themeLink) {
  //     themeLink.href = this.value;
  //   }
  // }

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
    this.descargarSideBar();
  }

  login() {
    this.service.login(this.username, this.password).then(() => {
      if (this.service.logueado) {
        this.loginConfirm!.hide();
        this.label = 'Cerrar sesion';
        this.class = 'pi pi-user-minus';
        this.cargarSideBar();
      }
    });
  }

  descargarSideBar() {
    this.subItems = [
      {
        label: 'Usted no pertenece a ninguna comunidad de vecinos',
        disabled: true,
      },
    ];

    this.itemsMenu = [
      {
        label: 'Inicio',
        routerLink: [''],
      },
      {
        label: 'Comunidad de vecinos',
        expanded: true,
        items: this.subItems,
      },
    ];
  }

  async cargarSideBar() {

    const comunidades: Comunidad[] = await this.service.getAllComuniti();

    const subsubItems = [{
      label: 'Organigrama',
      items: [
        {
          label: 'Presidente',
          routerLink: ['/vecinos/organigrama/presidente'],
        },
        {
          label: 'Secretario',
          routerLink: ['/vecinos/organigrama/secretario'],
        },
        {
          label: 'Vecinos',
          routerLink: ['/vecinos/organigrama/vecinos'],
        },
      ],
    },
    {
      label: 'Obras',
      items: [
        {
          label: 'En curso',
          routerLink: ['/vecinos/obras/en_curso'],
        },
        {
          label: 'Finalizadas',
          routerLink: ['/vecinos/obras/finalizadas'],
        },
        {
          label: 'Presupuestos',
          routerLink: ['/vecinos/obras/presupuestos'],
        },
      ],
    },
    {
      label: 'Reuniones',
      items: [
        {
          label: 'Reuniones presenciales',
          routerLink: ['/vecinos/reuniones/presenciales'],
        },
        {
          label: 'Reuniones no Presenciales',
          routerLink: ['/vecinos/reuniones/no_presenciales'],
        },
      ],
    },
    {
      label: 'Avisos',
      routerLink: ['/vecinos/avisos'],
    },
    {
      label: 'Cuentas',
        routerLink: ['/vecinos/cuentas'],
    },]

    this.subItems = [];

    comunidades.forEach(comunidad => {
      this.subItems.push({
        label: comunidad.direccion,
        icon: 'pi pi-home' ,
        items: subsubItems,
        command: ()=>{this.service.comunidad = comunidad}
      })
    });

    this.itemsMenu = [
      {
        label: 'Inicio',
        routerLink: [''],
      },
      {
        label: 'Comunidad de vecinos',
        expanded: true,
        items: this.subItems,
      },
    ];
  }
}
