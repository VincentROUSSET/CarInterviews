import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {CarInterviewDbDataSource} from '../datasources';
import {Interview, InterviewRelations} from '../models';

export class InterviewRepository extends DefaultCrudRepository<
  Interview,
  typeof Interview.prototype.interview_id,
  InterviewRelations
> {
  constructor(
    @inject('datasources.car_interview_db') dataSource: CarInterviewDbDataSource,
  ) {
    super(Interview, dataSource);
  }
}
