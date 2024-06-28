import { Component } from '@angular/core';
import { FilterByBrakesComponent } from '../filter-by-brakes/filter-by-brakes.component';
import { ClearFilterComponent } from '../clear-filter/clear-filter.component';
import { FilterByBrandComponent } from '../filter-by-brand/filter-by-brand.component';
import { FilterByColorsComponent } from '../filter-by-colors/filter-by-colors.component';
import { FilterByCylindersComponent } from '../filter-by-cylinders/filter-by-cylinders.component';
import { FilterByDisplacementComponent } from '../filter-by-displacement/filter-by-displacement.component';
import { FilterByDrivingPositionComponent } from '../filter-by-driving-position/filter-by-driving-position.component';
import { FilterByFuelSystemComponent } from '../filter-by-fuel-system/filter-by-fuel-system.component';
import { FilterByPerformanceComponent } from '../filter-by-performance/filter-by-performance.component';
import { FilterByPowerComponent } from '../filter-by-power/filter-by-power.component';
import { FilterByPriceAndCoinComponent } from '../filter-by-price-and-coin/filter-by-price-and-coin.component';
import { FilterByStyleComponent } from '../filter-by-style/filter-by-style.component';
import { FilterByTransmitionComponent } from '../filter-by-transmition/filter-by-transmition.component';
import { FilterByTypeMotorCycleComponent } from '../filter-by-type-motor-cycle/filter-by-type-motor-cycle.component';
@Component({
  selector: 'app-filter-collection',
  standalone: true,
  imports: [FilterByTypeMotorCycleComponent,FilterByTransmitionComponent,FilterByStyleComponent,FilterByPriceAndCoinComponent,FilterByPowerComponent,FilterByDrivingPositionComponent,FilterByPerformanceComponent,FilterByFuelSystemComponent,FilterByBrakesComponent,ClearFilterComponent,FilterByBrandComponent,FilterByColorsComponent,FilterByCylindersComponent,FilterByDisplacementComponent],
  templateUrl: './filter-collection.component.html',
  styleUrl: './filter-collection.component.css'
})
export class FilterCollectionComponent {

}
