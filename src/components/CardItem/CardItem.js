import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const CardItem = props => {
  const { image, title } = props;

  return (
    <TouchableOpacity>
      <View style={styles.item}>
        <Image source={{ uri: image }} style={styles.image} />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CardItem;
