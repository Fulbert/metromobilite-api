import MAPI from '../index'
import { MAPIFeature } from '../../lib/types'

const M = new MAPI()

/**
 * Check that M is an instance of MAPI Class
 */
test('MAPI is a MAPI object', () => {
  expect(M).toBeInstanceOf(MAPI)
})

/**
 * Check that getData return a MVA feature when requested to do so.
 */
test('Get features list', async () => {
  expect((await M.getData('featuresList', { types: 'MVA' }))[0]).toMatchObject<
    MAPIFeature
  >({
    type: 'Feature',
    properties: {
      type: 'MVA',
    },
    geometry: {
      type: 'Point',
      coordinates: [expect.any(Number), expect.any(Number)],
    },
  })
})
