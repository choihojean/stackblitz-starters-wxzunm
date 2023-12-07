import MainPage from './components/MainPage';
import Playlist from './components/Playlist';
import App from './App';
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import UserProvider from './components/UserProvider';

const root = createRoot(document.getElementById('app'));

root.render(
  <UserProvider>
    <App />
  </UserProvider>
);
