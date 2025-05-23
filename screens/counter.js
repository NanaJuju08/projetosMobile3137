import {Text, View, StyleSheet, ImageBackground, Image, Button, ScrollView, TouchableOpacity, TextInput} from 'react-native';
import { useState } from 'react';

export default function Counter() {

    const [contador, setContador] = useState(0);
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");

    function Aumentar() {
        setContador(contador + 1)
    }
    
    function Diminuir() {
        if (contador > 0) {
            setContador (contador - 1)
        }
    }

    return (
        <ImageBackground source={{uri: 'https://i.pinimg.com/474x/86/79/0b/86790b415c08b83e3919eca4cbe60c63.jpg'}} style={{flex: 1}}>
        <View style={styles.container}>
                <Text style={styles.texto}>Contador: {contador}</Text>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.btn} onPress={Aumentar}>
                        <Text style={styles.txtbotao}> + </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={Diminuir}>
                        <Text style={styles.txtbotao}> - </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.viewInput}>
                    <TextInput style={styles.input} placeholder='Nome' value={nome} onChangeText={setNome}></TextInput>
                    <TextInput style={styles.input} placeholder='E-mail' value={email} onChangeText={setEmail}></TextInput>
                </View>
                <Text>Oi, {nome}! seu email é {email}</Text>
        </View>  
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent:'space-evenly'
    },

    texto: {
        color: '#BE5985',
        fontSize: 45,
        fontWeight: 'bold',
    },

    row: {
        width:'50%',
        flexDirection:'row',
        justifyContent:'space-around'
    },

    btn: {
        backgroundColor: '#BE5985',
        width: '40%',
        borderRadius: 10,
    },

    txtbotao: {
        textAlign: 'center',
        color: '#ffff'
    },

    input: {
        borderWidth: 1,
        borderColor: '#BE5985',
        borderRadius:10
    },

    viewInput: {
        width: '50%',
        height: '30%',
        justifyContent: 'space-around'
    }
})