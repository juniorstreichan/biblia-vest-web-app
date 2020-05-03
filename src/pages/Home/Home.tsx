import React from 'react';
import useFeth from '../../services/hooks/useFeth';

const Home: React.FC = () => {
  useFeth('/questions');

  return <div>Welcome to Home</div>;
};

export default Home;
