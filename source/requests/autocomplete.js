import request from './request';

export function autocomplete (config, input, options = {}) {
  let params = Object.assign(config, options, { input });
  return request('/autocomplete', params);
}
