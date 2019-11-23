import React from 'react';
import {Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {image_directory} from '../../res/images_directory';

class ListItem extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    onPressAction: PropTypes.func.isRequired,
    selectedKey: PropTypes.string.isRequired,
  };

  onListItemPressed = () => {
    this.props.onPressAction(this.props.id);
  };

  render() {
    return (
      <TouchableOpacity
        style={[
          styles.container,
          this.props.selectedKey === this.props.id && styles.highlighted,
        ]}
        onPress={this.onListItemPressed}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={image_directory[this.props.imageName]}
        />
        <Text
          style={[
            styles.title,
            this.props.selectedKey === this.props.id && styles.highlighted,
          ]}>
          {this.props.title.replace('_', ' ')}
        </Text>
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
    borderBottomWidth: 1,
  },
  image: {
    width: 60,
    height: 60,
  },
  highlighted: {
    backgroundColor: 'grey',
    color: 'white',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 12,
    textTransform: 'capitalize',
    alignSelf: 'center',
    textAlign: 'center',
  },
});
export default ListItem;
