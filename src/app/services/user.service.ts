import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { User } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';
import { collectionData } from 'rxfire/firestore';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  pathToUsers = `users/${this.auth.getCurrentUser().uid}/items`;

  constructor(private firestore: Firestore, private auth: AuthService) { }

  public async addUser(user: User){
    await addDoc(collection(this.firestore, 'users'), user);
  }

  getUsers(): Observable<User[]>{
    const collectionRef = collection(this.firestore, 'users');
    return collectionData(collectionRef, {idField: 'userId'}) as Observable<User[]>;
  }
}
