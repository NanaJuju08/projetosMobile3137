import { createContext, useContext, useState } from "react";
import {db, Auth} from '../controller';
import { doc, setDoc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

const CarrinhoContext = createContext();

export function ProviderCart({children}) {

    const [carrinho, setCarrinho] = useState([]);

    function AdicionarProdutos(produto){
        setCarrinho((anterior) => [...anterior, produto]) 
    }

    return(
        <CarrinhoContext.Provider value= {{carrinho, AdicionarProdutos}}>
            {children}
        </CarrinhoContext.Provider> 
    )
}

export function useCarrinho() {
    return useContext(CarrinhoContext);
}