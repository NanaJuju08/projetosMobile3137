import { useState, useEffect } from 'react'
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import Card from '../components/cards';
import { db } from '../controller';
import { collection, getDocs } from 'firebase/firestore';
import { useCarrinho } from '../components/providerCart';

export default function Produtos({navigation}){
    const [produtos, setProdutos] = useState([]);
    const {AdicionarProdutos} = useCarrinho();

    useEffect(() => {
        async function carregarProdutos() {
            try{
                const querySnapshot = await getDocs(collection(db, 'produtos'));
                const lista = [];
                querySnapshot.forEach((doc) => {
                    lista.push({id: doc.id, ...doc.data() });
                });
                setProdutos(lista);
            } catch(error) {
                console.log("Erro ao buscar produtos", error);
            }
        }

        carregarProdutos(); 
    }, []);
    
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
            comprar={() => {
                AdicionarProdutos(item);
                navigation.navigate('Carrinho');
            }}
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