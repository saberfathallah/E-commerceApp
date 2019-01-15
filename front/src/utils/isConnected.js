const isConnected = () => {
  const jwToken = localStorage.getItem('token');
  return !!jwToken;
};

export default isConnected;
