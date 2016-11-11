import React, {PropTypes} from 'react';
import { CardComponent } from './Bulma';
import { getFormattedDate } from '../utils/dateHelper';

const ScratchCardComponent = ({author, description, history, id, title}) => {
  const updatedOn = history.modified;
  const updatedMoment = getFormattedDate(updatedOn, true);

  const cardProps = {
    userName: author.id.toString(),
    footer: updatedMoment,
    content: description || 'My Project',
    className: 'column is-3',
    centerCard: true,
    projImgSrc: `https://cdn2.scratch.mit.edu/get_image/project/${id}_300x225.png`,
    projectTitle: title,
    avatarImgSrc: `https://cdn2.scratch.mit.edu/get_image/user/${author.id}_90x90.png`,
    cardId: id
  };
  return (
      <CardComponent {...cardProps} />
    );
};

ScratchCardComponent.propTypes = {
    myProp: PropTypes.string
};

export default ScratchCardComponent;
