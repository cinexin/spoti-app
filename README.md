# Spoti-app
Spotify webapp simple demo using Angular and Spotify API

## Requirements
- NodeJS
- Angular (6+)
- A Spotify account

## Configuring Spotify developer account
Go to Spotify developer site ([https://developer.spotify.com](https://developer.spotify.com)) and create a new APP in the Dashboard section [https://developer.spotify.com/dashboard/applications](https://developer.spotify.com/dashboard/applications)
Then, you'll have an API key and a secret from which you can retrieve *Bearer* tokens

## Getting *Bearer* tokens
The simplest way (at least for me) is downloading _**Postman**_ application for your platform([https://www.postman.com/downloads/](https://www.postman.com/downloads/)) and doing the request either directly to _Spotify API_ or using _Heroku APP_ bridge

You can get the useful _Postman_ collections in this project: [https://github.com/cinexin/spotify-api-postman](https://github.com/cinexin/spotify-api-postman)   

## Configuring your API connection
Go to __environments/environment.ts__ file and edit it with your obtained _Bearer_ token
```json
{
....
  bearerAuthToken: 'Bearer <<your Bearer token here>>',
....
}
```

## Running the APP
Once you've got your _Bearer_ token configured, just run:
```shell script
ng serve
``` 
open your favourite browser, and go to: http://localhost:4200
