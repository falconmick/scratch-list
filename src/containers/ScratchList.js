import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import HeroComponent from '../components/Bulma/HeroComponent';
import ContainerComponenet from '../components/Bulma/ContainerComponenet';

class ScratchList extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <HeroComponent title="Scratch List" subtitle="Recent Projects"  />
        <ContainerComponenet>
          <h1 className="title is-1">Test</h1>
        </ContainerComponenet>
      </div>
    );
  }
}

ScratchList.propTypes = {
  //myProp: PropTypes.string.isRequired
};

function mapStateToProps(state/*, ownProps*/) {
  return {
    state: state
  };
}

function mapDispatchToProps(dispatch) {
  const actions = {};
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ScratchList);
