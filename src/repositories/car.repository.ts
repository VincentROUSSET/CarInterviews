import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {CarInterviewDbDataSource} from '../datasources';
import {Car, CarRelations} from '../models';

export class CarRepository extends DefaultCrudRepository<
  Car,
  typeof Car.prototype.car_id,
  CarRelations
> {
  constructor(
    @inject('datasources.car_interview_db') dataSource: CarInterviewDbDataSource,
  ) {
    super(Car, dataSource);
  }
}
