import React from 'react';

import './style.scss';


const News = () => {
  const listNews = [ {},{},{},{},{},{}];

  return (
      <>
        { listNews && listNews.map((eNew,k) => (
          <div className="news" key={k}>
            <div className="news__header">
              <div className="news__header--label" data-value="color-green">Geografia</div>
              <div className="news__header--flags">
                <p className="news__header--flags__date"> 
                  <img className="news__header--flags__date--icon" src="/icon/attachment-24px.svg"/>
                  <span>05/03/20</span>
                </p>
                <p className="news__header--flags__time"> 
                  <img className="news__header--flags__time--icon" src="/icon/clock-24px.svg"/>
                  <span>23 Abr</span>
                </p>
              </div>
            </div>
            <div className="news__info">
              <h3 className="news__info--title"> Que es la Graometria? Trabajo practico</h3>
              <p className="news__info--description">
                Les dejo en este posteo las consignas para el primer trabajo práctico del año.
                El mismo hace referencia al proceso de conformación del territorio argentino 
                durante el período que coincide con el denominado modelo agroexportador. La bibliografía y las pautas para su realización se encuentran en la primera parte del mismo.
                Les dejo en este posteo las consignas para el primer trabajo práctico del año.
                El mismo hace referencia al proceso de conformación del territorio argentino 
                durante el período que coincide con el denominado modelo agroexportador. La bibliografía y las pautas para su realización se encuentran en la primera parte del mismo.
              </p>
              <p className="news__info--see-more">ver más</p>
            </div>
          </div>
        )) 
      }
    </>
  );
};

export default News;
