import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hora'
})
export class HoraPipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
          
    return value.substr(10);
  }

}
