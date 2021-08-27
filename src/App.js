import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import Products from './pages/Products'
import Home from './pages/Home'
import Navigation from './components/Navigation'
import Cart from './pages/Cart'

const App = () => {
  return (
    <>
      <Router>
        <Navigation />
        <Switch>
          <Route path='/' component={Home} exact></Route>
          <Route path='/products' component={Products}></Route>
          <Route path='/cart' component={Cart}></Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
