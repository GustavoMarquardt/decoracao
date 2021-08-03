import { Perfil } from './../../../models/auth';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent implements OnInit {

    user = {} as Perfil;

  constructor(
    private service: AuthService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.service.SignUp(this.user, form.value.userPassword);
  }


}
