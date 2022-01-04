import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FileUpload } from 'src/app/models/produto';

@Component({
  selector: 'app-add-img',
  templateUrl: './add-img.component.html',
  styleUrls: ['./add-img.component.css']
})
export class AddImgComponent implements OnInit {

  produtoEdit!: FileUpload;

  selectedFiles!: FileList;
  selected!: any;
  url: any;
  img!:string;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    data: any,
    private dialog: MatDialog,
    public router: Router,) {
    this.produtoEdit = data;
  }

  ngOnInit(): void {
    console.log(this.produtoEdit)
  }

  onSelectFile(event: any) {
    console.log(this.selectedFiles)
    this.selectedFiles = event.target.files;
    if (event.target.files && event.target.files[0]!) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target!.result;
      }
    }
  }

  onSubmit() {
    // this.produto.category = this.categoryCategory.category;
     console.log('APARECE NOME PLS', this.selectedFiles)
    // const file = this.selectedFiles.item(0);
    // this.currentFileUpload = new FileUpload(file!);
    // this.produtoService.pushFileToStorage(this.produto.description, this.produto.name, this.price, this.amount, this.produto.category, this.currentFileUpload)
    // this.navService.getAtrributes()
  }
}
