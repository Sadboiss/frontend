const getJwt = () => {
    return localStorage.getItem('jwt');
}

const setJwt = (token) => {
    localStorage.setItem('jtw', token);
}