import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as imageActions from '../../actions/imageActions';
import ProfileHeader from './ProfileHeader';
import ImageList from './ImageList';
import NavBar from '../nav/NavBar';

class ProfilePage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      images: props.images,
      navMode: false
    };
    this.loadImages = this.loadImages.bind(this);
    this.handleOnBurgerClick = this.handleOnBurgerClick.bind(this);
  }

  handleOnBurgerClick() {
    this.setState(prevState => {
      return {
        images: prevState.images,
        navMode: !prevState.navMode
      };
    });
  }

  loadImages() {
    this.props.actions.loadImages();
  }

  preformateFavorites() {
    const {favorites} = this.props;
    if (favorites.length > 7) {
      return favorites.slice(favorites.length - 7);
    }
    return favorites;
  }

  render() {
    return (
      <main>
        <article>

          <NavBar onBurgerClick={this.handleOnBurgerClick} mode={this.state.navMode} images={this.preformateFavorites()}/>
          <ProfileHeader mode={this.state.navMode} onBurgerClick={this.handleOnBurgerClick} />
          <ImageList images={this.props.images} />
          <div className="footer-item">
            <button type="button" className="btn load-more_btn" onClick={this.loadImages}>Load More</button>
          </div>
        </article>
      </main>

    );
  }
}

ProfilePage.propTypes = {
  images: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  favorites: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    images: state.images,
    favorites: state.favorites
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(imageActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
