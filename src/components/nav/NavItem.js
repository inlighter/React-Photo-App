import React, { PropTypes } from 'react';
import { Link } from'react-router';

const  NavItem = ({ image }) => {
  return(

    <li className="nav__item">
      <Link to={'/photo/' + image.id}>{image.name}</Link>
    </li>

  );
};



NavItem.propTypes = {
  image: PropTypes.object.isRequired
};

export default NavItem;
