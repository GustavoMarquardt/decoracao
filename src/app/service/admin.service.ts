import { Classificacao } from './../models/produto';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, CollectionReference } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})

  
export class AdminService {

    constructor(
        public afs: AngularFirestore,
    ){ }

    updateclass(category: Classificacao) {
      console.log('oioio',category.category)
        return new Promise<Classificacao>((resolve, reject) =>{
            this.afs
                .collection("category").doc(category.category).set(category)
                .then(res => {}, err => reject(err));
        });
      }

      getDados(): AngularFirestoreCollection < Classificacao>{

        var category: AngularFirestoreCollection <Classificacao> = this.afs.collection<Classificacao>("category",(ref: CollectionReference) =>
         ref.orderBy('class')
        )
         return category;
       }

}
