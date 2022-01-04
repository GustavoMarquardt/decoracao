import { FileUpload } from './../models/produto';
import { Injectable } from "@angular/core";
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreCollectionGroup, CollectionReference } from "@angular/fire/firestore";
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from "rxjs";
import { finalize } from "rxjs/internal/operators/finalize";
import {AngularFireDatabase} from '@angular/fire/database';




@Injectable({
    providedIn: 'root'
  })

  export class ProdutoService{


    basePath: any;

    constructor(
        public afs : AngularFirestore,
        private storage: AngularFireStorage,
        public afd: AngularFireDatabase,
    ) {
    }
    pushFileToStorage(description:any,name:any,priceBuy:number,amount:number,category:any,fileUpload: FileUpload,){
      console.log('category:',category,'name:',name,'price:',priceBuy,'amount:',amount,'description:',description,'file:',fileUpload)
                const filePath = (`produtos/${name}`);
                const storageRef = this.storage.ref(filePath);
                const uploadTask = this.storage.upload(filePath, fileUpload.file);

                uploadTask.snapshotChanges().pipe(
                  finalize(() => {
                    storageRef.getDownloadURL().subscribe(downloadURL => {
                      fileUpload.url = downloadURL;
                      fileUpload.name = fileUpload.file.name;
                      this.saveFileData(description,name,priceBuy,amount,category,fileUpload);
                    });
                  })
                ).subscribe();

                return uploadTask.percentageChanges();
              }

              public saveFileData(description:string,name:string,priceBuy:number,amount:number,category:string,fileUpload:FileUpload){
                console.log('FILE DATA category:',category,'name:',name,'price:',priceBuy,'amount:',amount,'description:',description,'file:',fileUpload)
                this.basePath = this.afs.createId();
                this.afs.doc(`produtos/${ this.basePath}`).set({
                  id!:this.basePath,
                  name!:name,
                  category!:category,
                  priceBuy!:priceBuy,
                  url!: fileUpload.url,
                  amount!:amount,
                  description!:description
                });
                this.afd.list(this.basePath).push(fileUpload);

        }



    }
