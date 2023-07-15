import { SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FC, PropsWithChildren, ReactElement } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export default function DefaultLayout(props: PropsWithChildren<DefaultLayoutProps & NativeStackScreenProps<any>>) {

  const { title, left, right, customHeader, header, onBackPress, children } = props

  const layout: ReactElement = (
    <SafeAreaView>
      {customHeader
        ? (header)
        : (
          <View>
            {/* Left icon */}
            <TouchableOpacity onPress={onBackPress}>
              <Text>Back</Text>
            </TouchableOpacity>
            {/* Title */}
            <View>
              <Text>{title}</Text>
            </View>
            {/* Right icon */}

          </View>
        )
      }
      {children}
    </SafeAreaView>
  )
  return (
    <>
      <StatusBar />
      {customHeader ? (
        <View>
          {header}
        </View>
      ) : (
        <View>
          <Text>{title}</Text>
          {left}
          {right}
        </View>
      )}
      {children}
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
const styles = StyleSheet.create({})