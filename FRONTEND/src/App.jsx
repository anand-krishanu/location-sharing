import './App.css'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Users from './assets/user/pages/users'
import NewPlace from './assets/places/pages/NewPlace'
import { Switch } from 'react-router-dom/cjs/react-router-dom.min'
import MainNavigation from './assets/shared/component/Navigation/MainNavigation'

const App = () => {

  return (
    <>
      <Router>
        <MainNavigation />
        <main>
          <Switch>
            <Route path="/" exact> 
              <Users />
            </Route>
            <Route path="/places/new" exact>
              <NewPlace />
            </Route>
            <Redirect to="/" />
          </Switch>
        </main>
      </Router>
    </>
  )
}

export default App
