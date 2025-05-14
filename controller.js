
import { initializeApp } from "firebase/app"; //Iniciando o fibase dentro do aplicativo (npm instal - visão geral do projeto, tem todas as informações do pojeto (npm install firebase))

import { getAuth } from "firebase/auth"; //O getAuth é o que controla o authentication, então, a gente importa o Auth para usarmos no nosso projeto (essas informações do getAuth tá na documentação do firebase);

import { getFirestore } from "firebase/firestore";

//Chaves de configurações confidenciais necessárias para o projeto funcionar;
const firebaseConfig = {
  apiKey: "AIzaSyAML5aFAqu0XyP6w_EGjNHg4Vndu-A5oBM",
  authDomain: "aulasm25.firebaseapp.com",
  projectId: "aulasm25",
  storageBucket: "aulasm25.firebasestorage.app",
  messagingSenderId: "583827209336",
  appId: "1:583827209336:web:c23b8a4a233fa5c4ac018d"
};

//Inicia as ações do firebase;
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app); //Constante do auth para usar nos outros arquivos, por isso o nome "export const auth", ou seja, uma constante exportável;

export const db = getFirestore(app);