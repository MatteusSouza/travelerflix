const URL_BACKEND_SERVER = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : process.env.REACT_APP_SERVER;

export default {
  URL_BACKEND_SERVER,
};
