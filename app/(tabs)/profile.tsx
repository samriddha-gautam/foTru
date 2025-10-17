import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Login from '@/components/ui/Login';

export default function profile() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Login/>
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