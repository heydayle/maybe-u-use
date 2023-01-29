import request from '~/utils/services/request'

export function GetCategories() {
  return request({
    url: '/v1/d40a12e9-170f-4ea7-b359-81389574e9ed',
    method: 'get',
  })
}
