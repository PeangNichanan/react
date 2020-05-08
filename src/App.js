import React from 'react';
import './css/App.css';
import { BrowserRouter,Route } from 'react-router-dom'
import profile from './component/profile'
import Apr29 from './component/Apr29'
import May2 from './component/May2'
import May9 from './component/May9'
import May16 from './component/May16'
import May24 from './component/May24'



function App() {
  return (
    <BrowserRouter>
      <Route exact path = '/' component={profile}/>
      <Route path = '/Apr29' component={Apr29}/>
      <Route path = '/May2' component={May2}/>
      <Route path = '/May9' component={May9}/>
      <Route path = '/May16' component={May16}/>
      <Route path = '/May24' component={May24}/>
    </BrowserRouter>

  );
}
export default App;
