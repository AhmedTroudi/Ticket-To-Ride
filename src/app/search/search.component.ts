import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {SearchService} from '../search.service';

declare const M;
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchTerm: FormControl = new FormControl();

  searchResult = [];
  constructor(private service: SearchService) {}

  ngOnInit() {
    // Scrollspy
    const ss = document.querySelectorAll('.scrollspy');
    M.ScrollSpy.init(ss, {});
    // Auto Complete
    const ac = document.querySelector('.autocomplete');
    M.Autocomplete.init(ac, {
      data: {
        'Aruba': null,
        'Cancun Mexico': null,
        'Hawaii': null,
        'Florida': null,
        'California': null,
        'Jamaica': null,
        'Europe': null,
        'The Bahamas': null,
      }
    });
  }
}
