//random
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { LocationStrategy,HashLocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { NgxMaskModule, IConfig } from 'ngx-mask'

//firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './screens/app/navbar/navbar.component';

//material
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule} from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CatalogoComponent } from './screens/app/catalogo/catalogo.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { AdministradorComponent } from './screens/app/administrador/administrador.component';
import { AddProdutoComponent } from './screens/app/administrador/add-produto/add-produto.component';
import { CategoryComponent } from './screens/app/administrador/category/category.component';
import { SingUpComponent } from './screens/app/sing-up/sing-up.component';
import { SinInComponent } from './screens/app/sin-in/sin-in.component';
import { VerifyEmailComponent } from './screens/app/verify-email/verify-email.component';
import { NgxCurrencyModule } from 'ngx-currency';






@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CatalogoComponent,
    AdministradorComponent,
    AddProdutoComponent,
    CategoryComponent,
    SingUpComponent,
    SinInComponent,
    VerifyEmailComponent,


  ],
  imports: [
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatSidenavModule,
    MatIconModule,
    MatDividerModule,
    MatFormFieldModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    MatTableModule,
    MatDialogModule,
    MatSelectModule,
    MatTabsModule,
    MatButtonModule,
    MatExpansionModule,
    MatToolbarModule,
    MatMenuModule,
    NgxCurrencyModule,
    NgxMaskModule.forRoot({
      dropSpecialCharacters:false
    }),
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    }

  ],
  
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
