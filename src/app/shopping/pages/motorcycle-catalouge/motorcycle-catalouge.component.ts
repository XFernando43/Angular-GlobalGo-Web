import { Component } from '@angular/core';
import { FilterCollectionComponent } from '../../components/filters/filter-collection/filter-collection.component';
import { MotorcycleSectionComponent } from '../../components/motorcycles/motorcycle-section/motorcycle-section.component';
import { IMotorcycle } from '../../models/Motorcycle';
import { MotorCycleService } from '../../services/motorcycles.service';
import { MotoStateService } from '../../states/moto.state.service';
@Component({
  selector: 'app-motorcycle-catalouge',
  standalone: true,
  imports: [FilterCollectionComponent,MotorcycleSectionComponent],
  templateUrl: './motorcycle-catalouge.component.html',
  styleUrl: './motorcycle-catalouge.component.css'
})
export class MotorcycleCatalougeComponent {
  motorCycles: IMotorcycle[] = [];

  constructor(private motoStateService: MotoStateService) {}

  ngOnInit(): void {
    this.motoStateService.getMotorCyclesFromAPI();
    this.motoStateService.motos$.subscribe({
      next: (motos) => { this.motorCycles = motos; },
      error: (err) => {
        console.error('Error fetching motorcycles:', err);
      }
    });
  }

  // orderByLowestPrice(){
  //   this.motorcyclesAux = this.motorCycles;
  //   this.motorCycles = this.motorCycles.sort((a, b) => {
  //     return (parseFloat(a.engine.displacement) - parseFloat(b.engine.displacement));
  //   });
  // }

  // orderByBrand(make: string) {
  //   // this.motorCycles = [...this.motorcyclesAux];
  //   const filteredMotorcycles = this.motorCycles.filter(
  //     (moto) => moto.make.toLowerCase() === make.toLowerCase()
  //   );
  //   this.motorCycles = filteredMotorcycles;
  //   console.log(this.motorCycles);
  // }

}
