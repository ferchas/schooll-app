import React from 'react';

import Layout from '../../components/layout';
import News from '../../components/news';

import './style.scss';

const Home = () => (
  <Layout>
    <div className='home' data-value="page">
      <div className="home--title">Novedades</div> 
      <News />
    </div>
  </Layout>
)

export default Home;
