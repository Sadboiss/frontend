const Storage = (function () {

  var _service;

  function getService() {
    if (!_service) {
      _service = this;
      return _service
    }
    return _service
  }

  function setUser(userObj) {
    localStorage.setItem('user', JSON.stringify(userObj));
  }
  function setToken(tokenObj) {
    localStorage.setItem('access_token', tokenObj.access_token);
    localStorage.setItem('refresh_token', tokenObj.refresh_token);
  }
  function getAccessToken() {
    return localStorage.getItem('access_token');
  }
  function getRefreshToken() {
    return localStorage.getItem('refresh_token');
  }
  function clearToken() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
  }
  return {
    getService: getService,
    setUser: setUser,
    setToken: setToken,
    getAccessToken: getAccessToken,
    getRefreshToken: getRefreshToken,
    clearToken: clearToken
  }
})();
export default Storage;