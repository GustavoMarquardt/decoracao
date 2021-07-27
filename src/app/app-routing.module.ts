
import { CatalogoComponent } from './screens/app/catalogo/catalogo.component';
import { NgModule } from "@angular/core";
import {  RouterModule, Routes } from "@angular/router";
import { NavbarComponent } from './screens/app/navbar/navbar.component';



const routes: Routes =[
        {path:'',component:CatalogoComponent},
        {path:'catalogo',component:NavbarComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
