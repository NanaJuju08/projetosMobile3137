import { createContext, useContext, useState } from "react";

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