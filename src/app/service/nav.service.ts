import { Injectable } from "@angular/core";
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreCollectionGroup, CollectionReference } from "@angular/fire/firestore";
import { Class } from "estree";




@Injectable({
    providedIn: 'root'
  })

  export class NavegadorService{

    category!:AngularFirestoreCollection<Class>;


    constructor(
        public afs : AngularFirestore
    ) {
    }      

    getAtrributes():any{
        this.category = this.afs.collection<Class>('/category',(ref: CollectionReference) => ref.orderBy('category'));;   
    }

   
  } 