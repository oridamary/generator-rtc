import { BrowserRouter, Route } from 'react-router-dom'

import React from 'react'
import { Switch } from 'react-router'

const IndexComponent: React.FC = () => {
  return <div>Index</div>
}

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={IndexComponent} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
