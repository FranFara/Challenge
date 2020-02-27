import React, {useState, useEffect} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Button,
  ActivityIndicator,
} from 'react-native';
import {connect} from 'react-redux';

import {onChanGe, cancelButton, fetchData, deleteData} from '../actions';
import Input from '../components/Input';
import CardItem from '../components/CardItem';

const Search = props => {
  const {query, data, cleanInput, onTodoClick, cargaApi, cleanScreen} = props;
  const [button, setButton] = useState();
  const [load, setLoad] = useState(false);

  const [inputContainer, setInputContainer] = useState({
    flexDirection: 'column',
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginVertical: 10,
  });

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
    setInputContainer({
      flexDirection: 'row',
      width: '90%',
      marginVertical: 10,
      alignContent: 'center',
      alignItems: 'center',
    });
    setButton(
      <View style={styles.buttonContainer}>
        <Button
          color="red"
          title="Cancel"
          onPress={() => {
            cleanInput();
            cleanScreen();
            setLoad(false);
          }}
        />
      </View>,
    );
  };

  if (query.queryDrink.length >= 3 && !load) {
    cargaApi();
    setLoad(true);
  }

  return (
    <View style={styles.screen}>
      <View style={inputContainer}>
        <Input
          onChangeText={onTodoClick}
          value={query.queryDrink}
          onFocus={SearchInputHandler}
        />
        {button}
      </View>
      <FlatList
        keyExtractor={(item, index) => item.idDrink}
        data={data.drinks}
        renderItem={DrinkList}
        style={{width: '100%', paddingHorizontal: 10}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
    alignContent: 'center',
    marginLeft: 10,
  },
  loaderContainer: {
    width: 100,
    height: 300,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

const mapStateToProps = state => {
  return {
    data: state.cocktail,
    query: state.query,
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
    cargaApi: () => {
      dispatch(fetchData());
    },
    cleanScreen: () => {
      dispatch(deleteData());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
