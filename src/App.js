import './App.css';
import Nav from './component/0navbar/Nav';
import Delivery from './component/1Delivery/Delivery';
import Dishtypes1 from './component/2Dishtypes/Dishtypes';
import Brand from './component/3brands/Brand';
import Dishes from './component/4Dishes/Dishes'

function App() {

  return (
    <div className="App">
      <Nav/>
      <Delivery />
      <Dishtypes1 />
      <Brand />
      <Dishes/>
    </div>
  );
}

export default App;
