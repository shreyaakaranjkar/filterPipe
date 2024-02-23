import { Pipe, PipeTransform } from '@angular/core';
import { Iplayers } from '../model/players.compoent';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {
  selectValue !: String;

  transform(value: Iplayers[], search: string, selectValue: string): Iplayers[] {
   let filterArr: Iplayers[] = value;
   if(!value){
    return value;
   }
   if(!search){
    return value
   }
   console.log(selectValue)
   if(selectValue === 'name'){
    filterArr = value.filter(play => {
    return play.name.toLowerCase().includes(search.trim().toLowerCase())
   })
   }else if(selectValue === 'team'){
    filterArr = value.filter(play => {
    return play.team.toLowerCase().includes(search.trim().toLowerCase())
   })
  }else if(selectValue === 'odiRuns'){
    let minNUm = Math.floor(+search / 1000) * 1000;
    let maxNum = minNUm + 1000;
  
    filterArr = value.filter(play => {
    return play.odiRuns >= minNUm && play.odiRuns <= maxNum
   })
  }else if(selectValue === 'testRuns'){
    let minNUm = Math.floor(+search / 1000) * 1000;
    let maxNum = minNUm + 1000;
  
    filterArr = value.filter(play => {
    return play.testRuns >= minNUm && play.testRuns <= maxNum
   })
  }else if(selectValue === 'yearDebut'){
    let minNUm = Math.floor(+search / 10) * 10;
    let maxNum = minNUm + 10;
  
    filterArr = value.filter(play => {
    return play.yearDebut >= minNUm && play.yearDebut <= maxNum
   })
  }
  
   console.log(filterArr);
   return filterArr;
  }

}
