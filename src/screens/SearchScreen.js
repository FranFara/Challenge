import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Button,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {connect} from 'react-redux';
import {onChanGe, cancelButton, fetchData, deleteData} from '../actions';
import Input from '../components/Input';
import CardItem from '../components/CardItem';

const Search = props => {
  const {query, data, cleanInput, onTodoClick, loadApi, cleanScreen} = props;
  const {goBack} = props.navigation;
  const [button, setButton] = useState();
  const [loadedApi, setLoadedApi] = useState(false);

  const [inputContainer, setInputContainer] = useState({
    flexDirection: 'row',
    width: '95%',
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
      width: '95%',
      height: 50,
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
            setLoadedApi(false);
          }}
        />
      </View>,
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

  let loader = <ActivityIndicator size="large" color="orange" />;
  if (!data.isFetching) {
    loader = (
      <FlatList
        keyExtractor={(item, index) => item.idDrink}
        data={data.drinks}
        renderItem={DrinkList}
        style={styles.flatListContainer}
      />
    );
  }

  return (
    <View style={styles.screen}>
      <View style={inputContainer}>
        <TouchableOpacity style={styles.backButton} onPress={() => goBack()}>
          <Text style={styles.textButtonBack}>Back</Text>
        </TouchableOpacity>
        <Input
          onChangeText={onTodoClick}
          value={query.queryDrink}
          onFocus={SearchInputHandler}
        />
        {button}
      </View>
      {loader}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
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
  flatListContainer: {
    width: '100%',
    paddingHorizontal: 10,
  },
  backButton: {
    height: '80%',
    width: '15%',
    justifyContent: 'center',
    backgroundColor: '#eb9d3d',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'white',
    alignItems: 'center',
    marginRight: 5,
  },
  textButtonBack: {
    fontSize: 16,
    color: 'white',
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
    loadApi: textInput => {
      dispatch(fetchData(textInput));
    },
    cleanScreen: () => {
      dispatch(deleteData());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
