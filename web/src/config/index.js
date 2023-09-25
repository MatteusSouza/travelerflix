const URL_BACKEND_SERVER = window.location.hostname.includes('localhost')
  ? 'http://localhost:3000'
  : process.env.REACT_APP_SERVER;

export default {
  URL_BACKEND_SERVER,
};
