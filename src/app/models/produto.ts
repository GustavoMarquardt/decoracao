export class Classificacao{
  category!:string
}

//Produto
export class FileUpload {
    id!:string;
    category!:string;
    name!:string;
    // cod!:string;
    description!:string;
    priceBuy!:number;
    amount!:number;
    file:File;
    url!:any;

    constructor(file: File) {
        this.file = file;
      }

}
