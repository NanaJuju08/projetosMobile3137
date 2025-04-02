import { setStatusBarBackgroundColor } from 'expo-status-bar';
import {Text, View, StyleSheet, ImageBackground, TextInput, Button} from 'react-native';

export default function Login({navigation}) {
    return (
        <View style={styles.container}>
            <ImageBackground source={{uri: 'https://i.pinimg.com/736x/de/49/07/de49078b778b376eca74314d7cf2780c.jpg'}} style={{flex: 1}}>

                <View style={styles.textinho9}>
                    <Text style={styles.texto9}>MINSUNG'S DOCERIA</Text>
                </View>
                
                <View style={styles.usuario}>
                    <TextInput style={styles.input} placeholder='Nome'>
                    </TextInput>
                </View>
                <View style={styles.usuario}>
                    <TextInput style={styles.input} placeholder='E-mail'>
                    </TextInput>
                </View>
                <View style={styles.btn}>
                    <Button title= "START" color='#EC7FA9' onPress={() => navigation.navigate("Home")}/>
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