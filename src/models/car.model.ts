import {Entity, model, property} from '@loopback/repository';

@model()
export class Car extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  car_id?: number;

  @property({
    type: 'string',
    required: true,
  })
  car_name: string;

  @property({
    type: 'string',
    required: true,
  })
  car_brand: string;

  @property({
    type: 'string',
    required: true,
  })
  car_model: string;

  @property({
    type: 'string',
    required: true,
  })
  car_motor_type: string;

  @property({
    type: 'string',
    required: true,
  })
  car_nb_seats: string;

  @property({
    type: 'string',
    required: true,
  })
  car_color: string;

  @property({
    type: 'number',
    required: true,
  })
  car_power: number;


  constructor(data?: Partial<Car>) {
    super(data);
  }
}

export interface CarRelations {
  // describe navigational properties here
}

export type CarWithRelations = Car & CarRelations;
