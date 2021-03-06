import { Center } from './../models/center';
import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { addDoc, arrayUnion, collection, doc, setDoc, updateDoc } from 'firebase/firestore';
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

  async updateUser(user: User) {
    await setDoc(doc(this.firestore, `users/${user.userId}`), user);
  }

  async addReview(user: User, review: string, rate: number, centerName: string, centerId: string) {
    await updateDoc(doc(this.firestore, `users/${user.userId}`), {reviews: arrayUnion({firstName: user.firstName, lastName: user.lastName, center: centerName, review: review, rate: rate})});
    await updateDoc(doc(this.firestore, `centers/${centerId}`), {reviews: arrayUnion({firstName: user.firstName, lastName: user.lastName, center: centerName, review: review, rate: rate})});
  }
}
