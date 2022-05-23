import {Entity, model, property} from '@loopback/repository';

@model()
export class Booklet extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  booklet_id?: number;

  @property({
    type: 'string',
    required: true,
  })
  booklet_name: string;


  constructor(data?: Partial<Booklet>) {
    super(data);
  }
}

export interface BookletRelations {
  // describe navigational properties here
}

export type BookletWithRelations = Booklet & BookletRelations;
