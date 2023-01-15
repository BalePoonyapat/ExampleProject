
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './components/Search';
import Details from './components/Details';
import Slideimg from './components/Slideimg';
import { render } from '@testing-library/react';


function App() {

  const navItem=[
      {namr:'Detail', url:'#Details'},
    ]

  
  return (

    

            <>
              <Search/>
            </>
  );
}

export default App;
