import React from 'react';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    itemCard: {
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        height: 150,
        width: '100%',
        backgroundColor: '#eb9d3d',
        borderRadius: 10,
        overflow: 'hidden',
        marginVertical: 10,
      },
      imageCard: {
        width: 120,
        height: 120,
        borderRadius: 150 / 2,
        overflow: 'hidden',
        borderWidth: 3,
        borderColor: 'white',
        marginHorizontal: 10,
      },
      titleContainerCard: {
        width: '70%',
        justifyContent: 'center',
        paddingHorizontal: 20,
      },
      titleCard: {
        fontSize: 26,
        color: 'white',
      },
})

export const stylesInput = StyleSheet.create({
    input: {
        flex: 1,
        width: '85%',
        height: '100%',
        backgroundColor: 'white',
        paddingHorizontal: 10,
        fontSize: 18,
        elevation: 5,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#eb9d3d',
      }
})