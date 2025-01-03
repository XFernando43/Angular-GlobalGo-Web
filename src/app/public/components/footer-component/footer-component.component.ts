import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-footer-component',
  standalone: true,
  imports: [CommonModule,IconFieldModule,InputIconModule,InputTextModule],
  templateUrl: './footer-component.component.html',
  styleUrl: './footer-component.component.css'
})
export class FooterComponentComponent {
  brands: string[] = [
    'B52', 'Bajaj', 'Bajaj Pulsar', 'Benelli', 'CF MOTO', 'Duconda',
    'Haojue', 'Hero', 'Honda', 'Kawasaki', 'Keeway', 'KTM', 'Lifan',
    'Nexus', 'Ronco', 'Royal Enfield', 'RTM', 'Sonlink', 'Ssenda',
    'Suzuki', 'TVS', 'Wanxin', 'Yamaha', 'Zongshen', 'Zontes'
  ];
}
