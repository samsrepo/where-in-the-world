import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paginate'
})
export class PaginatePipe implements PipeTransform {

  transform(list: [], size: any) {
    let page = [];
    if(list) {
      page = list.slice(0, size);
    }
    return page;
  }

}
