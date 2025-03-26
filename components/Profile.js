import {Text, View, StyleSheet, Image} from 'react-native'; //Todo nome de componente tem que ser com letra maiúscula

export function Profile() {
    return(
        <View style={styles.profile}>
            <Text>Oi gente, esse é meu perfil!</Text>
            <Text>HAN JISUNG MEU MARIDO!</Text>
            <Image style={styles.img} source={{uri: 'https://i.pinimg.com/originals/f8/6b/64/f86b64465f788daaedde497e10142263.gif'}} />
        </View>
    );
}

export function Favorites() {
    return(
        <View style={styles.favorites}>
            <Text>Oi gente, esse é meu favoritos!</Text>
            <Text>BAKUGOU É O MAIORAL!!!</Text>
        </View>
    );
}

export default function Gallery() {
    return (
        <View style={styles.container}>
            <Text>Meus componentes</Text>
            <Profile/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{                                                                                                                                                                             
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#Add8e6',
    },

    profile: {
        flex:3,
        backgroundColor: '#EA1'
    },

    favorites: {
        flex:1,
        backgroundColor: '#A12',
        justifyContent: 'center'
    },

    img: {
        width: 200,
        height: 200,
        marginTop: 10,
    }
})
