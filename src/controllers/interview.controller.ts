import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Interview} from '../models';
import {InterviewRepository} from '../repositories';

@authenticate('jwt')
export class InterviewController {
  constructor(
    @repository(InterviewRepository)
    public interviewRepository : InterviewRepository,
  ) {}

  @post('/interviews')
  @response(200, {
    description: 'Interview model instance',
    content: {'application/json': {schema: getModelSchemaRef(Interview)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Interview, {
            title: 'NewInterview',
            exclude: ['id'],
          }),
        },
      },
    })
    interview: Omit<Interview, 'id'>,
  ): Promise<Interview> {
    return this.interviewRepository.create(interview);
  }

  @get('/interviews/count')
  @response(200, {
    description: 'Interview model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Interview) where?: Where<Interview>,
  ): Promise<Count> {
    return this.interviewRepository.count(where);
  }

  @get('/interviews')
  @response(200, {
    description: 'Array of Interview model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Interview, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Interview) filter?: Filter<Interview>,
  ): Promise<Interview[]> {
    return this.interviewRepository.find(filter);
  }

  @patch('/interviews')
  @response(200, {
    description: 'Interview PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Interview, {partial: true}),
        },
      },
    })
    interview: Interview,
    @param.where(Interview) where?: Where<Interview>,
  ): Promise<Count> {
    return this.interviewRepository.updateAll(interview, where);
  }

  @get('/interviews/{id}')
  @response(200, {
    description: 'Interview model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Interview, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Interview, {exclude: 'where'}) filter?: FilterExcludingWhere<Interview>
  ): Promise<Interview> {
    return this.interviewRepository.findById(id, filter);
  }

  @patch('/interviews/{id}')
  @response(204, {
    description: 'Interview PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Interview, {partial: true}),
        },
      },
    })
    interview: Interview,
  ): Promise<void> {
    await this.interviewRepository.updateById(id, interview);
  }

  @put('/interviews/{id}')
  @response(204, {
    description: 'Interview PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() interview: Interview,
  ): Promise<void> {
    await this.interviewRepository.replaceById(id, interview);
  }

  @del('/interviews/{id}')
  @response(204, {
    description: 'Interview DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.interviewRepository.deleteById(id);
  }
}
