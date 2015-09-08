import rp from 'request-promise';

const baseUrl = 'https://maps.googleapis.com/maps/api/place';
const statusErrors = [
  'OVER_QUERY_LIMIT', 'REQUEST_DENIED', 'INVALID_REQUEST'
];

function handleSuccess (res) {
  if (statusErrors.indexOf(res.status) !== -1) {
    throw Object.is(undefined, res.error_message) ? res.status : res.error_message;
  }

  return res;
}

export default function request (endpoint, params, method = 'GET') {

  return rp({
    uri: `${baseUrl}${endpoint}/json`,
    method: method,
    qs: params,
    json: true
  })
    .then(handleSuccess);
}
