export class Classificacao{
  category!:string
}

//Produto
export class FileUpload {

    category!:string;
    name!:string;
    // cod!:string;
    description!:string;
    priceBuy!:number;
    amount!:number;
    file:File;
    url!:string;
    
    constructor(file: File) {
        this.file = file;
      }
   
}