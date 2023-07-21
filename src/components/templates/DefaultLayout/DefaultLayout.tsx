import { SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FC, PropsWithChildren, ReactElement } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Entypo from 'react-native-vector-icons/Entypo'
export default function DefaultLayout(props: PropsWithChildren<DefaultLayoutProps & NativeStackScreenProps<any>>) {

  const { title, left, right, customHeader, header, onBackPress, children } = props

  const layout: ReactElement = (
    <SafeAreaView style={styles.container}>
      {customHeader
        ? (header)
        : (
          <View style = {styles.header}>
            {/* Left icon */}
            {left 
            ? (
              left
            )
            : (
                <TouchableOpacity onPress={onBackPress}>
                  <Entypo name='chevron-left' size={25} color={'#000'} />
                </TouchableOpacity>
            )}
            {/* Title */}
            <View>
              <Text style={styles.title}>{title}</Text>
            </View>
            {/* Right icon */}
            {right ? (
              right
            ) : (
              <View />
            )}
          </View>
        )
      }
      {children}
    </SafeAreaView>
  )
  return (
    <>
      <StatusBar />
      {layout}
    </>
  )
}

interface DefaultLayoutProps {
  title?: string | ReactElement;

  left?: ReactElement;

  right?: ReactElement;

  customHeader?: boolean;

  header?: ReactElement;

  onBackPress?: () => void;
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1
  },
  header : {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding : 10
  },
  title : {
    color: '#403572',
    fontFamily: 'Roboto-Bold',
    // fontWeight: '600',
    fontSize: 16,
  }

})