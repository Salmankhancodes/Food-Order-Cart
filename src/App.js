import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ProductsPage from './pages/ProductsPage'
import Home from './pages/Home'
import Navigation from './components/Navigation'
import Cart from './pages/Cart'
import SinglePage from './pages/SinglePage'
import { CartContext } from './CartContext'
import { useEffect, useState } from 'react'

const App = () => {
  const [cart, setCart] = useState({})

  useEffect(() => {
    const cart = window.localStorage.getItem('cart')
    setCart(JSON.parse(cart))
  }, [])
  useEffect(() => {
    window.localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  return (
    <>
      <Router>
        <CartContext.Provider value={{ cart, setCart }}>
          <Navigation value={{ cart }} />
          <Switch>
            <Route path='/' component={Home} exact></Route>
            <Route path='/products' exact component={ProductsPage}></Route>
            <Route path='/products/:_id' component={SinglePage}></Route>

            <Route path='/cart' component={Cart}></Route>
          </Switch>
        </CartContext.Provider>
      </Router>
    </>
  )
}

export default App
