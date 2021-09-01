import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ProductsPage from './pages/ProductsPage'
import Home from './pages/Home'
import Navigation from './components/Navigation'
import Cart from './pages/Cart'
import SinglePage from './pages/SinglePage'

const App = () => {
  return (
    <>
      <Router>
        <Navigation />
        <Switch>
          <Route path='/' component={Home} exact></Route>
          <Route path='/products' exact component={ProductsPage}></Route>
          <Route path='/products/:_id' component={SinglePage}></Route>

          <Route path='/cart' component={Cart}></Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
