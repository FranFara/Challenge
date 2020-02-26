import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Button,
  ActivityIndicator,
} from 'react-native';
import {connect} from 'react-redux';

import {onChanGe, cancelButton, fetchData} from '../actions';
import Input from '../components/Input';
import CardItem from '../components/CardItem';

const Search = props => {
  const [arreglo, setArreglo] = useState('');
  const [boton, setBoton] = useState();
  /*const [loader, setLoader] = useState(
    <ActivityIndicator size="large" color="#00ff00" />,
  );*/

  useEffect(() => {
    props.cargaApi();
  }, []);

  const [inputContainer, setInputContainer] = useState({
    flexDirection: 'column',
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  });

  //Render de Flat List
  const TragosList = itemData => {
    return (
      <CardItem
        title={itemData.item.strDrink}
        image={itemData.item.strDrinkThumb}
      />
    );
  };

  /* ---- Utilizacion de Redux Thunks
   ---- Cambio de estado para mostrar Button "CANCEL"
  */
  const SearchInputHandler = () => {
    //
    setInputContainer({
      flexDirection: 'row',
      width: '90%',
      marginVertical: 10,
      alignContent: 'center',
      alignItems: 'center',
    });
    setBoton(
      <View style={styles.buttonContainer}>
        <Button color="red" title="Cancel" onPress={props.cleanInput} />
      </View>,
    );
    // console.log(props.data.isFetching);
  };

  /*if (props.data.isFetching === false) {
    setLoader(<Text>Basta</Text>);
  }*/

  return (
    <View style={styles.screen}>
      <View style={inputContainer}>
        <Input
          onChangeText={props.onTodoClick}
          value={props.query.queryDrink}
          onFocus={SearchInputHandler}
        />
        {boton}
      </View>
      <Button
        title="mostrar lista"
        onPress={() => {
          setArreglo(props.data.tragos);
        }}
      />
      <View style={styles.loaderContainer}></View>
      <FlatList
        keyExtractor={(item, index) => item.idDrink}
        data={arreglo}
        renderItem={TragosList}
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
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#093339',
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
