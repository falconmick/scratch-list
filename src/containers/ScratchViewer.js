import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import projectSelector from '../selectors/projectSelector';
import * as projectActions from '../actions/projectActions';

class ScratchViewer extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  componentWillReceiveProps() {
    this.props.actions.updateStudentProjects('Falconmick');
  }

  render() {
    return (
      <h1>hello</h1>
    );
  }
}

ScratchViewer.propTypes = {
  actions: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    project:  projectSelector(state)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(projectActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ScratchViewer);
