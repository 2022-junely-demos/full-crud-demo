import { createContext, useContext, useState } from 'react';
import { getUser } from '../services/auth';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const currentUser = getUser();
  console.log({ currentUser });
  const [user, setUser] = useState(currentUser);
  const [authError, setAuthError] = useState('');

  return (
    <UserContext.Provider value={{ user, setUser, authError, setAuthError }}>
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

export { UserProvider, useUser };
