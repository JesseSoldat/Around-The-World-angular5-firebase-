import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MarkerLocation } from '../../models/marker-location';

@Component({
  selector: 'app-map-it',
  templateUrl: './map-it.component.html',
  styleUrls: ['./map-it.component.css']
})
export class MapItComponent {
  lat: number = 51.678418;
  lng: number = 7.809007;
  marker: MarkerLocation = {
    lat: 51.678418,
    lng: 7.809007
  };
  
  constructor(private router: Router) { }

  onSetMarker(event) {
    const { lat, lng } = event.coords;
    this.marker = { lat, lng };
  }

  onSetLocation() {
    this.router.navigate(['add-story', this.marker]);
  }

  onCancel() {
    this.router.navigate(['dashboard']);
  }

}
