import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBySearch'
})
export class SortBySearchPipe implements PipeTransform {

  transform(value: any, searchStr: string): any {
      let sortData: Array<any> =  value.reduce((sortData, data) => {
        for (let key in data) {
          if (key === "date") {
            return sortData;
          }
          if (data[key].indexOf(searchStr) != -1) {
           sortData.push(data);
            return sortData;
          }
        }
        return sortData;
      }, []);
    if (sortData.length != 0) {
      return sortData;
    }
    else {
      return value;
    }
  }
}
