import { Component, Inject, OnInit } from '@angular/core';
import {  MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FileUpload } from 'src/app/models/produto';
import {  FormControl, FormGroup } from '@angular/forms';
import { EditProdutoService } from 'src/app/service/edit-produto.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-edit-produto',
  templateUrl: './edit-produto.component.html',
  styleUrls: ['./edit-produto.component.css']
})
export class EditProdutoComponent implements OnInit {

  produtoEdit!: FileUpload;

  public editForm!: FormGroup;
  
  
  myControl = new FormControl();
  teste = 'teste';
  constructor(
    @Inject(MAT_DIALOG_DATA)
   data :any,
   private dialog: MatDialog, 
   private service: EditProdutoService,
   public router: Router,
   ) { 
        this.produtoEdit = data
    }

  ngOnInit(): void {
   console.log('MAMA',this.produtoEdit.name)
  }

  onEdit(produtoEdit:FileUpload) {
      console.log('PRODUTO EDIT',produtoEdit) 
      this.dialog.closeAll(); 
    // this.service.updateUsuario(this.dados);
  }

  deletProduto() {
    if(window.confirm('Deseja realmente excluir este produto?')) {
      this.service.deleteProduto(this.produtoEdit.id);  
    }
    this.router.navigate(['home/administrador']);
  } 




}
