import React, {PropTypes} from 'react';

const ContainerComponenet = ({children}) => {
  return (
    <div className="container">
      {children}
    </div>
  );
};

ContainerComponenet.propTypes = {
  children: PropTypes.element
};

export default ContainerComponenet;
