import { Component } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { SliderModule } from 'primeng/slider';
import { ClearFilterComponent } from '../clear-filter/clear-filter.component';
import { FormsModule } from '@angular/forms';
import { BadgeModule } from 'primeng/badge';
import { InputTextModule } from 'primeng/inputtext';
import { MotoStateService } from '../../../states/moto.state.service';

@Component({
  selector: 'app-filter-by-displacement',
  standalone: true,
  imports: [
    FormsModule,
    AccordionModule,
    SliderModule,
    ClearFilterComponent,
    BadgeModule,
    InputTextModule,
  ],
  templateUrl: './filter-by-displacement.component.html',
  styleUrl: './filter-by-displacement.component.css',
})
export class FilterByDisplacementComponent {
  public displacement:number;
  
  constructor(private motoServiceState:MotoStateService){
    this.displacement = 98;
  }

  handleFilter(){
    this.motoServiceState.orderByDisplacement(this.displacement);
  }
}
