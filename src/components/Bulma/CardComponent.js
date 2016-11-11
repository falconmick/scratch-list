import React, {PropTypes} from 'react';
import Clamp from 'react-clamp';

const CardComponent = ({className, centerCard, projImgSrc, avatarImgSrc, userName, footer, content, projectTitle, cardId}) => {
  let cardClass = 'card';
  if(centerCard) {
    cardClass = `${cardClass} card-center`;
  }
  return (
    <div className={className}>
      <div className={cardClass}>
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={projImgSrc} alt=""/>
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-32x32">
                <img src={avatarImgSrc} alt="Image"/>
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-5">{projectTitle}</p>
              <p className="subtitle is-6">{userName}</p>
            </div>
          </div>

          <div className="content">
            <Clamp clamp="..." className="clamp-card">
              { content }
            </Clamp>
            <br />
            <small>{footer}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

CardComponent.propTypes = {
  projectTitle: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  footer: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  cardId: PropTypes.number.isRequired,
  className: PropTypes.string,
  projImgSrc: PropTypes.string,
  avatarImgSrc: PropTypes.string,
  centerCard: PropTypes.bool
};

CardComponent.defaultProps = {
  centerCard: false,
  projImgSrc: 'http://placehold.it/300x225?text=loading', //
  avatarImgSrc: 'http://placehold.it/64x64?text=loading'
};

export default CardComponent;
