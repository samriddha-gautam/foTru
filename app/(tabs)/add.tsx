import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AddRoutine from '@/components/ui/AddRoutine'

export default function add() {
  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <AddRoutine />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
});