import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'data'
})
export class DataPipe implements PipeTransform {

  transform(value: string, ...args: string[]): Date {
    return new Date(value.replace(' ', 'T'));
  }
  /* outra opção para pegar somente data
  transform(value: string, ...args: string[]): string {
    const dataAtual = value.split(' ');

    return dataAtual[0];
  }*/

}
