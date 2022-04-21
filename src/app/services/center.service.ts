import { collectionData } from 'rxfire/firestore';
import { Observable } from 'rxjs';
import { Firestore } from '@angular/fire/firestore';
import { addDoc, collection } from 'firebase/firestore';
import { Center } from './../models/center';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CenterService {

  constructor(private firestore: Firestore) { }

  getCenters(): Observable<Center[]>{
    const collectionRef = collection(this.firestore, 'centers');
    return collectionData(collectionRef, {idField: 'centerId'}) as Observable<Center[]>;
  }
}
