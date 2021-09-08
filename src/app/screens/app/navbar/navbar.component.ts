import { AuthService } from 'src/app/service/auth.service';
import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { AddProdutoComponent } from '../administrador/add-produto/add-produto.component';
import { CategoryComponent } from '../administrador/category/category.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  mostraMenu = false;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
    

  constructor(
    public breakpointObserver: BreakpointObserver,
    public authService:AuthService,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  LogOut(){
    window.confirm("Quer mesmo deslogar??")
    this.authService.SignOut();

  }

  openDialogProduto(){
    this.dialog.open(AddProdutoComponent)
  }

  openDialogCategoria(){
    this.dialog.open(CategoryComponent)
  }
  


}
