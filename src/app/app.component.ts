import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { ConfirmEventType, ConfirmationService, MenuItem } from 'primeng/api';
import { VecinosService } from './vecinos/vecinos.service';
import { OverlayPanel } from 'primeng/overlaypanel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ConfirmationService]
})
export class AppComponent implements OnInit {
  public sidebarVisible: boolean = false;
  public itemsTopBar: MenuItem[] = [];
  public itemsMenu: MenuItem[] = [];
  public label: string = 'Iniciar sesion';
  public class: string = 'pi pi-user-plus';
  public password: string = 'a';
  public username: string = 'a';

  @ViewChild('loginConfirm') loginConfirm: OverlayPanel | undefined;
  @ViewChild('logoutConfirm') logoutConfirm: OverlayPanel | undefined;

  constructor(
    private service: VecinosService,
    private confirmationService: ConfirmationService,
    private cdr: ChangeDetectorRef
  ) { }

  //Si la sesion está iniciada hace salir el mensaje para cerrar y viceversa
  loginOrLogut(event: Event) {
    (this.service.logueado) ? this.logoutConfirm!.toggle(event) : this.loginConfirm!.toggle(event);
  }

  logout() {
    this.service.logout();
    this.label = 'Iniciar sesion';
    this.class = 'pi pi-user-minus';
    this.logoutConfirm!.hide();
  }

  login() {
    this.service.login(this.username, this.password);
    this.label = 'Cerrar sesion';
    this.class = 'pi pi-user-plus';
    this.loginConfirm!.hide();
  }

  ngOnInit(): void {
    this.itemsTopBar = [
      {
        icon: 'pi pi-fw pi-align-left',
        command: () => {
          this.sidebarVisible = true;
        },
      }
    ];

    this.itemsMenu = [
      {
        label: 'Comunidad de vecinos',
        items: [
          {
            label: 'Organigrama',
            items: [
              {
                label: 'Presidente',
                routerLink: ['/vecinos/organigrama/presidente']
              },
              {
                label: 'Secretario',
                routerLink: ['/vecinos/organigrama/secretario']
              }, {
                label: 'Vecinos',
                routerLink: ['/vecinos/organigrama/vecinos']
              }
            ]
          },
          {
            label: 'Obras',
            items: [{
              label: 'En curso',
              routerLink: ['/vecinos/obras/en_curso']
            }, {
              label: 'Finalizadas',
              routerLink: ['/vecinos/obras/finalizadas']
            }, {
              label: 'Presupuestos',
              routerLink: ['/vecinos/obras/presupuestos']
            }]
          },
          {
            label: 'Reuniones',
            items: [{
              label: 'Reuniones presenciales',
              routerLink: ['/vecinos/reuniones/presenciales']
            }, {
              label: 'Reuniones no Presenciales',
              routerLink: ['/vecinos/reuniones/no_presenciales']
            }]
          },
          {
            label: 'Avisos',
            routerLink: ['/vecinos/avisos']
          },
          {
            label: 'Cuentas',
            routerLink: ['/vecinos/cuentas']
          }
        ]
      }, {
        label: 'Grupos Sociales',
        items: [
          {
            label: 'Organigrama',
            items: [{
              label: 'Anfitrión',
              routerLink: ['/grupos/organigrama/anfitrion']
            }, {
              label: 'Invitados',
              routerLink: ['/grupos/organigrama/invitados']
            }]
          },
          {
            label: 'Eventos',
            items: [{
              label: 'En curso',
              routerLink: ['/grupos/eventos/en_curso']
            }, {
              label: 'Potenciales',
              routerLink: ['/grupos/eventos/potenciales']
            }, {
              label: 'Finalizados',
              routerLink: ['/grupos/eventos/finalizados']
            }]
          },
          {
            label: 'Cuentas',
            routerLink: ['/grupos/cuentas']
          }
        ]
      }];

  }
}