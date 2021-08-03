import { Perfil } from './../models/auth';

import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, CollectionReference } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {  

  userLogado = {} as Perfil;



  userState: any;  
  afAuthcurrentUser: any; 
  dadosUser!: AngularFirestoreCollection<Perfil>  
  
  constructor(
    public ngZone: NgZone,
    public afAuth: AngularFireAuth,
    public router: Router,
    public afs: AngularFirestore,
  ) 
  {
    this.afAuth.authState.subscribe((user: any) => {
    if (user) {
      // salva no cache do navegador o dado do usuario para n precisar logar de novo
        /* Saving user data in localstorage when
    logged in and setting up null when logged out */
      this.getUserData(user.email);
      this.userState = user;
      localStorage.setItem('user', JSON.stringify(this.userState));
      JSON.parse(localStorage.getItem('user') || '{ }');
    } else {
      localStorage.setItem('user', '');
      JSON.parse(localStorage.getItem('user') || '{ }');
    }
  });
  }

  /* Setting up user data when sign in with username/password,
  sign up with username/password and sign in with social auth
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  SetUserData(user: any):any{
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`Usuarios/${user.name}`);
    const userState: Perfil = {
        name: user.name,
        surname: user.surname,
        permissao: "Usuario",
        whatsapp: user.whatsapp,
        email: user.email,
        cpf: user.cpf,
        rg: user.rg,
        emailVerified: false,
        cidade:user.cidade,
        endereco:user.endereco, // Naõ esta
        numero:user.numero, // Não esta
        cep:user.cep // Não esta 
    };
    return userRef.set(userState, {
      merge: true
    });
  }

  getUserData(email: string):Perfil{
    var userLogadoCollection: AngularFirestoreCollection<Perfil> = this.afs.collection<Perfil>('/Usuarios', (ref: CollectionReference) => ref.where('email', '==', email));
    var userLogadoCollection$: Observable<Perfil[]> = userLogadoCollection.valueChanges({ idField: 'uid' })
    userLogadoCollection$.subscribe(user => {
          this.userLogado = user[0];
          localStorage.setItem('usercompleto', JSON.stringify(this.userLogado))

        })
    return this.userLogado;
  }


    // Mano tem que olhar isso depois do {} não faço ideia de como que esta entrando mesmo sem puder
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('users') || "{}");
    return (user !== null && user.emailVerified !== false) ? true : false;
  }

  //Login com o email
  SignIn(email: any, password: any): any {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then((result: any) => {
        this.ngZone.run(() => {
          this.router.navigate(['home']);
        });
        this.SetUserData(result.user);
      })
    //   Erro com Login de (firebase -> users/undefined)
      // .catch((error: any) => {
      //   window.alert(error.message);
      // })
      ;
  }

  // Sign up with email/password
  SignUp(user: Perfil, password: string): any {
    return this.afAuth.createUserWithEmailAndPassword(user.email, password)
      .then((result: any) => {
        this.SendVerificationMail();
        user.uid = result.user.uid;
        user.emailVerified = result.user.emailVerified;
        this.SetUserData(user);
      }).catch((error: any) => {
        window.alert(error.message);
      });
      
  }

  // Sign out
  SignOut(): any {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['home']);
    });
  }

  // Send email verfificaiton when new user sign up
  async SendVerificationMail() {
    return (await this.afAuth.currentUser.then(u => u?.sendEmailVerification())
      .then(() => {
        this.router.navigate(['email-verification']);
      }))
  }  

  // Reset Forggot password
  ForgotPassword(passwordResetEmail: any): any {
    return this.afAuth.sendPasswordResetEmail(passwordResetEmail)
    .then(() => {
      window.alert('E-mail de recuperação de senha enviado, cheque seu e-mail.');
    }).catch((error: any) => {
      window.alert(error);
    });
  }  

  AuthLogin(provider: any): any {
    return this.afAuth.signInWithPopup(provider)
    .then((result) => {
      this.ngZone.run(() => {
      this.router.navigate(['home']);
      });
      this.SetUserData(result.user);
    }).catch((error: any) => {
      window.alert(error);
    });
  }   
  
  // Sign in with Google
  GoogleAuth() {
    return this.AuthLogin(new firebase.auth.GoogleAuthProvider());
  } 
}
