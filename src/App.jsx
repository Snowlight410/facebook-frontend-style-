import {BrowserRouter as Router , Routes,Route} from 'react-router-dom'
import Header from './components/Header'
import { useEffect } from 'react'
import Home from './pages/Home'
import WebFont from 'webfontloader';
import Friend from './pages/Friend';
import Videos from './pages/Videos';
import Marketing from './pages/Marketing';
import Group from './pages/Group';

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Roboto', 'Arial','sans-serif']
      }
    });
   }, []);
 
  return (
    <Router>
      <Header/>
      <Routes>
        {/* Main pages  */}
        <Route path='/' exact  element={<Home/>}/>
        <Route path='/friend'   element={<Friend/>}/>
        <Route path='/videos'   element={<Videos/>}/>
        <Route path='/marketing'   element={<Marketing/>}/>
        <Route path='/group'   element={<Group/>}/>

      </Routes>
    </Router>
  )
}
export default App
