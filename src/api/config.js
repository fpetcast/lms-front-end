import axios from 'axios';

export const lmsApiGateway = axios.create();

lmsApiGateway.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;

lmsApiGateway.defaults.headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
};
  
lmsApiGateway.defaults.timeout = 15000;

lmsApiGateway.defaults.withCredentials = false;

export function getRequest(URL,query) {
return lmsApiGateway.get(`/${URL}`, query ? query : {}).then(response => response);
}
  
export function postRequest(URL, payload) {
return lmsApiGateway.post(`/${URL}`, payload).then(response => response);
}

export function putRequest(URL, payload) {
  return lmsApiGateway.put(`/${URL}`, payload).then(response => response);
}

export function patchRequest(URL, payload) {
return lmsApiGateway.patch(`/${URL}`, payload).then(response => response);
}

export function deleteRequest(URL) {
return lmsApiGateway.delete(`/${URL}`).then(response => response);
}