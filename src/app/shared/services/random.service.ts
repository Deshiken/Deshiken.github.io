import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomService {

  constructor() { }

  public getRandomEntryFromMap(map: Map<any, any>) :any {
    const keys = Array.from(map);
    return keys[Math.floor(Math.random()*keys.length)]
  };

  public getRandomEntryFromArray(array: Array<any>) :any {
    return array[Math.floor(Math.random()*array.length)]
  };

  public deleteFromArray(arrayToDeleteFrom: Array<any>, value: any) {
    const index = arrayToDeleteFrom.indexOf(value);
    if (index > -1) {    // only splice array when item is found
      arrayToDeleteFrom.splice(index, 1); // 2nd parameter means remove one item only
    }
  }

}
