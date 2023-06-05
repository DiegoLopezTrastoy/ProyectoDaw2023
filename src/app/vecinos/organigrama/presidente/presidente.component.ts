import { Component, OnInit } from '@angular/core';
import { VecinosService } from '../../vecinos.service';

@Component({
  selector: 'app-presidente',
  templateUrl: './presidente.component.html',
  styleUrls: ['./presidente.component.css'],
})
export class PresidenteComponent implements OnInit {
  public presidente: any;
  public visible: boolean = false;
  constructor(private service: VecinosService) {}

  async ngOnInit() {
    this.visible = false;
    this.presidente = await this.service.getPresidente();
    this.visible = true;
  }
}
