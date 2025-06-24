import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FinTrack = () => {
  return (
    <View style={styles.container}>
      <Text>FinTrack</Text>
    </View>
  )
}

export default FinTrack

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})