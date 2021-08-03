import { AuthService } from 'src/app/service/auth.service';
import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  mostraMenu = false;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
    

  constructor(
    public breakpointObserver: BreakpointObserver,
    public authService:AuthService
  ) { }

  ngOnInit(): void {
  }

  LogOut(){
    window.confirm("Quer mesmo deslogar??")
    this.authService.SignOut();

  }

}
