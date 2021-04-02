import React from 'react';
import { Grid } from '@material-ui/core'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'


const Home = () => {
	const theme = createMuiTheme({
		palette: {
			type: 'dark'
		}
	})

	return (
		<ThemeProvider theme={theme}>
			<Grid align="center">
				
			</Grid>
		</ThemeProvider>
	)
}

export default Home
