import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'degreePrefix'
})
export class DegreePrefixPipe implements PipeTransform {

  transform(value: number | undefined | null): string | null | undefined{
    if ( !value ) {
      return null;
    }
    let prefix: string = '';
    if ( value > 1e3 && value < 1e6 ) {
      value /= 1e3;
      prefix = 'K';
    } else if ( value > 1e6 && value < 1e9) {
      value /= 1e6
      prefix = 'M';
    } else if ( value > 1e9 ) {
      value /= 1e9;
      prefix = 'B';
    }
    return (value.toFixed(2) + prefix);
  }
}
