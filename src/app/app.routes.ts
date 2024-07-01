import { Routes } from '@angular/router';
import { NotFoundPageComponent } from './public/pages/not-found-page/not-found-page.component';
import { MotorcycleCatalougeComponent } from './shopping/pages/motorcycle-catalouge/motorcycle-catalouge.component';
import { MotorcycleDetailComponent } from './shopping/pages/motorcycle-detail/motorcycle-detail.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {path:'catalogo-motos',component: MotorcycleCatalougeComponent},
    {path:'moto-detail',component:MotorcycleDetailComponent},
    {path:'**', component:NotFoundPageComponent}
];
