import { Injectable } from '@nestjs/common';
import {Item} from './interfaces/item.interface'

@Injectable()
export class ItemsService {
    private readonly items:Item[]=[
        {
            id:'12134121',
            name:'Item 1',
            qty:1000,
            description:"This is Item1"
        },
        {
            id:'12134122',
            name:'Item 2',
            qty:1000,
            description:"This is Item2"
        },
        {
            id:'12134123',
            name:'Item 3',
            qty:3000,
            description:"This is Item3"
        }
    ]
    findAll():Item[]{
        return this.items;
    }
    findOne(id):Item{
        return this.items.find(item=>item.id===id)
    }
}
