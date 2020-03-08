import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { BodyComponent } from './body/body.component';
import { InformacionComponent } from './informacion/informacion.component';
import { ColaboradoresComponent } from './colaboradores/colaboradores.component';



const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'landing' },
  { path: 'landing', component: LandingComponent },
  { path: 'body', component: BodyComponent },
  { path: 'informacion', component: InformacionComponent },
  { path: 'colaboradores', component: ColaboradoresComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }