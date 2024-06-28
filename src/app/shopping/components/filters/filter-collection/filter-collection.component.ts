import { Component } from '@angular/core';
import { FilterByBrakesComponent } from '../filter-by-brakes/filter-by-brakes.component';
import { ClearFilterComponent } from '../clear-filter/clear-filter.component';
import { FilterByBrandComponent } from '../filter-by-brand/filter-by-brand.component';
import { FilterByColorsComponent } from '../filter-by-colors/filter-by-colors.component';

@Component({
  selector: 'app-filter-collection',
  standalone: true,
  imports: [FilterByBrakesComponent,ClearFilterComponent,FilterByBrandComponent,FilterByColorsComponent],
  templateUrl: './filter-collection.component.html',
  styleUrl: './filter-collection.component.css'
})
export class FilterCollectionComponent {

}
