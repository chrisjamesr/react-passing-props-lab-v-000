import React from 'react';
import FruitBasket from './FruitBasket';

// const App = () => <FruitBasket />;

// export default App;
class App extends React.Component {
  constructor(){
    super()
    this.state = {
      filters: [],
      currentFilter: null,
      fruit: [],
    }
  }

   componentDidMount() {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(fruit => this.setState({ 
          ...this.state,
          fruit 
        })
      );
    this.fetchFilters();  
    }
  // componentWillMount() {
  //   this.fetchFilters();
  // }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ 
        ...this.state,
        filters })
      );
  }

  handleFilterChange = event => {
    console.log('new filter: ', event.target.value);
    this.setState({ 
      ...this.state,
      currentFilter: event.target.value 
    });
  }
  render(){
    return <FruitBasket 
            filters={this.state.filters}
            updateFilterCallback={this.handleFilterChange}
            selectedFilter={this.state.currentFilter}
            fruit={this.state.fruit}
            />
  }
}

export default App;