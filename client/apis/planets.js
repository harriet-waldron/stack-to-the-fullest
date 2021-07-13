import request from 'superagent'

const rootUrl = '/api/v1'

export function getPlanets () {
  return request.get(rootUrl + '/planets')
    .then(res => {
      return res.body.planets
    })
}
