import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  artists: any[] = [];
  loading = false;

  constructor(private spotify: SpotifyService) {
  }

  ngOnInit(): void {
  }

  searchArtist(searchTerm: string): void {
    console.log(`Search term: ${searchTerm}`);
    if (searchTerm && searchTerm !== '') {
      this.loading = true;
    }
    this.spotify.searchArtists(searchTerm).subscribe(
      (data: any) => {
        this.artists = data;
        this.loading = false;
      }
    );
  }
}
