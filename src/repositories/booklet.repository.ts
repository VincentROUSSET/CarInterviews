import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {CarInterviewDbDataSource} from '../datasources';
import {Booklet, BookletRelations} from '../models';

export class BookletRepository extends DefaultCrudRepository<
  Booklet,
  typeof Booklet.prototype.booklet_id,
  BookletRelations
> {
  constructor(
    @inject('datasources.car_interview_db') dataSource: CarInterviewDbDataSource,
  ) {
    super(Booklet, dataSource);
  }
}
