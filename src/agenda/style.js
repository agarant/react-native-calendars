import { StyleSheet } from 'react-native';
import * as defaultStyle from '../style';

export default function styleConstructor(theme = {}) {
  const appStyle = { ...defaultStyle, ...theme };
  return StyleSheet.create({
    calendar: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      borderBottomWidth: 1,
      borderColor: appStyle.separatorColor,
    },
    calendarContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
    knobContainer: {
      flex: 1,
      position: 'absolute',
      left: 0,
      right: 0,
      height: 24,
      bottom: 0,
      alignItems: 'center',
      backgroundColor: appStyle.calendarBackground,
    },
    knob: {
      width: 38,
      height: 7,
      marginTop: 10,
      borderRadius: 3,
      backgroundColor: '#4990e2',
    },
    weekdays: {
      position: 'absolute',
      left: 0,
      right: 0,
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginLeft: 15,
      marginRight: 15,
      paddingTop: 15,
      paddingBottom: 7,
      backgroundColor: appStyle.calendarBackground,
    },
    weekday: {
      width: 32,
      textAlign: 'center',
      fontSize: 13,
      color: appStyle.textSectionTitleColor,
    },
    reservations: {
      flex: 1,
      marginTop: 90,
      backgroundColor: appStyle.backgroundColor,
    },
  });
}
