import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { addDoc, collection, doc } from 'firebase/firestore';
import { collectionData, docData } from 'rxfire/firestore';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private firestore: Firestore, private auth: AuthService) {}

  public async addUser(user: User){
    await addDoc(collection(this.firestore, 'users'), user);
  }

  getUsers(): Observable<User[]>{
    const collectionRef = collection(this.firestore, 'users');
    return collectionData(collectionRef, {idField: 'userId'}) as Observable<User[]>;
  }
  
}
