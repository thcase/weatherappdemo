/**
 * Provides Unit Test for Geolocation Service
 * @licence MIT
 * @copyright 2021 T.H. Case
 * @author thcase <thcase@outlook.com>
 */

import service from './GeoLocationService'
import knownData from './sample-geo-location-data'

describe('GeoLocationService should: ', () => {
    it('Return proper coordinates for location', async () => {
      const address = 'Seattle'
      const knownLocation = knownData.results[0].geometry.location
      const location = await service.getLocationInformation(address)
      expect(location).toBeDefined()
      expect(location.lat).toBeDefined()
      expect(location.lng).toBeDefined()
      expect(location.lat).toEqual(knownLocation.lat)
      expect(location.lng).toEqual(knownLocation.lng)
    })
  }
)
