import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import UserDirectoryPage from './component/UserDirectoryPage';
import UserProfilePage from './component/UserProfilePage';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<UserDirectoryPage />} />
          <Route path="/users/:id" element={<UserProfilePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
