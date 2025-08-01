import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'playerTime'
})
export class PlayerTimePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {

    console.log('value: ', value);

    const minutes = Math.floor(value / 600);
    const seconds = value % 600

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');
    return `${formattedMinutes}:${formattedSeconds}`; // "02:30"
  }

}
