import React from "react";
import { TextInput } from "react-native";
import { stylesInput } from "./styles";

const Input = props => {
  return <TextInput style={stylesInput.input} {...props} />;
};

export default Input;
