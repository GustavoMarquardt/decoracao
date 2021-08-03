
import { AngularFirestore } from '@angular/fire/firestore';
import {  Classificacao, FileUpload } from './../../../../models/produto';
import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';
import { NavegadorService } from 'src/app/service/nav.service';
import { Observable } from 'rxjs';
import { ProdutoService } from 'src/app/service/produto.service';

@Component({
  selector: 'app-add-produto',
  templateUrl: './add-produto.component.html',
  styleUrls: ['./add-produto.component.css']
})
export class AddProdutoComponent implements OnInit {

  selectedFiles!: FileList;
  url: any;
  price!:number;
  amount!:number
  categoryCategory!:Classificacao;

  produto = {} as FileUpload;

  categoryTabela: any[] = [];
  categoryTabela$!: Observable<any[]>;
  
  currentFileUpload!: FileUpload;


  selected!:any;

  constructor(
    public admService: AdminService,
    public navService: NavegadorService,
    public afs:AngularFirestore,
    public produtoService: ProdutoService,
  ) {   
    this.navService.getAtrributes()
  }

  ngOnInit(): void {
    this.selected="none"
    console.log(this.selected)
    this.categoryTabela$ = this.navService.category.valueChanges({idField : 'id'});
    this.categoryTabela$.subscribe( category => {
        this.categoryTabela = category;
    });
  }

  onSelectFile(event: any) {
    console.log(this.selected)
    this.selectedFiles = event.target.files;
    if (event.target.files && event.target.files[0]!) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target!.result;
      }
    }
  }


  onSubmit(){
    this.categoryCategory = this.selected;
    this.produto.category = this.categoryCategory.category; 
      console.log('APARECE NOME PLS',this.produto.category)
      const file = this.selectedFiles.item(0);
      this.currentFileUpload = new FileUpload(file!);
      this.produtoService.pushFileToStorage(this.produto.description,this.produto.name,this.price,this.amount,this.produto.category,this.currentFileUpload)
  }

  // category!:string;
  // name!:string;
  // cod!:string;
  // description!:string;
  // priceBuy!:number;
  // amount!:number;
  // file:File;
  // url!:string;
}
