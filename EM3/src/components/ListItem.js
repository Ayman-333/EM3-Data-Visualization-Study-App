import React from 'react';
import {Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

class ListItem extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  };

  render() {
    return (
      <TouchableOpacity style={styles.container}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={require('../../res/appliancesIcons/Lamp.png')}
        />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    alignItems: 'flex-start',
    width: 60,
    // borderWidth: 0.5,
  },
  image: {
    width: 60,
    height: 60,
  },
  title: {
    fontSize: 45,
  },
});
export default ListItem;
