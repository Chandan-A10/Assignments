import {Routes,Route} from 'react-router-dom';
import Completed from './pages/Completed'
import Deleted from './pages/Deleted'
import Home from './pages/Home';
const App=()=> {
  return (
    <>
    <Routes>
      <Route exact path='/' element={<Home/>}></Route>
      <Route exact path='/deleted' element={<Deleted/>}></Route>
      <Route exact path='/completed' element={<Completed/>}></Route>
    </Routes>
    </>
  );
}

export default App;
