import { Controller,Get,Post,Put,Delete,Body,Param} from '@nestjs/common';
import {CreateItemDto} from './dto/create-item-dto'
import { ItemsService } from './items.service';
import {Item} from './interfaces/item.interface' 
@Controller('items')
export class ItemsController {
    constructor(private readonly itemService:ItemsService){}
    @Get()
    findAll():Item[]{
        return this.itemService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id):Item{
        return this.itemService.findOne(id);
    }

    @Post()
    create(@Body() createItemDto:CreateItemDto):string{
        return `Name:${createItemDto.name} Description:${createItemDto.description}`
    }

    @Delete(':id')
    delete(@Param('id') id):string{
        return `Item Deleted ${id}`;
    }
    
    @Put(':id')
    update(@Body() updateItemDto:CreateItemDto,@Param('id') id):string{
        return `Update Item id ${id} | Name ${updateItemDto.name}`;
    }

}
