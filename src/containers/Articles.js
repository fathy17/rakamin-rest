import React from 'react';
import Articles from '../components/Articles';
import { articles } from '../data';

const Home = () => {
  return (
    <div>
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>Strapi blog</h1>
          <Articles articles={articles} />
        </div>
      </div>
    </div>
  );
};

export default Home;
