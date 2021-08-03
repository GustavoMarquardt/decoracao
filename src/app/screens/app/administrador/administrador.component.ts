import { CategoryComponent } from './category/category.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddProdutoComponent } from './add-produto/add-produto.component';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {

  constructor(  private dialog: MatDialog,) { }

  ngOnInit(): void {
  }

  openDialogProduto(){
    this.dialog.open(AddProdutoComponent)
  }

  openDialogCategoria(){
    this.dialog.open(CategoryComponent)
  }


}
