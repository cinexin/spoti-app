import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  spotiUrl = environment.spotiUrlV1;
  bearerAuthToken = environment.bearerAuthToken;
  headers = new HttpHeaders({
    Authorization: this.bearerAuthToken
  });

  constructor(private http: HttpClient) { }


  private launchQuery(query: string): Observable<any> {
    return this.http.get(`${this.spotiUrl}/${query}`, {headers: this.headers});
  }

  getNewReleases(): Observable<any> {
    return this.launchQuery('browse/new-releases').pipe(
      map(data => data.albums.items)
    );
  }

  searchArtists(searchTerm: string): Observable<any> {
    return this.launchQuery(`search?q=${searchTerm}&type=artist&limit=15`).pipe(
      map(data => data.artists.items)
    );
  }

  getArtist(artistId: string): Observable<any> {
    return this.launchQuery(`artists/${artistId}`);
  }

  getTopTracks(artistId: string, country: string): Observable<any> {
    return this.launchQuery(`artists/${artistId}/top-tracks?country=${country}`).pipe(
      map(data => data.tracks)
    );
  }
}
