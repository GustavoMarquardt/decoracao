import { NavegadorService } from 'src/app/service/nav.service';
import { AdminService } from 'src/app/service/admin.service';
import { CategoryComponent } from './category/category.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddProdutoComponent } from './add-produto/add-produto.component';
import { Observable } from 'rxjs';
import { FileUpload } from 'src/app/models/produto';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { map, startWith, take } from 'rxjs/operators';


@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {

  produtoMostra: FileUpload[] = [];
  produtoMostra$!: Observable<FileUpload[]>;

  produtoMostraFiltrado: FileUpload[] = [];
  produtoMostraFiltrado$!: Observable<FileUpload[]>;

  loading = true;


  myControl = new FormControl();

  constructor(  private dialog: MatDialog,
                private navService:NavegadorService,
                private router: Router,
                private admService: AdminService
              )
    {
      this.navService.getAtrributes();
     }

  ngOnInit(): void {

    this.produtoMostra$ = this.navService.produto.valueChanges({ idField: 'id' });
    this.produtoMostra$.subscribe(produto =>{
      console.log(produto)
      this.produtoMostra = produto;
      this.produtoMostraFiltrado = produto;
    });
    
    this.produtoMostra$.pipe(
      take(1)
    ).subscribe(() => this.loading = false);

    this.produtoMostraFiltrado$ = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
    this.produtoMostraFiltrado$.subscribe(
      produtoFiltrado => {
        console.log(produtoFiltrado)
        this.produtoMostraFiltrado = produtoFiltrado;
        
      });

  }

  openDialogProduto(){
    this.dialog.open(AddProdutoComponent)
  }

  openCatalogo(produto:FileUpload){
    this.admService.ProdutoSave(produto)
    this.router.navigate(['home/catalogo/',produto.id]);
  }

  _filter(valorFiltro: string): FileUpload[] {
    let returnArray: FileUpload[] = [];
    if (this.loading) {
      return this.produtoMostra;
    }
    if (valorFiltro === '') {
      return this.produtoMostra;
    }
    if (this.produtoMostra != null) {
      console.log(returnArray)
      returnArray = this.produtoMostra.filter(
        (value) => {
          return value.name.toLowerCase().indexOf(valorFiltro.toLowerCase()) >= 0 
          || value.category.toLowerCase().indexOf(valorFiltro.toLowerCase()) >= 0 
        }
      );
    }
    return returnArray;
  }



}
