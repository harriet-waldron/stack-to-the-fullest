import request from 'superagent'

const rootUrl = '/api/v1/maorisky'

export function getMaoriSky () {
  return request.get(rootUrl)
    .then(res => {
      return res.body.maorisky
    })
}

