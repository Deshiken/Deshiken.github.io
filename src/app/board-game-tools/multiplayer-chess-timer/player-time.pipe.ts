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
    const formattedSecondsString = `${formattedSeconds.slice(0,2)}${formattedSeconds.length > 2 ? '.' : ''}${formattedSeconds.slice(2)}`;
    return `${formattedMinutes}:${formattedSecondsString}`; // "02:00" or "01:03.5"
  }

}
