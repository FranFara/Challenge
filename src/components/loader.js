import React, {useState, useEffect} from 'react';
import {Text, ActivityIndicator, View} from 'react-native';
import {connect} from 'react-redux';
import {fetchData} from '../actions';

const Loader = () => {
  let loader = <ActivityIndicator size="large" color="#00ff00" />;

  /*useEffect(() => {
    props.cargaApi();
  }, []);*/

  if (!props.data.isFetching) {
    loader = <Text>Basta</Text>;
  }
  return <View>{loader}</View>;
};

const mapStateToProps = state => {
  return {
    data: state.cocktail,
    query: state.query,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    cargaApi: () => {
      dispatch(fetchData());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Loader);
