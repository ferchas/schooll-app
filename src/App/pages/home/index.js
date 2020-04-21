import React from 'react';

import Layout from '../../components/layout';

import './style.scss';

const Home = () => (
  <Layout>
    <div className='home'>
      <div className="home--today">24 de Marzo 2020</div> 
      <div className="home--title">Novedades</div> 
      
      <div className="home__news">
        <div className="home__news__header">
          <div className="home__news__header--label">Geografia</div>
          <div className="home__news__header--flags">
            <p> 05/03/20</p>
            <p> 23 Abr</p>
          </div>
        </div>
        <div className="home__news__info">
          <h3 className="home__news__info--title"> Que es la Graometria? Trabajo practico</h3>
          <p className="home__news__info--description">
            Les dejo en este posteo las consignas para el primer trabajo práctico del año.
            El mismo hace referencia al proceso de conformación del territorio argentino 
            durante el período que coincide con el denominado modelo agroexportador. La bibliografía y las pautas para su realización se encuentran en la primera parte del mismo.
            Les dejo en este posteo las consignas para el primer trabajo práctico del año.
            El mismo hace referencia al proceso de conformación del territorio argentino 
            durante el período que coincide con el denominado modelo agroexportador. La bibliografía y las pautas para su realización se encuentran en la primera parte del mismo.
          </p>
        </div>
      </div> 
    </div>
  </Layout>
)

export default Home;
