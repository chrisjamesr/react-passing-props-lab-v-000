import React, { Component }  from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = (props)=> {
  
  return (
    <div className="fruit-basket">
      <Filter handleChange={props.updateFilterCallback} 
              filters={props.filters}
              currentFilter={props.currentFilter}
              />
      <FilteredFruitList
        filter={props.selectedFilter}
        fruit={props.fruit} />
    </div>
  );

}
  FruitBasket.defaultProps = {
    fruit: [],
    filters: [],
    currentFilter: null,
    updateFilterCallback: null
  }

export default FruitBasket;



// class FruitBasket extends Component {
//   constructor() {
//     super();

//     this.state = {
//       filters: [],
//       selectedFilter: null
//     };
//   }

//   handleFilterChange = event => {
//     console.log('new filter: ', event.target.value);
//     this.setState({ selectedFilter: event.target.value });
//   }

//   render() {
//     return (
//       <div className="fruit-basket">
//         <Filter handleChange={this.handleFilterChange} />
//         <FilteredFruitList
//           filter={this.state.selectedFilter} />
//       </div>
//     );
//   }
// }

// export default FruitBasket;
