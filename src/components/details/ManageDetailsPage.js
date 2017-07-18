import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as imageActions from '../../actions/imageActions';
import PhotoDetailsPage from './PhotoDetailsPage';
import { browserHistory } from 'react-router';


class ManageDetailsPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      image: Object.assign({}, props.image),
      isFavorite: isImageFavorite(props.image, props.favorites)
    };
    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
    this.handleHeartClick = this.handleHeartClick.bind(this);
  }

  componentWillReceiveProps(nextProps, nextContext) {
    if (this.props.image.id !== nextProps.image.id) {
      this.setState({
        image: Object.assign({}, nextProps.image),
        isFavorite: isImageFavorite(this.state.image, this.props.favorites)});
    }
  }

  redirectToAddCoursePage() {
    browserHistory.push('/');
  }

  handleHeartClick() {
    if (!this.state.isFavorite) {
      this.props.actions.addImageToFavorite(this.state.image);
      this.setState(prevState => {
        return {
          image: prevState.image,
          isFavorite: true
        };
      });
    } else {
      this.props.actions.removeImageFromFavorites(this.state.image);
      this.setState(prevState => {
        return {
          image: prevState.image,
          isFavorite: false
        };
      });
    }

  }

  render() {
    return (
      <main>
        <PhotoDetailsPage onArrowClick={this.redirectToAddCoursePage} onHearClick={this.handleHeartClick} vote={this.state.isFavorite} image={this.state.image} />

      </main>
    );
  }


}

ManageDetailsPage.propTypes = {
  image: PropTypes.object.isRequired,
  favorites: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function getImageById(images, id) {
  const image = [].concat(...images).find(img => img.id == id);
  if (image) {
    return image;
  }
  return null;
}

function isImageFavorite(image, favorites) {
  return favorites.some(val => val.id === image.id);
}

function mapStateToProps(state, ownProps) {
  const imageId = ownProps.params.id;
  let image = {id: undefined, url: '', name: '', author: ''};
  if (imageId && state.images.length > 0) {
    image = getImageById(state.images, imageId);
  }

  return {
    image: image,
    favorites: state.favorites
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(imageActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageDetailsPage);
