import {Text, View, StyleSheet, ImageBackground, Image} from 'react-native';

export default function Home() {
    return (
        <View style={styles.container}>
            <ImageBackground source={{uri: 'https://i.pinimg.com/736x/b9/3e/9e/b93e9eed2c81ab577ec95abbf5161baa.jpg'}} style={{flex: 1}}>

                <View style={styles.textinho1}>
                    <Text style={styles.texto}>MINSUNG'S DOCERIA</Text>

                </View>

                <View style={styles.imagens}>
                <Image style={styles.img} source={{uri: 'https://i.pinimg.com/236x/02/10/f0/0210f0d02e0f6631106e7f60a848e500.jpg'}} />

                <Image style={styles.img} source={{uri: 'https://i.pinimg.com/236x/e1/26/8f/e1268f57e7e3695504e187892c6a0699.jpg'}} />
                </View>

                <View style={styles.textinho2}>
                    <Text style={styles.texto2}>Os melhores doces da região!!</Text>
                </View>
                <View style={styles.textinho3}>
                    <Text style={styles.texto3}>A Minsung's doceria é a melhor da cidade, com doces feitos com carinho e dedicação</Text>
                </View>

                <View style={styles.imagens}>
                <Image style={styles.img} source={{uri: 'https://i.pinimg.com/236x/2e/aa/2f/2eaa2f39ae6fd964c1a9bd0723934e6c.jpg'}} />

                <Image style={styles.img} source={{uri: 'https://i.pinimg.com/236x/02/75/49/027549e653c296b6b7ef881f8e0c023a.jpg'}} />
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
        color: '#E05388',
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
        color: '#E05388',
        fontSize: 25,
        fontWeight: 'bold'
    },

    textinho3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingStart:10
    },

    texto3: {
        color: '#E05388',
        fontSize: 20,
        fontWeight: 'bold'
    },

    credicts: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    creditos: {
        color: '#E05388',
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
        borderColor: '#E05388',
        borderWidth: 5,
        borderRadius: 10
    }
})