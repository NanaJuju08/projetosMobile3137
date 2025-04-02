import {Text, View, StyleSheet, ImageBackground, Image, Button, ScrollView} from 'react-native';

export default function Counter() {
    return (
        <View style={styles.container}>
            <ImageBackground source={{uri: 'https://i.pinimg.com/474x/86/79/0b/86790b415c08b83e3919eca4cbe60c63.jpg'}} style={{flex: 1}}>

                <View style={styles.texto}>
                    <Text>CONTADOR</Text>
                </View>
                <Text>Contador: </Text>
                <Button title='+' color={'#BE5985'}/>
                <Button title='-' color={'#A7D477'}/>
            </ImageBackground>
        </View>  
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1
    },

    texto: {
        color: '#BE5985',
        fontSize: 25,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    }
})