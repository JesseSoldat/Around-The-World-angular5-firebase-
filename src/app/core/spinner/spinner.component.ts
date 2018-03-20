import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DataStoreService } from '../../services/data-store.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {
  isLoading$: Observable<Boolean>;

  constructor(private dataStoreService: DataStoreService) { }

  ngOnInit() {
    this.isLoading$ = this.dataStoreService.isLoading$;
  }

}
