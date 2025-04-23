import { useState } from 'react'
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';

export default function Produtos(){
    const [produtos, setProdutos] = useState([
        {id: 1, nome: 'CAMISETA', valor: 9.99, imagem: 'https://saoko.com.br/cdn/shop/files/hanJisung.png?v=1701790877&width=1445'},
        {id: 2, nome: 'MOLETOM', valor: 159.90, imagem: 'https://th.bing.com/th/id/OIP.7W3JmUjpY37V23c1OcDszQHaHa?rs=1&pid=ImgDetMain'},
        {id: 3, nome: 'TÊNIS', valor: 89.90, imagem: 'https://i.pinimg.com/originals/45/2c/a7/452ca7d12e1c21656ee374818b93ed5f.jpg'},
        {id: 4, nome: 'CALÇA', valor: 250.00, imagem: 'https://th.bing.com/th/id/OIP.7GCh1jnmP37Xj9y8tnnr4QHaLH?w=184&h=276&c=7&r=0&o=5&pid=1.7'}
    ])
    return(
        <View style={styles.container}>
{/*         ARRAYS COM MAP
        <Text style={styles.texto}> LISTA DE PRODUTOS </Text>
        {produtos.map((item) => (
            <Text style={styles.textoProdutos}>
            {item.id} - {item.nome} - R$ {item.valor}
            </Text>
        ))} */}
        <Text style={styles.texto}> LISTA DE PRODUTOS </Text>
        <FlatList
            data={produtos}
            renderItem={({item}) => (
                <View style={styles.card}>
                    <Image style={styles.imagens} source={{uri: 
                        item.imagem}}/>
                    <Text style={styles.textoProdutos}> {item.nome}</Text>  
                    <Text style={styles.textoProdutos}> R${item.valor}</Text>  
                </View>
            )}
            keyExtractor={item => item.id}
        />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    card: {
        padding: 10,
        margin: 10,
        backgroundColor: '#FFC6C6',
        borderRadius: 8,
        alignItems: 'center',
    },

    texto: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#BE5985',
    },

    textoProdutos: {
        fontSize: 20,
        color: '#BE5985',
        fontWeight: 'bold',
    },

    imagens: {
        width: 200,
        height: 200,
        borderRadius: 8,
    },

})