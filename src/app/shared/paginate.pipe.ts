import { Pipe, PipeTransform } from '@angular/core';


/**
 * Pipe to paginate a list of objects
 */
@Pipe({
  name: 'paginate'
})
export class PaginatePipe implements PipeTransform {


  /**
   * Returns a slice of the object array depending on how much
   * is asked for
   * @param list The entire list of objects
   * @param size How much has been requested
   * @returns The sliced array
   */
  transform(list: any[], size: any): any[] {
    let page = [];
    if (list) {
      page = list.slice(0, size);
    }
    return page;
  }

}
