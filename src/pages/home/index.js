import React from 'react'
import { View, Text, Button, ScrollView, Image } from 'react-native'
import Header from '../../components/header/header';
//faltou importar o database
import DataBase from '../database/database'
import styles from '../../components/styles'

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props)
        //faltou essas duas linhas abaixo
        this.db = new DataBase
        this.navigation = props.navigation
    }
    render() {
        return (
            <View style={styles.textContent}>
                <Header></Header>
                <View style={{ bottom: 94 }}>
                    <Text style={styles.textTitle}>Inovart imobiliaria</Text>
                    <Text style={styles.textSubtitle}>Seja bem-vindo!</Text>

                    <Image
                        source={require('../../components/images/Logo.jpg')}
                        style={styles.image}
                        resizeMode="cover"
                    />

                    <View style={styles.buttonContainer}>

                        <Button
                            title="Listagem"
                            type="outline"
                            color="#000000"
                            onPress={() => { this.navigation.push('Listagem', {}) }}
                        />

                        <Button
                            title='Cadastro'
                            color="#000000"
                            onPress={() => { this.navigation.push('Cadastro', {}) }}
                        />
                    </View>
                </View>
            </View>

        )
    }
}