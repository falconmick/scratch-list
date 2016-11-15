import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {HeroComponent} from '../components/Bulma';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class App extends React.Component {
  render() {
    return (
      <div>
        <HeroComponent title="Scratch List" subtitle={this.props.page.pageTitle}/>
        <br />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};
function mapStateToProps(state/*, ownProps*/) {
  return {
    page: state.page
  };
}

export default connect(mapStateToProps)(App);

// export default App;
