import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import get from 'lodash/get'

import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { useHistory } from 'react-router-dom'
import CircularProgress from '@material-ui/core/CircularProgress'

import axios from '../../utils/axios'

const useStyles = makeStyles(theme => ({
	item: {
		width: '100%'
	}
}))

const List = () => {
	const classes = useStyles()
	const history = useHistory()

	const [items, setItems] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const getData = async () => {
			const result = await axios.get('/feriados')
			setItems(get(result, 'data', []))
			setLoading(false)
		}

		getData()
	}, [])

	const handleClick = item => {
		console.log('jose item')
		history.push(`/edit/${item._id}`)
	}

	if (loading) {
		return <CircularProgress />
	}

	return (
		<div>
			{items.map((item, index) => {
				return (
					<ListItem button key={index} className={classes.root} onClick={() => handleClick(item)}>
						<ListItemText
							primary={`
                ${item.dia}/${item.mes}/${item.year}: ${item.motivo}
              `}
						/>
					</ListItem>
				)
			})}
		</div>
	)
}

export default List
