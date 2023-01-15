import React from 'react'
import Cards from './Cards'

class Cardlist extends Component {
    constructor() {
      super()
      this.state = {
        cats: []
      }
    }
  
    componentDidMount() {
      fetch('https://developers.google.com/maps/documentation/places/web-service/search-nearby')
      .then(response => response.json())
      .then(users => this.setState({cats: users}));
    }
  
    render() {
      const {cats} = this.state;
  
      return (<div className='tc'>
        <h1 className='f1'>Cat Friends</h1>
        {
          cats.map((user, i) => {
            return (
              <Card
                key={cats[i].id}
                id={cats[i].id}
                name= {cats[i].name}
                email={cats[i].email}
              />
            );
          })
        }
    </div>);
    }
  }
  
  export default Cardlist;
  
