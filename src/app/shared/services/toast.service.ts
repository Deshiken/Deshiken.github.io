import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  public toastSubject: Subject<void> = new Subject<void>();

  constructor() { }
}
