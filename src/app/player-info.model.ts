import { HoleInfoModel } from './hole-info.model';

export class PlayerInfoModel {
 name: string;
 scores: HoleInfoModel = new HoleInfoModel();
}
