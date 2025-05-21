import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity, Button} from 'react-native';

export default function Card({nome, valor, imagem, comprar}) {
    return(
        <View style={styles.card}>
            <Image style={styles.imagens} source={{uri: imagem}} />

            <View style={styles.view}>
                    <Text style={styles.textoProdutos}>{nome}</Text>  
                    <Text style={styles.textoProdutos}>R${valor}</Text>  
                    <Button title='Comprar' onPress={comprar} color='#BE5985'/>
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
