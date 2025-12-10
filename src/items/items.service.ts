import { Injectable, NotFoundException } from '@nestjs/common';

interface Item {
  id: number;
  name: string;
}

@Injectable()
export class ItemsService {
  private items: Item[] = [];
  private idCounter = 1;

  // CREATE
  create(name: string) {
    const newItem = {
      id: this.idCounter++,
      name,
    };
    this.items.push(newItem);
    return newItem;
  }

  // READ ALL
  findAll() {
    return this.items;
  }

  // READ ONE
  findOne(id: number) {
    const item = this.items.find((item) => item.id === id);
    if (!item) throw new NotFoundException('Item not found');
    return item;
  }

  // UPDATE
  update(id: number, newName: string) {
    const item = this.findOne(id);
    item.name = newName;
    return item;
  }

  // DELETE
  delete(id: number) {
    const item = this.findOne(id);
    this.items = this.items.filter((i) => i.id !== id);
    return item;
  }
}
