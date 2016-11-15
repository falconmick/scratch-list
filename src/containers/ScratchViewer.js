import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import projectSelector from '../selectors/projectSelector';
import ScratchFrame from '../components/ScratchFrame';
import ContainerComponenet from '../components/Bulma/ContainerComponenet';
import * as projectActions from '../actions/projectActions';
import * as pageActions from '../actions/pageActions';

class ScratchViewer extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  componentWillMount() {
    this.props.actions.setPageTitle('Project Viewer');
    this.props.actions.updateStudentProjects('Falconmick');
  }

  render() {
    return (
      <ContainerComponenet>
        <ScratchFrame projectId={this.props.project ? this.props.project.id : 0}/>
      </ContainerComponenet>
    );
  }
}

ScratchViewer.propTypes = {
  actions: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired,
  project: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    project: projectSelector(state)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, projectActions, pageActions), dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ScratchViewer);
