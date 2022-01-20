import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'yesNoPipe'
})
export class YesNoPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return value ? "Yes" : "No";
  }

}
