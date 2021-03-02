import React from 'react';
import { Grid, Paper, Avatar, FormControl, Input, InputLabel, FormHelperText } from '@material-ui/core'
import LockedOutlinedIcon from '@material-ui/icons/LockOutlined'

const Login = () => {
	const paperStyle = {
		padding: 20,
		height: '70vh',
		width: 280,
		margin: '20px auto'
	}

	return (
		<Paper elevation={10} style={paperStyle}>
			<Grid align="center">
				<Avatar>
					<LockedOutlinedIcon />
				</Avatar>
			</Grid>
			<FormControl>
				<InputLabel htmlFor="my-input">Email address</InputLabel>
				<Input id="my-input" aria-describedby="my-helper-text" />
				<FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
			</FormControl>
		</Paper>
	)
}

export default Login;