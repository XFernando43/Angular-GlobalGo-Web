import { Component } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { FilterByPriceAndCoinComponent } from '../filter-by-price-and-coin/filter-by-price-and-coin.component';
import { FilterByBrandComponent } from '../filter-by-brand/filter-by-brand.component';
import { FilterByRatingComponent } from '../filter-by-rating/filter-by-rating.component';
import { FilterByManufacturesComponent } from '../filter-by-manufactures/filter-by-manufactures.component';
import { FilterByColorsComponent } from '../filter-by-colors/filter-by-colors.component';
import { FilterByOriginComponent } from '../filter-by-origin/filter-by-origin.component';
import { FilterByDiameterComponent } from '../filter-by-diameter/filter-by-diameter.component';
import { FilterByMaterialsComponent } from '../filter-by-materials/filter-by-materials.component';
import { FilterByPerformanceComponent } from '../filter-by-performance/filter-by-performance.component';
import { FilterByDisplacementComponent } from '../filter-by-displacement/filter-by-displacement.component';
import { FilterByPowerComponent } from '../filter-by-power/filter-by-power.component';
@Component({
  selector: 'app-filter-section-group',
  standalone: true,
  imports: [
    FilterByPerformanceComponent,
    FilterByMaterialsComponent,
    FilterByDiameterComponent,
    FilterByOriginComponent,
    FilterByColorsComponent,
    FilterByManufacturesComponent,
    FilterByRatingComponent,
    FilterByBrandComponent,
    AccordionModule,
    FilterByPriceAndCoinComponent,
    FilterByDisplacementComponent,
    FilterByPowerComponent
  ],
  templateUrl: './filter-section-group.component.html',
  styleUrl: './filter-section-group.component.css',
})
export class FilterSectionGroupComponent {
  quiqui(type: String) {
    console.log(type);
  }
}
