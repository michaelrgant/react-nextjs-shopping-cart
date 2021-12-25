import { ClassNames } from '@emotion/react'
import { StepLabel, Stepper,Step } from '@material-ui/core'
import React from 'react'
import useStyles from '../utils/style'

export default function checkoutWizard({ activeStep = 0 }) {
  const classes = useStyles();
  return <Stepper className={classes.transparentBackground}activeStep={activeStep} alternativeLabel>
    {['Login', 'Shipping Address', 'Payment Method', 'Place Order'].map(step => (
      <Step key={step}>
        <StepLabel>{step}</StepLabel>
      </Step>
    ))}
  </Stepper>

}
