/* eslint-disable no-alert react/self-closing-comp */
import React, {PropTypes} from 'react';

const ScratchFrame = ({projectId}) => {
  const src = `//scratch.mit.edu/projects/embed/${projectId}/?autostart=false`;
  return (
    <div className="center-frame">
      { projectId && <iframe allowTransparency="true" width="970" height="804" src={src} frameBorder="0" allowFullScreen></iframe> }
    </div>
  );
};

ScratchFrame.propTypes = {
  projectId: PropTypes.number.isRequired
};

export default ScratchFrame;


