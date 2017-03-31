/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

import Hcharts from "./Hcharts";

export default class RNHighchartsDemo extends Component {
  render() {
    return (
      <View>
        <Hcharts />
      </View>
    );
  }
}

AppRegistry.registerComponent('RNHighchartsDemo', () => RNHighchartsDemo);
