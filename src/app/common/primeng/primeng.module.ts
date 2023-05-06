import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { MenubarModule } from 'primeng/menubar';
import { AvatarModule } from 'primeng/avatar';
import { PanelMenuModule } from 'primeng/panelmenu';
import { SpeedDialModule } from 'primeng/speeddial';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { AccordionModule } from 'primeng/accordion';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { FieldsetModule } from 'primeng/fieldset';
import { RippleModule } from 'primeng/ripple';
import { ImageModule } from 'primeng/image';
import { ChartModule } from 'primeng/chart';
import { InputSwitchModule } from 'primeng/inputswitch';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    SidebarModule,
    ButtonModule,
    DialogModule,
    MenubarModule,
    AvatarModule,
    PanelMenuModule,
    SpeedDialModule,
    OverlayPanelModule,
    DynamicDialogModule,
    AccordionModule,
    CardModule,
    CarouselModule,
    TagModule,
    FieldsetModule,
    RippleModule,
    ImageModule,
    ChartModule,
    InputSwitchModule
  ]
})
export class PrimengModule { }
