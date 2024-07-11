import { Component, Output,EventEmitter  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccordionModule } from 'primeng/accordion';
import { DropdownModule } from 'primeng/dropdown';
import { MotoStateService } from '../../../states/moto.state.service';

@Component({
  selector: 'app-filter-by-brand',
  standalone: true,
  imports: [AccordionModule,DropdownModule,FormsModule],
  templateUrl: './filter-by-brand.component.html',
  styleUrl: './filter-by-brand.component.css'
})
export class FilterByBrandComponent {
  public selectedBrand:any = {} as object;
  public brands: any[] = [];
  
  constructor(private motoSerivceState:MotoStateService){
    this.getBrandFromAPI();
  }
  orderByBrand(event: any){    
    if (event.value && event.value.marca) {
      this.motoSerivceState.orderByBrand(event.value.marca)
    } else {
      this.motoSerivceState.resetFilters();  
    }
  }

  async getBrandFromAPI(){
    try {
      const response = await fetch("https://localhost:7092/api/Brand/getAll");
      if (!response.ok) {
        throw new Error("Failed to fetch motorcycles");
      }
      const data = await response.json();
      this.brands = data;
    } catch (error) {
      console.error("Error fetching motorcycles:", error);
      throw error;
    }
  }

}
