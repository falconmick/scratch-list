import React, {PropTypes} from 'react';
import { CardComponent } from './Bulma'

const ScratchCardComponent = () => {

  const cardProps = {
    userName: 'test',
    footer: 'ima a footer',
    content: 'ima a content',
    className: 'column is-3',
    centerCard: true,
  };
  return (
      <CardComponent {...cardProps} />
    );
};

ScratchCardComponent.propTypes = {
    myProp: PropTypes.string
};

export default ScratchCardComponent;
