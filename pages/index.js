// pages/index.js
import React from 'react';

function Home() {

  const welcomeMessage = process.env.NEXT_PUBLIC_WELCOME_MESSAGE || 'Welcome to Local';

  return (
    <div>
      <h1>{welcomeMessage}</h1>
    </div>
  );
}

export default Home;
