import { AddImgComponent } from './add-img/add-img.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FileUpload } from './../../../models/produto';
import { Component, OnInit } from '@angular/core';
import { CatalogoService } from 'src/app/service/catalogo.service';
import { EditProdutoComponent } from '../administrador/edit-produto/edit-produto.component';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  produtoUnico = {} as FileUpload;

  constructor(
    private service : CatalogoService,
    private dialog : MatDialog
  ) { }

  ngOnInit(): void {

    this.produtoUnico = this.service.GetProdutosCache();
    console.log(this.produtoUnico)
  }

  openEditProduto(produtoUnico : FileUpload){
    const dialogConfig = new MatDialogConfig()
    dialogConfig.data = this.produtoUnico
    this.dialog.open(EditProdutoComponent,dialogConfig)
  }

  openAdImg(produtoUnico : FileUpload){
    const dialogConfig = new MatDialogConfig()
    dialogConfig.data = this.produtoUnico
    this.dialog.open(AddImgComponent,dialogConfig)
  }

}
