import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-sin-in',
  templateUrl: './sin-in.component.html',
  styleUrls: ['./sin-in.component.css']
})
export class SinInComponent implements OnInit {

  constructor(
    public authService: AuthService,
    public router: Router,
  ) { }

  ngOnInit(): void {
  }

  OnSubmit(form: NgForm){
    this.authService.SignIn(form.value.userEmail, form.value.userPassword);
    this.authService.getUserData(form.value.userEmail);
  }

  

}
