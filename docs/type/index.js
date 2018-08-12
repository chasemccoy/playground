import React from 'react'
import Box from 'components/Box'
import Text from 'components/Text'

const Sample = () => (
  <React.Fragment>
    ABCDEFGHIJKLMNOPQRSTUVWXYZ{<br />}
    abcdefghijklmnopqrstuvwxyz{<br />}
    0987654321
  </React.Fragment>
)

const Index = props => (
  <React.Fragment>
    <Text fontSize='120px'>
      Aa
    </Text>

    <Text fontSize='50px' mb={7}>
      <Sample />
    </Text>

    <Text fontSize='120px' fontWeight='900'>
      Aa
    </Text>

    <Text fontSize='50px' fontWeight='900' mb={7}>
      <Sample />
    </Text>

    <Text mb={6}>
      <Sample />
    </Text>

    <Text fontWeight='900'>
      <Sample />
    </Text>
  </React.Fragment>
)

export default Index
