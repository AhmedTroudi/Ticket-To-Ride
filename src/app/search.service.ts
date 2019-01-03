import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  apiUrl: string;
  constructor(private http: HttpClient) {
    this.apiUrl = 'https://api.datamuse.com/words?ml=';
  }
}
