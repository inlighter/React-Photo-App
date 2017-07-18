import React, { PropTypes } from 'react';

const ProfileHeader = ({ mode, onBurgerClick }) => {
  return (
    <header>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <a onClick={onBurgerClick} id="menu"><i className={mode ? "fa fa-arrow-left fa-lg"
              : "fa fa-bars fa-2x"} area-hidden="true"></i></a>
            <p className="text-center username">@NolanEd</p>
          </div>
        </div>
        <div>
          <div className="profile_wrapper">
              <img className="profile-img" src={"http://maxpixel.freegreatpicture.com/static/photo/1x/Dusk-Sunset-Malibu-Sky-Clouds-California-1970609.jpg"} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <h1 className="author_name text-center">Edward Nolan</h1>
          </div>
          <div>
            <h2 className="author_title text-center">Photography lover from 8 years</h2>
          </div>
        </div>
      </div>
    </header>
  );
};

ProfileHeader.propTypes = {
  mode: PropTypes.bool.isRequired,
  onBurgerClick: PropTypes.func.isRequired
};

export default ProfileHeader;


