import React, {PropTypes} from 'react';
import ScratchList from '../containers/ScratchList'

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class App extends React.Component {
  render() {
    return (
      <div>
        { /* <h1>header</h1> */ }
        { /*this.props.children*/ }
        <ScratchList />
        { /* <h1>footer</h1> */ }
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
