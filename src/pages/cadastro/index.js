import React, { Component } from 'react'
import { Text, View, ScrollView, Image, Button, SafeAreaView } from 'react-native'
import { Input } from 'react-native-elements'
import DatabaseClass from '../database/database'
import Anuncio from '../model/'
import SimplePicker from '../../components/SimplePicker/'
import ImagePicker from '../../components/imagePicker/'
import styles from '../../components/styles'

class CadastroScreen extends Component {
    constructor(props) {
        super(props)
        this.db = new DatabaseClass()
        this.navigation = props.navigation
        this.types = [
            { label: 'Casa', value: 1, },
            { label: 'Apartamento', value: 2, },
            { label: 'Comércio', value: 3, },
        ]
        this.final = [
            { label: 'Alugar', value: 1, },
            { label: 'Vender', value: 2, },
        ]
        this.state = {
            anuncio_name: '',
            anuncio_price: 0.0,
            anuncio_address: '',
            anuncio_final: 1,
            anuncio_type: 1,
            anuncio_image: ''
        }
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <Input
                        style={styles.Input}
                        type="text"
                        placeholder="Nome"
                        onChangeText={text =>
                            this.setState({
                                anuncio_name: text
                            })}
                        maxLength={20}
                    />

                    <Input type="text"
                        placeholder="Endereço"
                        onChangeText={text =>
                            this.setState({
                                anuncio_address: text
                            })}
                        maxLength={60}
                    />

                    <Input placeholder="Preço"
                        onChangeText={text =>
                            this.setState({
                                anuncio_price: text
                            })}
                        keyboardType='numeric'
                        maxLength={12}
                    />

                    <SimplePicker
                        onChange={(value) =>
                            this.setState({
                                anuncio_type: value
                            })}
                        values={this.types}
                    />

                    <SimplePicker
                        onChange={(value) =>
                            this.setState({
                                anuncio_final: value
                            })}
                        values={this.final}
                    />
                    <View style={styles.screen}>
                        <View style={styles.buttonContainer}>

                            <ImagePicker
                                title="   Carregar foto  "
                                usePhotoFromLibrary={true}
                                onTakePhoto={(uri) =>
                                    this.setState({ anuncio_image: uri })}
                            />

                            <ImagePicker
                                title="   Tirar foto  "
                                saveCameraImage={true}
                                onTakePhoto={(uri) =>
                                    this.setState({ anuncio_image: uri })}
                            />
                        </View>
                    </View>

                    {this.state.anuncio_image ?
                        <View>
                            {/* Dimensões da imagem, se não ela não aparece */}
                            <Image style={styles.anuncioImage}
                                source={{
                                    uri: this.state.anuncio_image
                                }}
                            />
                        </View>
                        :
                        <Text style={styles.anuncioImage2}
                        >Nenhuma imagem carregada!
                        </Text>
                    }
                    <View style={{ alignItems: "center", marginBottom: 5, marginLeft: 6 }}>
                        <Button color="#000000" title="Cadastrar" onPress={this.add_address} />
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
    add_address = (() => {
        let anuncio = new Anuncio({
            name: this.state.anuncio_name,
            image: this.state.anuncio_image,
            price: this.state.anuncio_price,
            address: this.state.anuncio_address,
            final: this.state.anuncio_final,
            type: this.state.anuncio_type,
        })
        if (!anuncio.isValidWithOutId()) {
            alert('Por favor preencha todos os campos!')
            return
        }
        this.db.addNewAnuncio(anuncio).then(result => {
            if (result) {
                this.navigation.pop()
            }
        })
    }).bind(this)

}
export default CadastroScreen;
