import request from './request';

export function details (config, placeid, options = {}) {
  let params = Object.assign(config, options, { placeid });
  return request('/details', params);
}
