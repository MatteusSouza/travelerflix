
const URL_BACKEND_SERVER = process.env.REACT_APP_ENV === 'development'
  ? 'http://localhost:3000'
  : process.env.REACT_APP_SERVER;

export default {
  URL_BACKEND_SERVER,
};
