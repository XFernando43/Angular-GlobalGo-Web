import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IMotorcycle } from '../../../models/Motorcycle';

@Component({
  selector: 'app-moto-header-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './moto-header-detail.component.html',
  styleUrl: './moto-header-detail.component.css'
})
export class MotoHeaderDetailComponent {
  @Input() motorcycle: IMotorcycle | undefined;
  public today: Date;

  constructor() {
    this.today = new Date();
  }
}
