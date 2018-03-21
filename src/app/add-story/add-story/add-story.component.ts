import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GOOGLE_STATIC_MAP_KEY } from '../../config/config';
import { MarkerLocation } from '../../models/marker-location';

@Component({
  selector: 'app-add-story',
  templateUrl: './add-story.component.html',
  styleUrls: ['./add-story.component.css']
})
export class AddStoryComponent implements OnInit {
  key: string = GOOGLE_STATIC_MAP_KEY;
  lat: number;
  lng: number;
 
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((data: any) => { 
      this.lat = parseInt(data.params.lat);
      this.lng = parseInt(data.params.lng);
    });
  }

}
