import React, {Component} from 'react';
import state from './state';
import './App.css';
import 'material-icons'
import Board from './components/Board';
import NewTask from './components/NewTask';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tickets: state.tickets,
      aside: {
        isActive: false,
        container: <NewTask />
      }
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
        {!this.state.aside.isActive
          ? <aside className="aside">{this.state.aside.container}</aside>
          : <aside className="aside active">{this.state.aside.container}</aside>
          }
      </div>
    );
  }
}

export default App;
