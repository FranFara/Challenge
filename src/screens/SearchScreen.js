import React, {useState} from 'react';
import {View, FlatList, TextInput, StyleSheet, Button} from 'react-native';
//import Autocomplete from 'react-native-autocomplete-input';

import {connect} from 'react-redux';
import Input from '../components/Input';
/*

Revisar para poder consumir la API desde este WillFrame

import {fetchData} from '../actions';

*/

import {onChanGe, cancelButton} from '../actions';
import CardItem from '../components/CardItem';

const Search = props => {
  const [arreglo, setArreglo] = useState('');

  //Render de Flat List
  const TragosList = itemData => {
    return (
      <CardItem
        title={itemData.item.strDrink}
        image={itemData.item.strDrinkThumb}
      />
    );
  };

  return (
    <View style={styles.screen}>
      <Input onChangeText={props.onTodoClick} />
      <TextInput
        value={props.query.queryDrink}
        style={{backgroundColor: 'black', color: 'white'}}
      />
      <Button
        title="mostrar lista"
        onPress={() => {
          setArreglo(props.data.tragos);
        }}
      />
      <FlatList
        keyExtractor={(item, index) => item.idDrink}
        data={arreglo}
        renderItem={TragosList}
        style={{width: '100%', paddingHorizontal: 10}}
      />
    </View>
  );
};

//Revisar para poder poner Componente Input en el Header
/*Search.navigationOptions = navigationData => {
  console.log(navigationData);
  headerTitle: () => (
    <View
      style={{
        width: 370,
        flex: 2,
        height: 40,
        overflow: 'hidden',
      }}></View>
  );
};*/

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
