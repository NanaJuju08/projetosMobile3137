import { setStatusBarBackgroundColor } from 'expo-status-bar';
import {Text, View, StyleSheet, ImageBackground, TextInput, Button} from 'react-native';
import { useState } from 'react';

import { createUserWithEmailAndPassword} from "firebase/auth"; //Tá na documentação - criação do user com email e senha;

import { auth } from '../controller'; //Exportando o auth do arquivo controller;

export default function Cadastro({navigation}) {
    const [senha, setSenha] = useState("");
    const [email, setEmail] = useState("");

    //Função do cadastro do usuário, essa função é chamada quando o usuário clica no botão;
    //O .then((userCredential)) é pra verificar ser o email e a senha estão de acordo com os critérios exigidos firebase, como quantidade de carácteres, etc;
    const cadastroUser = () => {
        createUserWithEmailAndPassword(auth, email, senha).then((userCredential) => {
            console.log('cadastrado!', userCredential.user.email);
            navigation.navigate('Login');
          })
          .catch((error) => {
            console.log('Erro', error.message);
          });
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={{uri: 'https://i.pinimg.com/736x/1c/60/ff/1c60ff3771e4f127e1337cebdcbc42f1.jpg'}} style={{flex: 1}}>

                <View style={styles.textinho9}>
                    <Text style={styles.texto9}>CADASTRE-SE</Text>
                </View>
                
                <View style={styles.usuario}>
                    <TextInput style={styles.input} placeholder='E-mail' value={email} onChangeText={setEmail}>
                    </TextInput>
                </View>
                <View style={styles.usuario}>
                    <TextInput style={styles.input} placeholder='Senha' value={senha} onChangeText={setSenha} secureTextEntry={true}>
                    </TextInput>
                </View>
                <View style={styles.btn}>
                    <Button title= "CADASTRAR" color='#A7D477' onPress={cadastroUser}/>
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
        alignItems: 'center'
    },

    texto9: {
        marginTop: 100,
        color: '#A7D477',
        fontSize: 50,
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
        color:'#A7D477'
    },

    btn: {
        justifyContent: 'center',
        margin: 30
    },

    vazio: {
        flex: 1,
    }
})