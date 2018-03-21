import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {  FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { GOOGLE_STATIC_MAP_KEY } from '../../config/config';
import { DataStoreService } from '../../services/data-store.service';
import { StoryService } from '../../services/story.service';
import { MarkerLocation } from '../../models/marker-location';
import { MyStory } from '../../models/my-story';
import { MyProfile } from '../../models/my-profile';

@Component({
  selector: 'app-add-story',
  templateUrl: './add-story.component.html',
  styleUrls: ['./add-story.component.css']
})
export class AddStoryComponent implements OnInit {
  profile: MyProfile;
  //Google Maps
  key: string = GOOGLE_STATIC_MAP_KEY;
  lat: number;
  lng: number;
  marker: MarkerLocation;
  //Story Form
  storyForm: FormGroup;
  uid: string;
  title: string;
  description: string;
  markerLat: number;
  markerLng: number;
  MyStory: MyStory;
 
  constructor(private route: ActivatedRoute,
              private fb: FormBuilder,
              private dataStoreService: DataStoreService,
              private storyService: StoryService ) {}

  ngOnInit() {
    this.dataStoreService.uid$.subscribe(uid => this.uid = uid);
    this.dataStoreService.profile$.subscribe(profile => this.profile = profile);

    this.route.paramMap.subscribe((data: any) => { 
      this.lat = parseFloat(data.params.lat);
      this.lng = parseFloat(data.params.lng);
      this.markerLat = this.lat;
      this.markerLng = this.lng;
      this.initializeForm(); 
    });
  }

  updateMapLocation({lat, lng}) {
    this.markerLat = lat;
    this.markerLng = lng; 
  }

  submitForm() {
    const {title, description} = this.storyForm.value;
    const story = {
      username: this.profile.username,
      uid: this.uid,
      title,
      description,
      lat: this.markerLat,
      lng: this.markerLng
    }
    this.storyService.getMyProfile(this.uid);
    console.log(story);
    
    
  }

  initializeForm() {
    this.storyForm = this.fb.group({
      title: [this.title, Validators.required],
      description: [this.description]
    });

    this.storyForm.valueChanges.subscribe(values => {
      // console.log(values);
      
    });
  }

 

}
