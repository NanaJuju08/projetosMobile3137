import {Text, View, StyleSheet, ImageBackground, Image} from 'react-native';

export default function Teste() {
    return (
        <View style={styles.container}>
            <ImageBackground source={{uri: 'https://i.pinimg.com/736x/cf/62/9b/cf629b2ca4bebffb0e021f189acd98d0.jpg'}} style={{flex: 1}}>

                <View style={styles.textinho1}>
                    <Text style={styles.texto}>MEUS MARIDOS!</Text>
                </View>

                <View style={styles.imagens}>
                <Image style={styles.img} source={{uri: 'https://media.tenor.com/QvV6xbgkBbQAAAAM/straykids-skz.gif'}} />

                <Image style={styles.img} source={{uri: 'https://im.ziffdavisinternational.com/ign_br/screenshot/default/spidey_mhhr.gif'}} />
                </View>

                <View style={styles.textinho2}>
                    <Text style={styles.texto2}>STRAY KIDS, UH!</Text>
                </View>

                <View style={styles.imagens}>
                <Image style={styles.img} source={{uri: 'https://i.pinimg.com/originals/f8/6b/64/f86b64465f788daaedde497e10142263.gif'}} />

                <Image style={styles.img} source={{uri: 'https://www.gifcen.com/wp-content/uploads/2023/09/bakugou-gif-6.gif'}} />
                </View>

                <View style={styles.credicts}> 
                    <Text style={styles.creditos}>CRÉDITOS</Text>
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
        alignItems: 'flex-start',
        paddingStart: 10,
        marginTop: 10,
    },

    texto: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingStart: 10,
        marginTop: 60,
        color: '#E05388',
        fontSize: 30,
        fontWeight: 'bold'
    },

    textinho2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingEnd: 10,
    },

    texto2: {
        color: '#E05388',
        fontSize: 30,
        fontWeight: 'bold'
    },

    credicts: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    creditos: {
        color: '#E05388',
        fontSize: 30,
        fontWeight: 'bold'
    },

    imagens: {
        flex:1,
        padding: 50,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 10,
    },

    img: {
        width: 160,
        height: 160,
        borderColor: '#E05388',
        borderWidth: 10
    }
})