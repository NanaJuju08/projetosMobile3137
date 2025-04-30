import { useState } from 'react'
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import Card from '../components/cards';

export default function Produtos(){
    const [produtos, setProdutos] = useState([
        {id: 1, nome: 'CAMISETA', valor: 9.99, imagem: 'https://saoko.com.br/cdn/shop/files/hanJisung.png?v=1701790877&width=1445'},
        {id: 2, nome: 'MOLETOM', valor: 159.94, imagem: 'https://th.bing.com/th/id/OIP.7W3JmUjpY37V23c1OcDszQHaHa?rs=1&pid=ImgDetMain'},
        {id: 3, nome: 'TÊNIS', valor: 89.98, imagem: 'https://i.pinimg.com/originals/45/2c/a7/452ca7d12e1c21656ee374818b93ed5f.jpg'},
        {id: 4, nome: 'CALÇA', valor: 250.35, imagem: 'https://th.bing.com/th/id/OIP.7GCh1jnmP37Xj9y8tnnr4QHaLH?w=184&h=276&c=7&r=0&o=5&pid=1.7'},
        {id: 5, nome: 'MEIAS', valor: 20.65, imagem: 'https://pickles-home.com/data/1-17.jpg'}
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
            <Card
            nome={item.nome}
            valor={item.valor}
            imagem={item.imagem}
            />
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

    texto: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#BE5985',
    },
})