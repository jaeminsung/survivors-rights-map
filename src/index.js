import Map from './map';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Map />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
