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
import { TabViewModule } from 'primeng/tabview';
import { PanelModule } from 'primeng/panel';
import { MessagesModule } from 'primeng/messages';
import { VirtualScrollerModule } from 'primeng/virtualscroller';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FileUploadModule } from 'primeng/fileupload';
import { BlockUIModule } from 'primeng/blockui';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { MultiSelectModule } from 'primeng/multiselect';
import { SelectButtonModule } from 'primeng/selectbutton';

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
    InputSwitchModule,
    TabViewModule,
    PanelModule,
    MessagesModule,
    VirtualScrollerModule,
    InputTextareaModule,
    FileUploadModule,
    BlockUIModule,
    ProgressSpinnerModule,
    MultiSelectModule,
    SelectButtonModule
  ]
})
export class PrimengModule { }
