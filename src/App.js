import React, {Component} from 'react';
import state from './state';
import './App.css';
import Board from './components/Board';
import 'material-icons'

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
          <h1>Simple Kanban CRUD App</h1>
          <nav>
            <span className="material-icons">playlist_add</span>
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
