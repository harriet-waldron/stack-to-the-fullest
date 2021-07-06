import request from 'superagent'

const rootUrl = '/api/v1'

export function getMaoriSky () {
  return request.get(rootUrl + '/maorisky')
    .then(res => {
      return res.body.maorisky
    })
}
