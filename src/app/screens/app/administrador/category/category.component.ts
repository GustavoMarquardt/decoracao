import { NavegadorService } from './../../../../service/nav.service';
import { AdminService } from './../../../../service/admin.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Classificacao } from 'src/app/models/produto';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categoryClass = {} as Classificacao;

  categoryTabela: Classificacao[] = [];
  categoryTabela$!: Observable<any[]>;



  displayedColumns: string[] = ['servico','deletar'];
  loading = true;
  myControl = new FormControl();
  

  constructor(
    public admService: AdminService,
    public navService: NavegadorService,
    public afs: AngularFirestore,
  ) { 
    this.navService.getAtrributes()
  }

  ngOnInit(): void {


    this.categoryTabela$ = this.navService.category.valueChanges({idField : 'id'});
    this.categoryTabela$.subscribe( category => {
        console.log(this.categoryTabela)
        this.categoryTabela = category;
    });
  }

  onSubmit(){
    console.log(this.categoryClass)
    if(this.categoryClass === undefined){
        window.confirm("Coloque alguma coisa!!")
    } else{
      this.admService.updateclass(this.categoryClass)
    }

  }

  DeletCategory(category: Classificacao){
    console.log(category)
    if( window.confirm("Quer mesmo deletar essa postagem?"))
    this.afs.doc(`/category/${category.category}`).delete()
  }

}
