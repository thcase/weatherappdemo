const SampleGeoLocationData = {
  "results": [
    {
      "address_components": [
        {
          "long_name": "Seattle",
          "short_name": "Seattle",
          "types": [
            "locality",
            "political"
          ]
        },
        {
          "long_name": "King County",
          "short_name": "King County",
          "types": [
            "administrative_area_level_2",
            "political"
          ]
        },
        {
          "long_name": "Washington",
          "short_name": "WA",
          "types": [
            "administrative_area_level_1",
            "political"
          ]
        },
        {
          "long_name": "United States",
          "short_name": "US",
          "types": [
            "country",
            "political"
          ]
        }
      ],
      "formatted_address": "Seattle, WA, USA",
      "geometry": {
        "bounds": {
          "northeast": {
            "lat": 47.734145,
            "lng": -122.2244331
          },
          "southwest": {
            "lat": 47.4919119,
            "lng": -122.4596959
          }
        },
        "location": {
          "lat": 47.6062095,
          "lng": -122.3320708
        },
        "location_type": "APPROXIMATE",
        "viewport": {
          "northeast": {
            "lat": 47.734145,
            "lng": -122.2244331
          },
          "southwest": {
            "lat": 47.4919119,
            "lng": -122.4596959
          }
        }
      },
      "place_id": "ChIJVTPokywQkFQRmtVEaUZlJRA",
      "types": [
        "locality",
        "political"
      ]
    }
  ],
  "status": "OK"
}

export default SampleGeoLocationData
