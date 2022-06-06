import React from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import Anuncio from '../../pages/model/'
import styles from '../../components/styles'

export default function AnuncioItem(props) {
    const anuncio = new Anuncio(props.anuncio)
    return <TouchableOpacity>

        {/* Nome do imóvel */}
        <Text style={styles.anuncioName}>
            {anuncio.name}
        </Text>

        {/* ID do imóvel */}
        <Text style={styles.anuncioCod}>
            Cód. imóvel: {anuncio.id}
        </Text>        

        <Text style={styles.anuncioFinalidade}>
            {
                anuncio.final == 1 ?
                    'Aluga-se' :
                    anuncio.final == 2 ?
                        'Vende-se' : '?'
            }
        </Text>

        {/* Imagem do anuncio */}
        <Image
            source={{ uri: anuncio.image }}
            style={styles.anuncioImagem}
        />

        {/* Tipo do anuncio */}
        <View >
            <Text style={styles.anuncioTipo}>
                Imóvel tipo:  {
                    anuncio.type == 1 ?
                        'Casa' :
                        anuncio.type == 2 ?
                            'Apartamento' :
                            anuncio.type == 3 ?
                                'Comércio' : '?'}
            </Text>
        </View>

        {/* Valor do imóvel */}
        <View>
            <Text style={styles.anuncioValor}
            >
                R$ {anuncio.price.toFixed(0)}
            </Text>

            {/* Endereço do imóvel */}
            <Text style={{
                alignSelf: 'center',
                marginTop: 5
            }}
            >
                End: {anuncio.address}
            </Text>

            <View style={{
                borderWidth: 1,
                borderBottomColor: '#DDD',
                marginVertical: '2%',
            }} />
        </View>
    </TouchableOpacity>
}