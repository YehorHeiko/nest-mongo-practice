import { Injectable } from '@nestjs/common';

@Injectable()
export class helloService {
  private test = [123];

  returnTest() {
    return this.test;
  }

  addInDataBase(value: any) {
    const newitem = value;
    this.test.push(value);

    return newitem;
  }
}
