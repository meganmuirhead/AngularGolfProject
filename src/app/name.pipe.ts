import { Pipe, PipeTransform } from '@angular/core';
import {UserDataModel} from './user-data.model';
import {PlayerInfoModel} from './player-info.model';

@Pipe({
  name: 'name'
})
export class NamePipe implements PipeTransform {

  transform(value: string, userData: UserDataModel, playerNum: string): string {
    if (!value) {return "";}
    for (let i = 1; i <= 4; i++) {
      if (i === +playerNum) {continue;}
      let playerInfo: PlayerInfoModel = userData['player' + i];
      if (playerInfo.name === value) {
        let newStr: string = "";
        for (let i = value.length - 1; i >= 0; i--) {
          newStr += value.charAt(i);
        }
        return newStr;
      }
    }

    return value;
  }

}
