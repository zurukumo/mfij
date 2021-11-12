import 'tailwind.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './Home'
import Trade from './Trade'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/trade" element={<Trade />} />
    </Routes>
  </BrowserRouter>
);

export default App;
