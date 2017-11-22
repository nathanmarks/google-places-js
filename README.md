# Google Places API Client

**Detailed docs and tests coming soon...**


## Basic Usage

Current version only supports the `autocomplete`, `searchtext` and `details` endpoints.

``` js
import Places from 'google-places-js';

// Setup with server api key

const places = Places.create({ key: 'YOUR_API_KEY' });

// Logs the response from an autocomplete search

places.autocomplete('Toron').then((res) => {
  console.log(res);
}).catch((err) => {
  console.log(err);
});

// Pass optional params as an object for all methods

places.autocomplete('Toron', {
  types: 'geocode'
});

// Logs the response from a text search

places.searchText('123 Queen St Toronto').then((res) => {
  console.log(res);
}).catch((err) => {
  console.log(err);
});

// Logs the response from a details request

places.details('SOME_PLACE_ID').then((res) => {
  console.log(res);
}).catch((err) => {
  console.log(err);
});

```
