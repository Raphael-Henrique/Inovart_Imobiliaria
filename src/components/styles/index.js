import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    // Pages - Home
    container: {
        width: '100%',
        backgroundColor: '#FFFF',
        marginBottom: 50
    },

    image: {
        resizeMode: 'contain',
        alignItems: 'center',
        bottom: 12,
        height: 200,
        left: 33,
        marginBottom: 10,
        marginLeft: 20,
        borderRadius: 6,
    },

    textContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 130,
        backgroundColor: '#FFFF'
    },

    textTitle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        top: 70,
        marginBottom: 23,
        marginLeft: 33
    },

    textSubtitle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 30,
        top: 30,
        marginLeft: 86
    },

    textFilter: {
        fontSize: 20,
        margin: 10,
        marginVertical: '2%',
    },

    textMsg: {
        fontSize: 16,
        margin: 10,
        marginVertical: '2%',
        color: '#686868',
    },

    homeButton: {
        width: 400,
        bottom: 95,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },

// PASTA: src - components - AnuncioItem
    imageAnuncioItem: {
        resizeMode: "contain",
        height: 400,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6
    },

    // PASTA: src - pages - cadastro
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    container: {
        flex: 1,
        width: '100%',
        backgroundColor: 'white'
    },

    Input: {
        marginTop: 20,
        backgroundColor: '#b8cad4',
        marginTop: 25,
        marginLeft: 2,
        marginVertical: 2
    },

    buttonContainer: {
        width: 400,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },

    anuncioImage: {
        marginVertical: 10,
        alignSelf: 'center',
        width: '80%',
        height: 200,
        borderRadius: 6
    },

    anuncioImage2: {
        flexDirection: 'row',
        marginLeft: 100,
        marginTop: 20,
        marginBottom: 25,
        alignItems: 'center'
    },

    buttonCadastrar: {
        flex: 1,
        marginTop: '20'
    },

    // PASTA: src - componentes - simplePicker
    picker: {
        borderWidth: 10,
        height: 30,
        width: '100%',
        color: '#000',
        textAlign: 'center',
        paddingBottom: 20,
        margin: 5
    },

    // PASTA: src - componentes - anuncioItem

    anuncioCod: {
        alignSelf: 'center',
        color: 'red',
        fontSize: 18
    },


    anuncioName: {
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 22,
        marginTop: 8
    },


    anuncioFinalidade: {
        alignSelf: 'center',
        color: 'blue',
        fontSize: 18
    },

    anuncioImagem: {
        width: '100%',
        height: 250,
        borderRadius: 6
    },

    anuncioTipo: {
        alignSelf: 'center',
        fontSize: 18
    },

    anuncioValor: {
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 5
    },

    textMsg: {
        fontSize: 16,
        margin: 10,
        marginVertical: '2%',
        color: '#686868',
    },

    // Consulta - AnuncioItem
    imageAnuncioItem: {
        resizeMode: "contain",
        height: 400,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6
    },

});

export default styles;