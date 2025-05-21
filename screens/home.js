import {Text, View, StyleSheet, ImageBackground, Image} from 'react-native';

export default function Home() {
    return (
        <View style={styles.container}>
            <ImageBackground source={{uri: 'https://i.pinimg.com/736x/b9/3e/9e/b93e9eed2c81ab577ec95abbf5161baa.jpg'}} style={{flex: 1}}>

                <View style={styles.textinho1}>
                    <Text style={styles.texto}>MINSUNG'S STORE</Text>
                </View>

                <View style={styles.imagens}>
                <Image style={styles.img} source={{uri: 'https://i.pinimg.com/736x/1d/6f/8e/1d6f8e10c7ba976f3472314ac36d4e0d.jpg'}} />

                <Image style={styles.img} source={{uri: 'https://i.pinimg.com/736x/60/6d/b9/606db97d2d762b5c5a079c02b8cff76e.jpg'}} />
                </View>

                <View style={styles.textinho2}>
                    <Text style={styles.texto2}>As melhores roupas da região!!</Text>
                </View>
                <View style={styles.textinho3}>
                    <Text style={styles.texto3}>A Minsung's store é a melhor da cidade, com roupas personalizadas com carinho!!</Text>
                </View>

                <View style={styles.imagens}>
                <Image style={styles.img} source={{uri: 'https://i.pinimg.com/736x/ef/68/69/ef6869bb32083642512eca78fff6079c.jpg'}} />

                <Image style={styles.img} source={{uri: 'https://i.pinimg.com/736x/6a/a5/57/6aa557c0d066ee7383c93e77bc89cd4e.jpg'}} />
                </View>

                <View style={styles.credicts}> 
                    <Text style={styles.creditos}>Confeiteira Mariane Melo</Text>
                </View>
            </ImageBackground>
        </View>  
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    
    textinho1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingStart: 10,
        marginTop: 20
    },

    texto: {
        color: '#BE5985',
        fontSize: 35,
        fontWeight: 'bold'
    },

    textinho2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },

    texto2: {
        color: '#BE5985',
        fontSize: 25,
        fontWeight: 'bold'
    },

    textinho3: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        paddingStart:10
    },

    texto3: {
        color: '#BE5985',
        fontSize: 20,
        fontWeight: 'bold'
    },

    credicts: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    creditos: {
        color: '#BE5985',
        fontSize: 25,
        fontWeight: 'bold'
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
    }
})