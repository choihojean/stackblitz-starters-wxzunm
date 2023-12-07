import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import MusicSpa from './MusicSpa';
import MainPage from './MainPage';
import UserContext from './UserContext';

const Profile = ({ handleRouteMain }) => {
  const [teamName, setTeamName] = useState('Team 아늙싫');
  const [userId, setUserId] = useState(null);
  const [team, setTeam] = useState([]);
  const [userSrc, setUserSrc] = useState('');
  const [userName, setUserName] = useState('');
  const { setCurrentUserId } = useContext(UserContext);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`https://music-json.run.goorm.site/user`, {
          userId: userId,
        });
        setTeam(res.data);
        console.log('user, ', res.data);
      } catch (err) {
        console.log('userfetch error, ', err);
      }
    };
    fetchUser();
  }, []);

  const currentUser = (cUserId) => {
    setCurrentUserId(cUserId);
    handleRouteMain();
    console.log('currentUserID, ', cUserId);
  };

  return (
    <div>
      <h1>{teamName}</h1>
      <div className="center">
        <table id="grid">
          <tbody>
            <tr>
              {team.map((user, idx) => (
                <td key={user.userId}>
                  <button
                    onClick={() => {
                      currentUser(user.userId);
                      console.log('userID, ', user.userId);
                    }}
                  >
                    test
                  </button>
                  <img
                    className="zoom round"
                    width={300}
                    height={300}
                    src={userSrc[idx]}
                    alt={user.userId}
                  />
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Profile;
