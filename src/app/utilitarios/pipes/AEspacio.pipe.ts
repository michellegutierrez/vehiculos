import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'aEspacio'
})
export class AEspacioPipe implements PipeTransform {

  transform(value: any, buscar ?: string): any {
    const valorRemplazo = " ";
    return value.replaceAll(buscar, valorRemplazo);
  }

}
