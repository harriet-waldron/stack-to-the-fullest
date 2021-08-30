import request from 'superagent'

const rootUrl = '/api/v1'

export function getPlanetsAPI () {
  return request.get(rootUrl + '/planets')
    .then(res => {
      return res.body.planets
    })
}
