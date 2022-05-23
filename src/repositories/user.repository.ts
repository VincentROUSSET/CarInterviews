import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {CarInterviewDbDataSource} from '../datasources';
import {User, UserRelations} from '../models';

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype.user_id,
  UserRelations
> {
  constructor(
    @inject('datasources.car_interview_db') dataSource: CarInterviewDbDataSource,
  ) {
    super(User, dataSource);
  }
}
