import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MarkerLocation } from '../../models/marker-location';
import { Router } from '@angular/router';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent {
  @Output() markerLocation = new EventEmitter();
  @Input() type: string;
  @Input() lat: number;
  @Input() lng: number;
  marker: MarkerLocation;
  
  constructor(private router: Router) { }

  ngOnInit() {
    this.marker =  {
      lat: this.lat,
      lng: this.lng
    }; 
  }

  onSetMarker(event) {
    const { lat, lng } = event.coords;
    this.marker = { lat, lng };
    this.markerLocation.next(this.marker);
  }

  onSetLocation() {
    this.router.navigate(['add-story', this.marker]);
  }

  onCancel() {
    this.router.navigate(['dashboard']);
  }

}
