import { AdministradorGuard } from './guards/adm.guard';
import { SinInComponent } from './screens/app/sin-in/sin-in.component';
import { SingUpComponent } from './screens/app/sing-up/sing-up.component';
import { NavbarComponent } from './screens/app/navbar/navbar.component';
import { AdministradorComponent } from './screens/app/administrador/administrador.component';

import { CatalogoComponent } from './screens/app/catalogo/catalogo.component';
import { NgModule } from "@angular/core";
import {  RouterModule, Routes } from "@angular/router";
import { VerifyEmailComponent } from './screens/app/verify-email/verify-email.component';



const routes: Routes =[
        { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
        { path:'sign-in',component:SinInComponent },
        { path: 'sign-up', component: SingUpComponent},
        { path: 'email-verification', component: VerifyEmailComponent },
        {path:'home',component:NavbarComponent,
                children:[
                        { path: '', redirectTo: 'home/administrador', pathMatch: 'full' },
                        { path:'administrador',component:AdministradorComponent, canActivate: [AdministradorGuard] },
                        { path:'catalogo/:id',component:CatalogoComponent,canActivate: [AdministradorGuard] },
                       
                ]
        } 
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
