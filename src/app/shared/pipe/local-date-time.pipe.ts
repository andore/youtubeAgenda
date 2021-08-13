import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'localDateTime'
})
export class LocalDateTimePipe implements PipeTransform {

  transform(date: string): string {
    let dataOut: moment.Moment = moment(date, "YYYY-MM-DDTHH:mm:ss");
    return dataOut.format("DD-MM-YYYY HH:mm");
  }

}
