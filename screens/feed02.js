import {Text, View, StyleSheet, ImageBackground, Image, Button, ScrollView} from 'react-native';

export default function Feed2() {
    return (
        <View style={styles.container}>
            <ImageBackground source={{uri: 'https://i.pinimg.com/736x/80/03/53/80035316309cd25e7a7d26c0ca3532e4.jpg'}} style={{flex: 1}}>

                <View style={styles.texto}>
                    <Text style={styles.texto}>LEE KNOW</Text>

                </View>
                <View style={styles.imagens}>
                <Image style={styles.img} source={{uri: 'https://i.pinimg.com/474x/56/f8/19/56f819ff776f3f6af344cf2e7d397569.jpg'}} />

                <Image style={styles.img} source={{uri: 'https://i.pinimg.com/474x/f9/23/1e/f9231e07a892657cf5d0d3a2450413c3.jpg'}} />
                </View>

                <View style={styles.imagens}>
                <Image style={styles.img} source={{uri: 'https://i.pinimg.com/474x/dc/05/fa/dc05fab3a53b89eb484f223b8eac3644.jpg'}} />

                <Image style={styles.img} source={{uri: 'https://i.pinimg.com/736x/d8/0a/61/d80a619c01db00779f1c811262ae18e2.jpg'}} />
                </View>

                <View style={styles.imagens}>
                <Image style={styles.img} source={{uri: 'https://i.pinimg.com/474x/6a/e1/58/6ae158ae7b5aaeaa61e2f9848f81e80e.jpg'}} />

                <Image style={styles.img} source={{uri: 'https://i.pinimg.com/736x/ad/b2/98/adb298a6bf0bd42efb78e59d0abb9310.jpg'}} />
                </View>
                <View style={styles.btn}>
                    <Button title= "SAIBA MAIS" color='#EC7FA9'/>
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