import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useHistory, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import get from 'lodash/get'

import CircularProgress from '@material-ui/core/CircularProgress'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import Button from '@material-ui/core/Button'

import axios from '../../utils/axios'

const useStyles = makeStyles(theme => ({
	form: {
		'& > *': {
			margin: theme.spacing(1),
			width: '50ch'
		}
	},
	root: {
		display: 'flex',
		flexWrap: 'wrap'
	},
	margin: {
		margin: theme.spacing(1)
	},
	withoutLabel: {
		marginTop: theme.spacing(3)
	},
	textField: {
		width: '50ch'
	}
}))

const Edit = () => {
	const classes = useStyles()
	const history = useHistory()
	const { id } = useParams()

	const { register, handleSubmit } = useForm()

	const [error, setError] = useState()
	const [loading, setLoading] = useState(true)
	const [item, setItem] = useState({})

	useEffect(() => {
		const getData = async () => {
			const result = await axios.get(`/feriado/${id}`)
			setItem(get(result, 'data'))
			setLoading(false)
		}

		if (id) {
			getData()
		} else {
			setLoading(false)
		}
	}, [])

	const onSubmit = async data => {
		try {
			if (!id) {
				await axios.post(
					`http://localhost:5000/feriado`,
					{
						data: {
							...data
						}
					},
					{ timeout: 3000 }
				)
			} else {
				await axios.put(
					`http://localhost:5000/feriado/${id}`,
					{
						data: {
							id: id,
							...data
						}
					},
					{ timeout: 3000 }
				)
			}

			history.push(`/home`)
		} catch (e) {
			setError('Ha ocurrido un error')
		}
	}

	if (loading) {
		return <CircularProgress />
	}

	return (
		<FormControl className={`${classes.margin} ${classes.withoutLabel} ${classes.textField}`}>
			<form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
				<TextField required inputRef={register} name="motivo" label="Motivo" defaultValue={item.motivo} />
				<TextField required inputRef={register} name="tipo" label="Tipo" defaultValue={item.tipo} />
				<TextField required inputRef={register} name="dia" label="Dia" defaultValue={item.dia} type="number" />
				<TextField required inputRef={register} name="mes" label="Mes" defaultValue={item.mes} type="number" />
				<TextField required inputRef={register} name="year" label="Año" defaultValue={item.year} type="number" />
				<TextField required inputRef={register} name="info" label="Info" defaultValue={item.info} />
				<Button type="submit" variant="contained" color="primary">
					Guardar
				</Button>
			</form>

			{error && <div>{error}</div>}
		</FormControl>
	)
}

export default Edit
