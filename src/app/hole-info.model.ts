
export class HoleInfoModel {
  hole1: number = 0;
  hole2: number = 0;
  hole3: number = 0;
  hole4: number = 0;
  hole5: number = 0;
  hole6: number = 0;
  hole7: number = 0;
  hole8: number = 0;
  hole9: number = 0;
  hole10: number = 0;
  hole11: number = 0;
  hole12: number = 0;
  hole13: number = 0;
  hole14: number = 0;
  hole15: number = 0;
  hole16: number = 0;
  hole17: number = 0;
  hole18: number = 0;

  get grandTotal(): number {
    let total = 0;
    for (let i = 1; i <= 18; i++) {
      total += this['hole' + i];
    }
    return total;
  }

  get inTotal(): number {
    let total = 0;
    for (let i = 1; i <= 9; i++) {
      total += this['hole' + i];
    }
    return total;
  }

  get outTotal(): number {
    let total = 0;
    for (let i = 10; i <= 18; i++) {
      total += this['hole' + i];
    }
    return total;
  }
}
