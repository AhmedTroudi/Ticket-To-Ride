import { Component, OnInit } from '@angular/core';
declare const M;
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const mb = document.querySelectorAll('.materialboxed');
    M.Materialbox.init(mb, {});
  }

}
