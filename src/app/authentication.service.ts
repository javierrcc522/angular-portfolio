import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthenticationService {
  user: Observable<firebase.User>;
  password = "123456789";
  email = "test1@gmail.com";
  constructor(public afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
  }

  login() {
    this.afAuth.auth.signInWithEmailAndPassword(this.email, this.password);
  }

  logout() {
    this.afAuth.auth.signOut();
  }

}
