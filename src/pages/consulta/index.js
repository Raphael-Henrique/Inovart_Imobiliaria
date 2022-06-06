import React from 'react'
import { FlatList, Text, SafeAreaView } from 'react-native'

import AnuncioItem from '../../components/anuncioItem'
import DataBase from '../database/database'
import styles from '../../components/styles'

export default class Consulta extends React.Component {
    constructor(props) {
        super(props)
        this.db = new DataBase()
        this.types = [
        ]
        this.navigation = props.navigation
        this.state = {
            anuncios: [],
            carregando: true,
            filter: -1,
        }
        this.refresh()
    }

    refresh = () => {
        let filter = this.state.filter
        if (filter > 0) setTimeout(() => {
            this.setState({ anuncios: [], carregando: true })
            this.db.loadAnunciosWithTypeFilter(filter).then(anuncios =>
                this.setState({ anuncios: anuncios, carregando: false }))
        }, 0)
        else setTimeout(() => {
            this.setState({ anuncios: [], carregando: true })
            this.db.loadAnuncios().then(anuncios =>
                this.setState({ anuncios: anuncios, carregando: false }))
        }, 0)
    }
    renderItem = ({ item }) =>
        <AnuncioItem anuncio={item} onPress={() =>
            this.navigation.push('PView', { anuncioId: item.id })}
        />

    keyExtractor = (item) => item.id.toString()

    render() {
        return (
            <SafeAreaView style={styles.container}>
                {this.state.carregando ?
                    <Text style={styles.textMsg}>Carregando...</Text> :
                    this.state.anuncios.length > 0 ?
                        <FlatList
                            id={this.state.id}
                            data={this.state.anuncios}
                            renderItem={this.renderItem}
                            keyExtractor={this.keyExtractor}
                            showsHorizontalScrollIndicator={false}
                            showsVerticalScrollIndicator={false}
                        /> :
                        <Text style={styles.textMsg}>Não há anúncios no momento</Text>
                }
            </SafeAreaView >
        )
    }
}