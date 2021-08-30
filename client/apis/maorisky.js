import request from 'superagent'

const rootUrl = '/api/v1/maorisky'

export function getMaoriSkyAPI () {
  return request.get(rootUrl)
    .then(res => {
      return res.body.maorisky
    })
}

