import React, { useState, useEffect } from 'react';
import UserContext from './UserContext';
import axios from 'axios';

const UserProvider = ({ children }) => {
  const [currentUserId, setCurrentUserId] = useState(null);

  useEffect(() => {
    axios
      .get(`https://music-json.run.goorm.site/user/`, {
        params: {
          userId: 1,
        },
      })
      .then((response) => {
        setCurrentUserId(response.data.userId);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <UserContext.Provider value={{ currentUserId, setCurrentUserId }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
