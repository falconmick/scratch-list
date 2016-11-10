import React, {PropTypes} from 'react';

const CardComponent = ({className, centerCard, projImgSrc, avatarImgSrc, userName, footer, content}) => {

  console.log(`centerCard is: ${centerCard}`)
  let cardClass = 'card'
  if(centerCard) {
    cardClass = `${cardClass} card-center`
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
            <div className="media-content text-center">
              <p className="title is-5 ">{ userName }</p>
            </div>
          </div>

          <div className="content">
            { content }
            <br />
            <small>{footer}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

CardComponent.propTypes = {
  userName: PropTypes.string.isRequired,
  footer: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  className: PropTypes.string,
  projImgSrc: PropTypes.string,
  avatarImgSrc: PropTypes.string,
  centerCard: PropTypes.bool
};

CardComponent.defaultProps = {
  centerCard: false,
  projImgSrc: 'http://placehold.it/300x225?text=loading', //
  avatarImgSrc: 'http://placehold.it/64x64?text=loading'
}

export default CardComponent;
