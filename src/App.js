import logo from './logo.svg';
import Functioncomponent from './Component/Function_component';
import Classcomponent from './Component/Class_component';
import Children_example_component from './Component/Children_Example';
import Render_example_component from './Component/Render_Data_Example';
import './App.css';
import PropTypes from 'prop-types'; 

Classcomponent.propTypes={
  name:PropTypes.string,
  id:PropTypes.number,
}

Functioncomponent.propTypes={
  name:PropTypes.string,
  id:PropTypes.number,
}

function App() {
  return (
    <div>
      <Functioncomponent name="kavish"/>
      <Classcomponent name="Varshil"/>
      <Children_example_component>
        Hello from childern
      </Children_example_component>
      <Render_example_component/>

    </div>
  );
}

export default App;
