import { FileUpload } from './../models/produto';
import { Injectable, NgZone } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';



@Injectable({
  providedIn: 'root'
})



  
export class EditProdutoService {

    constructor(private afs: AngularFirestore, private ngZone: NgZone) { }  

    deleteProduto(id:string){
        this.afs.doc(`/produtos/${id}`).delete()  
    }


}
