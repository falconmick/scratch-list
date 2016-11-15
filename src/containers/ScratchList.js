import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ContainerComponenet} from '../components/Bulma';
import ScratchCardComponent from '../components/ScratchCardComponent';
import * as projectActions from '../actions/projectActions';
import * as pageActions from '../actions/pageActions';

class ScratchList extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    this.props.actions.setPageTitle('Recent Projects');
    this.props.actions.updateStudentProjects('Falconmick');
  }

  render() {
    // const now = new Moment();
    // const footer = getFormattedDate(now);

    return (
      <div>
        <ContainerComponenet>
          <div className="columns is-multiline">
            {
              this.props.projects.map(project => <ScratchCardComponent key={project.id} {...project} />)
            }
          </div>
        </ContainerComponenet>
      </div>
    );
  }
}

ScratchList.propTypes = {
  actions: PropTypes.object.isRequired,
  projects: PropTypes.array.isRequired,
};

function mapStateToProps(state/*, ownProps*/) {
  return {
    projects: state.projects
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, projectActions, pageActions), dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ScratchList);
