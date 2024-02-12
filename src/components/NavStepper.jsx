import { useState } from "react"
import { Stack,Stepper,Step,StepIndicator,StepStatus,StepSeparator,StepIcon,Text, StepNumber,useBreakpointValue,Box,StepTitle,StepDescription,Progress } from "@chakra-ui/react"

const steps = [
    { title: 'First', description: 'Input Friends' },
    { title: 'Second', description: 'Input Items' },
    { title: 'Third', description: 'Check Bill' },
    { title: 'Fourth', description: 'Calculate Bill' },
    { title: 'Five', description: 'Inform Friends' },
  ]

export default function NavStepper() {

    const [activeStep, setActiveStep] = useState({
      index: 0,
      count: steps.length,
    })

    return (
      <Stack>
      <Stepper size='md' index={activeStep.index} gap='0'>
        {steps.map((step, index) => (
          <Step key={index} gap='0'>
            <StepIndicator>
              <StepStatus
              complete={<StepIcon />} 
                            incomplete={<StepNumber />}
                            active={<StepNumber />}
              />
            </StepIndicator>
            <StepSeparator _horizontal={{ ml: '0' }} />
          </Step>
        ))}
      </Stepper>
      <Text>
      <b>Step {activeStep.index + 1}:</b> {steps[activeStep.index].description}
      </Text>
    </Stack>
    )
  }