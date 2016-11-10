import React from 'react';
import {connect} from 'react-redux';
import Moment from 'moment';
import {bindActionCreators} from 'redux';
import {HeroComponent, ContainerComponenet} from '../components/Bulma';
import ScratchCardComponent from '../components/ScratchCardComponent';
import { getFormattedDate } from '../utils/dateHelper';
import { loremIpsum } from '../utils/loremIpsum';

class ScratchList extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    // const now = new Moment();
    // const footer = getFormattedDate(now);

    return (
      <div>
        <HeroComponent title="Scratch List" subtitle="Recent Projects"/>
        <br />
        <ContainerComponenet>
          <div className="columns is-multiline">
            <ScratchCardComponent />
          </div>
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
