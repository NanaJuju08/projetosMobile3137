import {Text, View, StyleSheet, ImageBackground, Image, Button, ScrollView} from 'react-native';

export default function Feed() {
    return (
        <View style={styles.container}>
            <ImageBackground source={{uri: 'https://i.pinimg.com/474x/86/79/0b/86790b415c08b83e3919eca4cbe60c63.jpg'}} style={{flex: 1}}>

                <View style={styles.texto}>
                    <Text style={styles.texto}>HAN JISUNG</Text>

                </View>
                <View style={styles.imagens}>
                <Image style={styles.img} source={{uri: 'https://i.pinimg.com/736x/24/94/28/2494282d918d0fc39b005d0152bfcd4a.jpg'}} />

                <Image style={styles.img} source={{uri: 'https://i.pinimg.com/474x/ce/8d/c0/ce8dc004d88f7b81e88498d894db9d90.jpg'}} />
                </View>

                <View style={styles.imagens}>
                <Image style={styles.img} source={{uri: 'https://i.pinimg.com/736x/09/6f/ab/096fab9c89bfa6454042380540d81bd6.jpg'}} />

                <Image style={styles.img} source={{uri: 'https://i.pinimg.com/474x/87/ed/16/87ed1665d1b35e7405272b853a4becd1.jpg'}} />
                </View>

                <View style={styles.imagens}>
                <Image style={styles.img} source={{uri: 'https://i.pinimg.com/736x/c5/d0/12/c5d0123674dcabb37e7dcbef789228be.jpg'}} />

                <Image style={styles.img} source={{uri: 'https://i.pinimg.com/474x/0a/0a/f5/0a0af52c81d570fd042a856ceea65f25.jpg'}} />
                </View>
                <View style={styles.btn}>
                    <Button title= "SAIBA MAIS" color='#EC7FA9' onPress={() => navigation.navigate("Home")}/>
                </View>
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
    },

    imagens: {
        flex:2,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 10
    },

    img: {
        width: 180,
        height: 180,
        borderColor: '#EC7FA9',
        borderWidth: 5,
        borderRadius: 10
    },

    btn: {
        justifyContent: 'center',
        margin: 30
    }
})