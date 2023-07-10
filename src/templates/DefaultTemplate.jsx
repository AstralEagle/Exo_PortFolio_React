import React, { useState } from 'react';
import Header from '../components/Header';
import '../styles/default.css';

const DefaultTemplate = ({ children }) => {
  const [isDark, setIsdDark] = useState(false);
  return (
    <>
      <Header changeMode={() => setIsdDark(!isDark)} />
      <main className={`d-flex flex-col flex-1 ${isDark && 'darkMode'}`}>
        {children}
      </main>
    </>
  );
};

export default DefaultTemplate;
