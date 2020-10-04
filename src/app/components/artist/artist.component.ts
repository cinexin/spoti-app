import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: [
  ]
})
export class ArtistComponent implements OnInit {

  artist: any = {};
  topTracks: any[] = [];
  loading = true;

  constructor(
    private router: ActivatedRoute,
    private spotify: SpotifyService
  ) {
    this.loading = true;
    this.router.params.subscribe(
      params =>  {
        console.log(params);
        const artistId = params.id;
        this.getArtist(artistId);
        this.getTopTracks(artistId);
      }
    );
  }

  ngOnInit(): void {
  }

  getArtist(id: string): void {
    this.loading = true;
    this.spotify.getArtist(id).subscribe(
      artist => {
        this.artist = artist;
        this.loading = false;
      }
    );
  }

  getTopTracks(id: string, country: string = 'ES'): void {
    this.spotify.getTopTracks(id, country).subscribe(
      topTracks => {
        this.topTracks = topTracks;
      }
    );
  }
}
