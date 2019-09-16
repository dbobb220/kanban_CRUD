import React, {Component} from 'react';
import state from './state';
import './App.css';
import Board from './components/Board';

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
          <Board 
            tickets={this.state.tickets}    
          />
        </main>
      </div>
    );
  }
}

export default App;
