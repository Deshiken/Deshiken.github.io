import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reversePascalCase',
  standalone: true
})

export class ReversePascalCasePipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return value;

    // Regex inserts a space before every capital letter
    // 'PascalCase' -> ' Pascal Case' -> trim() -> 'Pascal Case'
    return value.replace(/([A-Z])/g, ' $1').trim();
  }

}
