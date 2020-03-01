import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Button,
  TouchableOpacity,
  ActivityIndicator,
  SafeAreaView
} from "react-native";
import { connect } from "react-redux";
import { onChanGe, cancelButton, fetchData, deleteData } from "../actions";
import { stylesSearch } from "./styles";
import Input from "../components/Input";
import CardItem from "../components/CardItem";

const Search = props => {
  const { query, data, cleanInput, onTodoClick, loadApi, cleanScreen } = props;
  const { goBack } = props.navigation;
  const [button, setButton] = useState();
  const [loadedApi, setLoadedApi] = useState(false);
  const [inputContainer, setInputContainer] = useState(
    stylesSearch.setInputContainer
  );

  //---- Render de Flat List ----
  const DrinkList = itemData => {
    return (
      <CardItem
        title={itemData.item.strDrink}
        image={itemData.item.strDrinkThumb}
      />
    );
  };
  /* 
   ---- Cambio de estado para mostrar Button "CANCEL" ----
  */
  const SearchInputHandler = () => {
    setButton(
      <View style={stylesSearch.buttonContainer}>
        <Button
          color="red"
          title="Cancel"
          onPress={() => {
            cleanInput();
            cleanScreen();
            setLoadedApi(false);
          }}
        />
      </View>
    );
  };

  if (query.queryDrink.length >= 3 && !loadedApi) {
    loadApi(query.queryDrink);
    setLoadedApi(true);
  }
  if (query.queryDrink.length === 0 && loadedApi) {
    cleanScreen();
    setLoadedApi(false);
  }

  let loader;
  if (data.isFetching && query.queryDrink.length >= 3) {
    loader = <ActivityIndicator size="large" color="orange" />;
  } else {
    loader = (
      <FlatList
        keyExtractor={(item, index) => item.idDrink}
        data={data.drinks}
        renderItem={DrinkList}
        style={stylesSearch.flatListContainer}
      />
    );
  }

  return (
    <SafeAreaView style={stylesSearch.screen}>
      <View style={inputContainer}>
        <TouchableOpacity
          style={stylesSearch.backButton}
          onPress={() => goBack()}
        >
          <Text style={stylesSearch.textButtonBack}>Back</Text>
        </TouchableOpacity>
        <Input
          onChangeText={onTodoClick}
          value={query.queryDrink}
          onFocus={SearchInputHandler}
        />
        {button}
      </View>
      {loader}
    </SafeAreaView>
  );
};

const mapStateToProps = state => {
  return {
    data: state.cocktail,
    query: state.query
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: text => {
      dispatch(onChanGe(text));
    },
    cleanInput: () => {
      dispatch(cancelButton());
    },
    loadApi: textInput => {
      dispatch(fetchData(textInput));
    },
    cleanScreen: () => {
      dispatch(deleteData());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
