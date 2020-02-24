import React, {useState} from 'react';
import {View, FlatList, StyleSheet, Button} from 'react-native';
import {connect} from 'react-redux';
import Input from '../components/Input';
import {fetchData} from '../actions';
import CardItem from '../components/CardItem';

const Search = props => {
  const [string, setString] = useState('');
  const [arreglo, setArreglo] = useState('');

  const buscarDrink = string => {
    return setString(string);
  };

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
      <Input onChangeText={buscarDrink} />
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

Search.navigationOptions = navigationData => {
  //console.log(navigationData);
  /*headerTitle: () => (
    <View
      style={{
        width: 370,
        flex: 2,
        height: 40,
        overflow: 'hidden',
      }}>     

    </View>
  ),*/
};

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
  };
};

export default connect(mapStateToProps, {fetchData})(Search);
