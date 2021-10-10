import React from 'react'
import { makeStyles, Container, Grid, Typography } from '@material-ui/core'
import PhoneIcon from '@mui/icons-material/Phone'
const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: '#222',
  },
  underline: {
    width: '100%',
    height: 1,
    backgroundColor: 'gray',
    borderRadius: '30px',
    marginBottom: '30px',
  },
}))
const Footer = () => {
  const classes = useStyles()
  return (
    <footer className={classes.footer}>
      <Container>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={12} md={6} lg={4} className={classes.item}>
            <Typography className={classes.logo}>Zay Shop</Typography>
            <div className={classes.underline}></div>
            <Typography gutterBottom color='secondary' variant='body1'>
              123 Consectetur at ligula 10660
            </Typography>
            <Typography gutterBottom color='secondary' variant='body1'>
              <PhoneIcon />
              010-020-0340
            </Typography>
            <Typography gutterBottom color='secondary' variant='body1'>
              info@company.com
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={4}
            className={classes.item}
          ></Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={4}
            className={classes.item}
          ></Grid>
        </Grid>
      </Container>
    </footer>
  )
}

export default Footer
