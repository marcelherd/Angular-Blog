import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'preview'
})
export class PreviewPipe implements PipeTransform {

  transform(value: string, maxLength: number): any {
    if (value.length <= maxLength) {
      return value;
    }

    let retval = value.substr(0, maxLength);
    retval = retval.substring(0, retval.lastIndexOf(' '));
    return retval + '...';
  }

}
