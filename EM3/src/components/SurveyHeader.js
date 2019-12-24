import React from 'react';
import {StyleSheet} from 'react-native';
import {Header, Left, Body, Right, Button, Icon, Title} from 'native-base';
class SurveyHeader extends React.Component {
  render() {
    return (
      <Header>
        {/* <Left style={styles.centerStyle}>
          <Button transparent>
            <Icon name="arrow-back" />
          </Button>
        </Left> */}
        <Body style={styles.centerStyle}>
          <Title style={styles.titleCenter}>EM3</Title>
        </Body>
        {/* <Right style={styles.centerStyle}>
          <Button transparent>
            <Icon name="menu" />
          </Button>
        </Right> */}
      </Header>
    );
  }
}

const styles = StyleSheet.create({
  centerStyle: {
    flex: 1,
    alignSelf: 'center',
  },
  titleCenter: {
    alignSelf: 'center',
  },
});
export default SurveyHeader;
