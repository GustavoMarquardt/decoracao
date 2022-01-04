import { FileUpload } from './../models/produto';
import { Injectable, NgZone } from '@angular/core';



@Injectable({
  providedIn: 'root'
})

  
export class CatalogoService {

    produtoCache = {} as FileUpload;


    GetProdutosCache():any{
        this.produtoCache = JSON.parse(localStorage.getItem('dadosEdit') || '{ }');
        return this.produtoCache
    }


}
