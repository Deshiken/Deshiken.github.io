import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'playerTime'
})
export class PlayerTimePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {

    console.log('value: ', value);

    if (value >= 600) { // 1 minute or more of time remaining
      return `${value / 600}:${(value % 600)/60}`;
    } else {
      return String(value / 10);
    }
  }

}
