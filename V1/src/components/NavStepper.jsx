import { useState } from "react"
import { Heading, Stack,Stepper,Step,StepIndicator,StepStatus,StepSeparator,StepIcon,Text, StepNumber,useBreakpointValue,Box,StepTitle,StepDescription,Progress } from "@chakra-ui/react"

const dutchSteps = [
    { title: 'First', description: 'Input Friends' },
    { title: 'Second', description: 'Input Items' },
    { title: 'Third', description: 'Check Bill' },
    { title: 'Fourth', description: 'Calculate Bill' },
    { title: 'Five', description: 'Inform Friends' },
  ]

export default function NavStepper({activeStep}) {
    return (
      <>
            {(activeStep === -1) ? 
            <Box p="4" pt="2" mb="4" borderWidth='1px' borderRadius='lg'>
            <Heading as='h1'>useDutch</Heading>
            <Heading as='h5' size='sm'>
              React-Based Bill-Splitting
            </Heading>
            </Box>
          :
      <Stack>
      <Stepper size='md' index={activeStep} gap='0'>
        {dutchSteps.map((step, index) => (
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
      <b>Step {activeStep+1}:</b> {dutchSteps[activeStep].description}
      </Text>
    </Stack>
}
    </>
    )
  }