import React, { useRef } from 'react'
import Wizard from '../package/index.js'
import { Box, Button, Text } from '@chakra-ui/react'

function Basic() {
  const nextButtonRef = useRef()
  const backButtonRef = useRef()
  const stepTitleRef = useRef()

  const values = {
    'Step 1': 'Hello!',
    'Step 2': 'Your description',
    'Step 3': <h3>You have completed all the steps.</h3>,
  }

  return (
    <Box
      sx={{
        margin: '24px 0',
        display: 'flex',
        flexDir: 'column',
        alignItems: 'center',
        border: '1px solid',
        padding: '24px',
        borderRadius: '4px',
      }}
    >
      <Text ref={stepTitleRef} fontSize="3xl" />
      <Box
        sx={{
          height: '32px',
          margin: '14px 0 24px',
        }}
      >
        <Wizard
          stepTitleRef={stepTitleRef}
          nextButtonRef={nextButtonRef}
          backButtonRef={backButtonRef}
          values={values}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          gap: '10px',
          margin: 0,
        }}
      >
        <Button ref={backButtonRef} colorScheme="blackAlpha">
          Back
        </Button>
        <Button ref={nextButtonRef} colorScheme="blackAlpha">
          Next
        </Button>
      </Box>
    </Box>
  )
}

export default Basic
