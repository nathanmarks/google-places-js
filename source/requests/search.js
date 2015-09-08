import request from './request';

export function searchText (config, query, options = {}) {
  let params = Object.assign(config, options, { query });
  return request('/textsearch', params);
}
