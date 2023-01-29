import request from '~/utils/services/request'

export function GetCategories() {
  return request({
    url: '/v1/d40a12e9-170f-4ea7-b359-81389574e9ed',
    method: 'get',
  })
}
export function GetBanners() {
  return request({
    url: '/v1/57a8a31b-86f5-42c6-853f-bec163a4ece6',
    method: 'get',
  })
}
