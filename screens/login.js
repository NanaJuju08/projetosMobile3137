import { setStatusBarBackgroundColor } from 'expo-status-bar';
import {Text, View, StyleSheet, ImageBackground, TextInput, Button} from 'react-native';
import Cadastro from './cadastro';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';

import { auth } from '../controller';

export default function Login({navigation}) {
        const [senha, setSenha] = useState("");
        const [email, setEmail] = useState("");

        const VerificarUser = () => {
            signInWithEmailAndPassword(auth, email, senha).then(userCredential => {
                console.log('Usuário logado!', userCredential.user.email);
                navigation.navigate('HomeTab');
            })
            .catch((error) => {
                console.log('Erro ao logar', error.message);
              });
        }
    return (
        <View style={styles.container}>
            <ImageBackground source={{uri: 'https://i.pinimg.com/736x/de/49/07/de49078b778b376eca74314d7cf2780c.jpg'}} style={{flex: 1}}>

                <View style={styles.textinho9}>
                    <Text style={styles.texto9}>MINSUNG'S DOCERIA</Text>
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
                    <Button title= "START" color='#EC7FA9' onPress={VerificarUser}/>
                    <Button title= "CADASTRE-SE" color='#A7D477' onPress={() => navigation.navigate("Cadastro")}/>
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
        paddingStart: 40
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
    }
})