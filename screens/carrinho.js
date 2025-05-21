import {Text, View, StyleSheet, ImageBackground, Image, FlatList} from 'react-native';
import { useCarrinho } from '../components/providerCart';

export default function Carrinho({navigation}){
    const {carrinho} = useCarrinho();
    return(
        <View style={styles.container}>
            <Text style={styles.texto}>Carrinho</Text>
            <FlatList 
            data={carrinho}
            renderItem={({item}) => (
                <View style={styles.card}>
                    <Image style={styles.imagens} source={{uri: item.imagem}} />
                    <View style={styles.view}>
                        <Text style={styles.textoProdutos}>{item.nome}</Text>  
                        <Text style={styles.textoProdutos}>R{item.valor}</Text>  
                    </View>
                </View>
            )}
            />
            

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    texto: {
        color: '#BE5985',
        fontSize: 35,
        fontWeight: 'bold'
    },

    card: {
        padding: 10,
        margin: 10,
        backgroundColor: '#FFC6C6',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },

    view: {
        justifyContent: 'center',
        flexDirection: 'column',
        padding: 20
    },

    textoProdutos: {
        fontSize: 20,
        color: '#BE5985',
        fontWeight: 'bold',
    },

    imagens: {
        width: 170,
        height: 170,
        borderRadius: 8,
        borderWidth: 5,
        borderColor: '#BE5985',
    },
});