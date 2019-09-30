import React, {Component} from 'react';
import './App.css';
import 'material-icons'
import Board from './containers/Board';
import NewTask from './components/NewTask';

class App extends Component {
componentDidMount() {
    this.props.fetchCall('/tasks');
    this.props.fetchLoading(false);
  }

  render() {
    let boardContainer = [];
    if(this.props.isLoading) {
      boardContainer = <p>I'm Loading Here!</p>
    } else if(this.props.hasErrored) {
      boardContainer = <h4 className="board_error">There was an issue loading your board. Please reach out to the admin of this page.</h4>
    } else {
      boardContainer = <Board tasks={this.props.tasks} />
    }
    return (
      <div className="App">
        <header className="App-header">
          <h1>Simple Kanban CRUD App</h1>
          <nav>
    <span className="material-icons" onClick={()=>{this.menuToggle(); this.setState({asideContainer:<NewTask loadTasks={this.loadTasks}/>})}} title="New Task">playlist_add</span>
          </nav>
        </header>
        <main>
          {boardContainer}
        </main>
        {!this.props.asideActive
          ? <aside className="aside">
              <span className="menuclose">&times;</span>   
              {this.props.asideContainer}
            </aside>
          : <aside className="aside active">
              <span className="menuclose">&times;</span>  
              {this.props.asideContainer}
            </aside>
          }
      </div>
    );
  }
}

export default App;
