import React from 'react';
import './App.css';
import Form from './components/Form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    }
  }

  componentDidMount() {
    // Simple GET request using fetch
    fetch('https://my-json-server.typicode.com/karthick03/json-db-data/tasks')
        .then(response => response.json())
        .then(data => this.setState({ tasks: data }));
  }

  render() {
    return (
      <div className="folioWrapper">
        <div>
          <Form></Form>
        </div>
        {/* ------------------------- */}
        <div>
            {this.state.tasks.map((task, i) => <p>{task.taskName}</p>)}
            {this.state.tasks.length}
        </div>
      </div>
    );
  }
}

export default App;
