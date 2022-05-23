import {Entity, model, property} from '@loopback/repository';

@model()
export class Interview extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  interview_id?: number;

  @property({
    type: 'string',
    required: true,
  })
  interview_name: string;

  @property({
    type: 'string',
    required: true,
  })
  interview_description: string;

  @property({
    type: 'date',
    required: true,
  })
  interview_date: string;

  @property({
    type: 'number',
    required: true,
  })
  interview_kilometers: number;

  @property({
    type: 'string',
    required: true,
  })
  interview_observation: string;

  @property({
    type: 'string',
    required: true,
  })
  interview_braking: string;

  @property({
    type: 'string',
    required: true,
  })
  interview_operator: string;

  @property({
    type: 'string',
    required: true,
  })
  interview_modifications: string;


  constructor(data?: Partial<Interview>) {
    super(data);
  }
}

export interface InterviewRelations {
  // describe navigational properties here
}

export type InterviewWithRelations = Interview & InterviewRelations;
