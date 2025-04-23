import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

export default function Card({nome, valor, imagem}) {
    const [quantidade, setQuantidade] = useState(0);
    const [valorQuatidade, setValorQuantidade] = useState(0);

    function Aumentar(){
        setQuantidade(quantidade + 1);
    };

    function Diminuir(){
        if (quantidade > 0) {
            setQuantidade(quantidade - 1);
        }
    };

    return(
        <View style={styles.card}>
            <Image style={styles.imagens} source={{uri: imagem}} />

            <View style={styles.view}>
                <Text style={styles.textoProdutos}>{nome}</Text>  
                <Text style={styles.textoProdutos}>R${valor}</Text>  

                <View style={styles.contador}>
                    <TouchableOpacity onPress={Diminuir} style={styles.botao}>
                        <Text style={styles.textoBotao}>-</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={Aumentar} style={styles.botao}>
                        <Text style={styles.textoBotao}>+</Text>
                    </TouchableOpacity>
                </View>
                    <Text style={styles.textoProdutos}> Carrinho: {quantidade} </Text>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
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

    contador: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },

    botao: {
        backgroundColor: '#BE5985',
        padding: 10,
        borderRadius: 5,
        marginHorizontal: 10,
    },

    textoBotao: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },

    quantidade: {
        fontSize: 20,
        color: '#BE5985',
        fontWeight: 'bold',
    }
});
