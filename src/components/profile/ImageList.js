import React, { PropTypes } from 'react';
import { Link } from'react-router';

const ImageList = ({ images }) => {
  return (
    <section className="author_gallery">
      <div className="row no-pad">
          {images.map((imgBlock, index) => {
            return (
              <div key={index} className="row no-pad">
                <div className="col-xs-6">
                  <div className="gallery-item_small">
                    <Link to={'/photo/' + imgBlock[0].id}>
                      <img className="gallery-img_small" src={imgBlock[0].url} />
                    </Link>
                  </div>
                  <div className="gallery-item_big">
                    <Link to={'/photo/' + imgBlock[1].id}>
                      <img className="profile-img" src={imgBlock[1].url} />
                    </Link>
                  </div>
                </div>
                <div className="col-xs-6">
                  <div className="gallery-item_big">
                    <Link to={'/photo/' + imgBlock[2].id}>
                      <img className="gallery-img_small" src={imgBlock[2].url} />
                    </Link>
                  </div>
                  <div className="gallery-item_small">
                    <Link to={'/photo/' + imgBlock[3].id}>
                      <img className="profile-img" src={imgBlock[3].url} />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
};

ImageList.propTypes = {
  images: PropTypes.array.isRequired
};

export default ImageList;
