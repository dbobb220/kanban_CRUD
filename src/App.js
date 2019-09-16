import React, {Component} from 'react';
import Backlog from './components/Backlog';
import Current from './components/Current';
import Done from './components/Done';
import state from './state';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tickets: state.tickets
    }
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Kanban Demo</h1>
          <nav>

          </nav>
        </header>
        <main>
        </main>
      </div>
    );
  }
}

export default App;
