import { Injectable } from "@angular/core";
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreCollectionGroup, CollectionReference } from "@angular/fire/firestore";
import { Class } from "estree";
import { FileUpload } from "../models/produto";




@Injectable({
    providedIn: 'root'
  })

  export class NavegadorService{

    category!:AngularFirestoreCollection<Class>;

    produto!:AngularFirestoreCollection<FileUpload>;


    constructor(
        public afs : AngularFirestore
    ) {
    }      

    getAtrributes():any{

        this.category = this.afs.collection<Class>('/category',(ref: CollectionReference) => ref.orderBy('category'));
        this.produto = this.afs.collection<FileUpload>('/produtos');    
    }

   
  } 