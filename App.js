import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';

import Icon from 'react-native-vector-icons/Ionicons';

import Explore from './Screens/Explore';
import Inbox from './Screens/Inbox';
import Saved from './Screens/Saved';
import Trips from './Screens/Trips';
import Profile from './Screens/Profile';





export default createBottomTabNavigator({
  Explore:{
    screen: Explore,
    navigationOptions:{
      tabBarLabel:'EXPLORE',
      tabBarIcon:({tintColor}) => (
        <Icon name="ios-search-outline" color = {tintColor} size={24} />
      )
    }
  },
  Saved:{
    screen: Saved,
    navigationOptions:{
      tabBarLabel:'SAVED',
      tabBarIcon:({tintColor}) => (
        <Icon name="ios-heart-outline" color = {tintColor} size={24} />
      )
    }
  },
  Trips:{
    screen: Trips,
    navigationOptions:{
      tabBarLabel:'TRIPS',
      tabBarIcon:({tintColor}) => (
        <Image source={require('./assets/airbnb.png')} 
          style={{height: 24, width: 24, tintColor:tintColor}}/>
      )
    }
  },
  Inbox:{
    screen: Inbox,
    navigationOptions:{
      tabBarLabel:'INBOX',
      tabBarIcon:({tintColor}) => (
        <Icon name="ios-chatboxes-outline" color = {tintColor} size={24} />
      )
    }
  },
  Profile:{
    screen: Profile,
    navigationOptions:{
      tabBarLabel:'PROFILE',
      tabBarIcon:({tintColor}) => (
        <Icon name="ios-person-outline" color = {tintColor} size={24} />
      )
    }
  }
},
{ //Custom features inside the tab bar
  tabBarOptions:{
    activeTintColor: 'red',
    inactiveTintColor: 'grey',
    style:{
      backgroundColor:'white',
      borderTopWidth: 0,

      //Shadow works only in IOS
      shadowOffset: {width:5, height:3},
      shadowColor: 'black',
      shadowOpacity: 0.5,

      //Elevation is the option for Android
      elevation: 5
    }
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
