import {City} from '../models/city';

export class TripInfo {
  trip_id: string;
  dateTo: Date;
  dateFrom: Date;
  destination: City;
  numberOfAvailable: any;
  price: any;


  constructor(dateTo: Date, dateFrom: Date, destination: City, numberOfAvailable: any, price: any) {
    this.dateTo = dateTo;
    this.dateFrom = dateFrom;
    this.destination = destination;
    this.numberOfAvailable = numberOfAvailable;
    this.price = price;
  }
}
