import React from 'react';

const PhotoDetailsPage = ({ image, vote, onHearClick, onArrowClick }) => {
    return (

      <article>
        <header>
          <a onClick={onArrowClick} className="arrow-back"><i className="fa fa-arrow-left fa-lg"></i></a>
          <h1 className="image-title text-center">{image.name}</h1>
        </header>
        <div>
          <div className="image-details__wrapper">
            <img className="image-details" src={image.url} />
          </div>
        </div>
        <div>
          <div>
            <section >
              <div className="section-item">
                <h2 className="author_name">{image.author}</h2>
                <span onClick={onHearClick} className="item-heart"><i className={vote ? "fa fa-lg fa-heart item-heart__icon"
                  : "fa fa-lg fa-heart-o item-heart__icon"}></i></span>
              </div>
            </section>
            <section>
              <ul className="section-activity">
                <li>449 Likes - </li>
                <li>&nbsp;</li>
                <li>2,289,890 Views - </li>
                <li>&nbsp;</li>
                <li>13,089 Downloads</li>
              </ul>
            </section>
          </div>
        </div>
      </article>
    );

};

PhotoDetailsPage.propTypes = {
  image: React.PropTypes.object.isRequired,
  vote: React.PropTypes.bool.isRequired,
  onHearClick: React.PropTypes.func.isRequired,
  onArrowClick: React.PropTypes.func.isRequired
};

export default PhotoDetailsPage;
