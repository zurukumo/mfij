import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './Home'
import List from './List'
import Trade from './Trade'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/trade" element={<Trade />} />
      <Route path="/list" element={<List />} />
    </Routes>
  </BrowserRouter>
);

export default App;
