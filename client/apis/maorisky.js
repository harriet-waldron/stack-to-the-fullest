import request from 'superagent'

const rootUrl = '/api/v1'

export function getMaoriSky () {
  return request.get(rootUrl + '/maorisky')
    .then(res => {
      console.log(res.body)
      return res.body.maorisky
    })
}
