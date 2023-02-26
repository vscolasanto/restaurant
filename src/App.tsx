import { BrowserRouter, Route } from 'react-router-dom';
import { Routes } from 'react-router';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './styles/GlobalStyles';
import light from './styles/themes/light';

import Navbar from './components/Navbar';

import Home from './pages/Home';
import Command from './pages/Command';
import Waiter from './pages/Waiter';
import Product from './pages/Product';
import NotFound from './pages/NotFound';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyles />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/command' element={<Command />} />
          <Route path='/waiter' element={<Waiter />} />
          <Route path='/product/:key' element={<Product />} />
          <Route path='/product/:key/detail/:id' element={<ProductDetail />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
