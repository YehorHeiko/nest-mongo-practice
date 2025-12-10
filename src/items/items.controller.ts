import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Patch,
  Delete,
} from '@nestjs/common';
import { ItemsService } from './items.service';

export interface Item {
  id: number;
  name: string;
}

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Post()
  create(@Body('name') name: string) {
    return this.itemsService.create(name);
  }

  @Get()
  findAll(): Item[] {
    return this.itemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Item {
    return this.itemsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body('name') name: string): Item {
    return this.itemsService.update(+id, name);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Item {
    return this.itemsService.delete(+id);
  }
}
