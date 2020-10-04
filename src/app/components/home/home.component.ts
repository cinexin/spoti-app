import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  newReleases: any[] = [];
  loading = true;
  error = false;
  errorDescription;

  constructor(private spotify: SpotifyService) {
    this.loading = true;
    this.error = false;
    this.errorDescription = null;
    this.spotify.getNewReleases().subscribe(
      (data: any) => {
        this.newReleases = data;
        this.loading = false;
        this.error = false;
        this.errorDescription = null;
      },
      err => {
        console.log(err);
        this.error = true;
        this.loading = false;
        this.errorDescription = err.error.error.message;
      }
    );
  }

  ngOnInit(): void {
  }

}
