import * as requests from './requests';

export default function places (config) {
  let api = {};

  Object.keys(requests).map((key) => {

    api[key] = function (...args) {
      return requests[key](config, ...args);
    };
  });

  return api;
}
