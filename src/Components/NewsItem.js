import React from 'react'

const NewsItem = (props) =>{
    let {title, description, imageUrl, newsUrl, author, date, source} = props;
    return (
      <div className="my-3">
        <div className="card">
          <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
            position: 'absolute',
            right: '0'
          }}>
        <span className="badge rounded-pill bg-danger">{source}</span>
        </div>
          <img src={!imageUrl?"https://www.livemint.com/lm-img/img/2024/01/12/1600x900/2-0-729496930-RTX14A9T-0_1680338420819_1705085687360.jpg":imageUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-body-secondary">By {!author?"Unknown": author} on {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
} 

export default NewsItem