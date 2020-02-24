import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

const CardItem = props => {
  return (
    <TouchableOpacity>
      <View style={styles.itemCard}>
        <Image source={{uri: props.image}} style={styles.image} />

        <View style={styles.titleContainer}>
          <Text style={styles.title}>{props.title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemCard: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    height: 150,
    width: '100%',
    backgroundColor: '#eb9d3d',
    borderRadius: 10,
    overflow: 'hidden',
    marginVertical: 10,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 150 / 2,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: 'white',
    marginHorizontal: 10,
  },
  titleContainer: {
    width: '70%',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 26,
    color: 'white',
  },
});

export default CardItem;
