import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import Header from './components/header'
import List from './containers/feriados/list'
import Edit from './containers/feriados/edit'

const App = () => {
	return (
		<Router>
			<Header />

			<Switch>
				<Route path="/new">
					<Edit />
				</Route>
				<Route path="/edit/:id">
					<Edit />
				</Route>
				<Route path="/Home">
					<List />
				</Route>
				<Route path="/">
					<Redirect
						to={{
							pathname: '/home'
						}}
					/>
				</Route>
			</Switch>
		</Router>
	)
}

export default App
