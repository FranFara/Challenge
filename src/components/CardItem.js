import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const CardItem = props => {
  const { image, title } = props;

  return (
    <TouchableOpacity>
      <View style={styles.itemCard}>
        <Image source={{ uri: image }} style={styles.imageCard} />
        <View style={styles.titleContainerCard}>
          <Text style={styles.titleCard}>{title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CardItem;
