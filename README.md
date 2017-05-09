# Phish

A promise-based wrapper around the [Phish.net API](https://phishnet.api-docs.io/v3/the-phish-net-api).  So far only `GET` requests are supported.

Full credit goes to the authors of the API.  This is just a convenience wrapper.

## Installation

```bash
$ npm install phish --save
```

## Usage

Instantiate Phish by passing in your api key (obtained from your phish.net account)
```js
const Phish = require('phish');
const phish = new Phish(API_KEY);
const phoo = {};

phish
  .getUpcomingShows()
  .then((data) => {
    phoo.showData = data;
  })
  .then(phish.getRecentSetlists)
  .then((data) => {
    phoo.recentSetlists = data;
  })
  .catch((err) => console.error(err));
```

### Public Methods

Each method has an optional argument of a url query params object (example: `phish.getVenueDetails({venueid: 78})`).

#### Phish#getAllArtists
`/artists/all`

#### Phish#getAttendance
`/attendance/get`

#### Phish#getAuthorizationKey
`/authority/get`

#### Phish#getBlog
`/blog/get`

#### Phish#queryCollections
`/collections/query`

#### Phish#getCollection
`/collections/get`

#### Phish#getAllJamcharts
`/jamcharts/all`

#### Phish#getAllPeople
`/people/all`

#### Phish#getPeopleTypes
`/people/get`

#### Phish#getPerformersByShow
`/people/byshow`

#### Phish#getAppearances
`/people/appearances`

#### Phish#getRelationships
`/relationships/get`

#### Phish#getReview
`/reviews/get`

#### Phish#queryReviews
`/reviews/query`

#### Phish#getLatestSetlist
`/setlists/latest`

#### Phish#getSetlist
`/setlists/get`

#### Phish#getRecentSetlists
`/setlists/recent`

#### Phish#tiph
`/setlists/tiph`

#### Phish#todayInPhishHistory
`/setlists/tiph`

#### Phish#getRandomSetlist
`/setlist/random`

#### Phish#getShowLinks
`/shows/links`

#### Phish#getUpcomingShows
`/shows/upcoming`

#### Phish#getAllVenues
`/venues/all`

#### Phish#getVenueDetails
`/venues/get`

## Full API Docs
https://phishnet.api-docs.io/v3/the-phish-net-api
