import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'dateCount',
})
export class DateCountPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    let uploadtime= value.getTime(); 
    
    let tdate= new Date().getTime();
    let diff=tdate-uploadtime;
    
    var diffHrs=Math.floor((diff%86400000/3600000));

    var diffMins=Math.round(((diff%86400000)%360000)/60000);

    if (diffHrs==0){
      return diffMins + 'mins ago'
    } else{
      return diffHrs + 'hr(s) '+ diffMins + ' mins ago'
    }
  }
}
