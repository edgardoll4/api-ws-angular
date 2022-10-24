import { Pipe, PipeTransform } from '@angular/core';
import { Messege } from '../interfaces/messege.interface';

@Pipe({
  name: 'paginate'
})
export class PaginatePipe implements PipeTransform {

  transform(array: Messege[], limit: number , page: number): Messege[] {
    if (!array.length) { return []; } // if no items, return empty array
    if (page === 1) {           // if page is 1, return items from 0 to limit
      return array.slice(0, limit);
    } else {                  // else return items starting from page*limit to (page*limit)+limit
      return array.slice((page - 1) * limit, (page - 1) * limit + limit); 
    }
  }
}
