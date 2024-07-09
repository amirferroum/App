import { useState } from 'react';

const useNgrokUrl = () => {
  const [ngrokUrl, setNgrokUrl] = useState('21e9-105-109-242-204.ngrok-free.app');

  const setUrl = (url) => {
    setNgrokUrl(url);
  };

  return { ngrokUrl, setUrl };
};

export default useNgrokUrl;
