import React from 'react'
import styled from '@emotion/native'
import {Colors} from '../../Styles';

export default function ScreenHeader ({viewerCount, ...props}) {
  return (
    <Container>
      <Text>Cx Network</Text>
      <Text>{viewerCount}</Text>
    </Container>
  )
}

const Container = styled.View({
  padding: 20,
  paddingTop: 40,
  marginBottom: 20,
  backgroundColor: Colors.BLACK,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center'
})

const Text = styled.Text({
  fontSize: 22,
  color: '#fff'
})
