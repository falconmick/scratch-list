import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {HeroComponent, ContainerComponenet} from '../components/Bulma';
import ScratchCardComponent from '../components/ScratchCardComponent';
import * as projectActions from '../actions/projectActions';

class ScratchList extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    this.props.actions.updateStudentProjects('Falconmick');
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
  //myProp: PropTypes.string.isRequired
};

function mapStateToProps(state/*, ownProps*/) {
  console.log(state.projects);
  return {
    projects: state.projects
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(projectActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ScratchList);
