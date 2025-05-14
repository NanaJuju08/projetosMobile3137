import { useScrollToTop } from '@react-navigation/native';
import { useState } from 'react';
import {Text, View, StyleSheet, ImageBackground, TextInput, Button, TouchableOpacity} from 'react-native';
import { db } from '../controller';
import { collection, addDoc } from 'firebase/firestore';


export default function CadastrarProdutos({navigation}) {
        const [nome, setNome] = useState("");
        const [valor, setValor] = useState("");
        const [imagem, setImagem] = useState("");

        const CadastrarProduto = async () => {
            try{
                await addDoc(collection(db, 'produtos'), {
                    nome,
                    valor: parseFloat(valor),
                    imagem
                });

                setNome('');
                setImagem(''),
                setValor('')
            }
            catch (error){
                console.log("Erro ao cadastrar produto!", error)
            }
        }

    return (
        <View style={styles.container}>
            <ImageBackground source={{uri: 'https://i.pinimg.com/736x/05/8c/17/058c176be8325f3ef7008d871c8051f6.jpg'}} style={{flex: 1}}>

                <View style={styles.textinho9}>
                    <Text style={styles.texto9}>CADASTRO</Text>
                </View>
                
                <View style={styles.usuario}>
                    <TextInput style={styles.input} placeholder='Nome' value={nome} onChangeText={setNome}>
                    </TextInput>
                </View>
                <View style={styles.usuario}>
                <TextInput style={styles.input} placeholder='Valor' value={valor} onChangeText={setValor}>
                    </TextInput>
                </View>
                <View style={styles.usuario}>
                    <TextInput style={styles.input} placeholder='URL da Imagem' value={imagem} onChangeText={setImagem}>
                    </TextInput>
                </View>
                <View style={styles.btn}>
                    <Button title= "CADASTRAR" color='#EC7FA9' onPress={CadastrarProduto}/>
                </View>
                <View style ={styles.vazio}>

                </View>
            </ImageBackground>
        </View>  
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    
    textinho9: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingStart: 5
    },

    texto9: {
        marginTop: 100,
        color: '#BE5985',
        fontSize: 55,
        fontWeight: 'bold'
    },

    usuario: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: 300,
        height: 50,
        fontSize: 30,
        color:'#BE5985'
    },

    btn: {
        justifyContent: 'center',
        margin: 30
    },

    vazio: {
        flex: 1,
    },

    txt: {
        flexDirection: 'row',
        justifyContent: 'center',
        fontSize: 20,
        color: '#BE5985',
    }
})