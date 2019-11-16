import React from 'react';
import {Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {image_directory} from '../../res/images_directory';

class ListItem extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    onPressAction: PropTypes.func.isRequired,
  };

  render() {
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={this.props.onPressAction}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={image_directory[this.props.type]}
        />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 5,
    marginRight: 5,
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
