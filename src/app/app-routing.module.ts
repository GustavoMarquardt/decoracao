import { AdministradorGuard } from './guards/adm.guard';
import { SinInComponent } from './screens/app/sin-in/sin-in.component';
import { SingUpComponent } from './screens/app/sing-up/sing-up.component';
import { NavbarComponent } from './screens/app/navbar/navbar.component';
import { AppComponent } from './app.component';
import { AdministradorComponent } from './screens/app/administrador/administrador.component';

import { CatalogoComponent } from './screens/app/catalogo/catalogo.component';
import { NgModule } from "@angular/core";
import {  RouterModule, Routes } from "@angular/router";
import { VerifyEmailComponent } from './screens/app/verify-email/verify-email.component';



const routes: Routes =[
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'email-verification', component: VerifyEmailComponent },
        {path:'home',component:NavbarComponent,
                children:[
                        { path: '', redirectTo: 'catalogo', pathMatch: 'full' },
                        { path:'catalogo',component:CatalogoComponent },
                        { path:'administrador',component:AdministradorComponent, canActivate: [AdministradorGuard] },
                        { path:'sing-in',component:SinInComponent },
                        { path:'sing-in/sing-up',component:SingUpComponent,},
                     
                ]
        }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
