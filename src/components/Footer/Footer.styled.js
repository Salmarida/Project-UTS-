import styled from "styled-components";
import {
  StyleSheet,
  View,
  Dimensions
} from 'react-native';
var { height } = Dimensions.get('window');
var box_count = 3;
var box_height = height / box_count;
export default class VerticalStackLayout extends Component {
  render() {
    return (
        <View style={styles.container}>
            <View style={[styles.box, styles.box1]}></View> 
            <View style={[styles.box, styles.box2]}></View> 
            <View style={[styles.box, styles.box3]}></View> 
        </View> 
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  box: {
    height: box_height
  },
  box2: {
    backgroundColor: '#8BC34A'
  },
});
  
export default StyledFooter;
export { Container }; 
