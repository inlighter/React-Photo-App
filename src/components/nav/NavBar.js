import React, { PropTypes } from 'react';
import { Link } from'react-router';
import NavItem from './NavItem';

const NavBar = ({ images, mode, onBurgerClick }) => {
  return (
    <div>
      <nav id="drawer" className={mode ? "nav open" : "nav"}>
        <div className="nav-recent__title">
          <span className="nav-item__heart"><i className="fa fa-heart-o"></i></span>
          <p>Recent Favourites</p>
        </div>

        <ul className="nav__list">
          {images.map(image => {
            return(
              <NavItem key={image.id} image={image} />
            );
          })}
        </ul>
      </nav>
      <div onClick={onBurgerClick} id="site-mask" style={mode ? {display: 'block'} : {display: 'none'}}></div>
    </div>
  );
};


NavBar.propTypes = {
  images: PropTypes.array.isRequired,
  mode: PropTypes.bool.isRequired,
  onBurgerClick: PropTypes.func.isRequired
};

export default NavBar;
