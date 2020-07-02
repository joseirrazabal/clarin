import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { useHistory, useRouteMatch } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	title: {
		flexGrow: 1
	}
}))

const App = () => {
	const classes = useStyles()
	const history = useHistory()
	const match = useRouteMatch('/home')

	return (
		<AppBar position="sticky">
			<Toolbar>
				<IconButton
					edge="start"
					className={classes.menuButton}
					color="inherit"
					aria-label="menu"
					onClick={() => history.push('/home')}
				>
					<MenuIcon />
				</IconButton>
				<Typography variant="h6" className={classes.title}>
					{match ? 'Listado' : 'Item'}
				</Typography>
				<Button color="inherit" onClick={() => history.push('/new')}>
					{match && 'Agregar nuevo'}
				</Button>
			</Toolbar>
		</AppBar>
	)
}

export default App
