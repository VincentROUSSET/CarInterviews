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
import {Booklet} from '../models';
import {BookletRepository} from '../repositories';

@authenticate('jwt')
export class BookletController {
  constructor(
    @repository(BookletRepository)
    public bookletRepository : BookletRepository,
  ) {}

  @post('/booklets')
  @response(200, {
    description: 'Booklet model instance',
    content: {'application/json': {schema: getModelSchemaRef(Booklet)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Booklet, {
            title: 'NewBooklet',
            exclude: ['id'],
          }),
        },
      },
    })
    booklet: Omit<Booklet, 'id'>,
  ): Promise<Booklet> {
    return this.bookletRepository.create(booklet);
  }

  @get('/booklets/count')
  @response(200, {
    description: 'Booklet model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Booklet) where?: Where<Booklet>,
  ): Promise<Count> {
    return this.bookletRepository.count(where);
  }

  @get('/booklets')
  @response(200, {
    description: 'Array of Booklet model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Booklet, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Booklet) filter?: Filter<Booklet>,
  ): Promise<Booklet[]> {
    return this.bookletRepository.find(filter);
  }

  @patch('/booklets')
  @response(200, {
    description: 'Booklet PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Booklet, {partial: true}),
        },
      },
    })
    booklet: Booklet,
    @param.where(Booklet) where?: Where<Booklet>,
  ): Promise<Count> {
    return this.bookletRepository.updateAll(booklet, where);
  }

  @get('/booklets/{id}')
  @response(200, {
    description: 'Booklet model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Booklet, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Booklet, {exclude: 'where'}) filter?: FilterExcludingWhere<Booklet>
  ): Promise<Booklet> {
    return this.bookletRepository.findById(id, filter);
  }

  @patch('/booklets/{id}')
  @response(204, {
    description: 'Booklet PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Booklet, {partial: true}),
        },
      },
    })
    booklet: Booklet,
  ): Promise<void> {
    await this.bookletRepository.updateById(id, booklet);
  }

  @put('/booklets/{id}')
  @response(204, {
    description: 'Booklet PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() booklet: Booklet,
  ): Promise<void> {
    await this.bookletRepository.replaceById(id, booklet);
  }

  @del('/booklets/{id}')
  @response(204, {
    description: 'Booklet DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.bookletRepository.deleteById(id);
  }
}
