import { createContext, useContext, useEffect, useState } from "react";
import {db, auth} from '../controller'; 
import { doc, setDoc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

const CarrinhoContext = createContext();

export function ProviderCart({children}) {

    const [carrinho, setCarrinho] = useState([]);
    const [usuario, setUsuario] = useState(null);
    const [carregandoCarrinho, setCarregandoCarrinho] = useState(true);


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            setUsuario(user);
            setCarregandoCarrinho(true);

            if(user) {
                try {
                    const docRef = doc(db, 'carrinhos', user.uid);
                    const docSnap = await getDoc(docRef);

                    if(docSnap.exists()){
                        const dados = docSnap.data();
                        setCarrinho(Array.isArray(dados.produtos) ? dados.produtos : []);
                    }
                    else {
                        setCarrinho([]);
                    }
                }
                catch (error) {
                    console.log('Erro no carrinho', error);
                    setCarrinho([]);
                }
            } else {
                setCarrinho([]);
            }
            setCarregandoCarrinho(false);
        })
        return() => unsubscribe();
    }, []);

    useEffect(() => {
        async function salvaCarrinhoFirebase(lista) {
            if(!usuario || carregandoCarrinho) {
                return;
            }
            
            try {
                const docRef = doc(db, 'carrinhos', usuario.uid);
                await setDoc(docRef, {produtos:lista})
            }

            catch (error) {
                console.log('Erro ao salvar no firebase', error)
            }
        }

        salvaCarrinhoFirebase(carrinho);
    }, [carrinho, usuario, carregandoCarrinho]);

    function AdicionarProdutos(produto){
        setCarrinho((anterior) => Array.isArray(anterior) ? [...anterior, produto] : [produto]) 
    }

    function RemoverProdutos(index){
        const novaLista = []

        setCarrinho((estadoAnterior) => {
            for (let i = 0; i < estadoAnterior.length; i++)
            {
                if (i !== index){
                    novaLista.push(estadoAnterior[i])
                }
            }
            return novaLista;
        })
    }

    return(
        <CarrinhoContext.Provider value= {{carrinho, AdicionarProdutos, RemoverProdutos}}>
            {children}
        </CarrinhoContext.Provider> 
    )
}

export function useCarrinho() {
    return useContext(CarrinhoContext);
}