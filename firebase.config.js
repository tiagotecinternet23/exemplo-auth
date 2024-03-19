import { initializeApp } from "firebase/app";

// Importando recursos da biblioteca de Autenticação
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyCtIrAt-PQ6Ci9uSuE6s-6TsAALDZZfLcU",
  authDomain: "exemplo-auth-4f6be.firebaseapp.com",
  projectId: "exemplo-auth-4f6be",
  storageBucket: "exemplo-auth-4f6be.appspot.com",
  messagingSenderId: "129286353270",
  appId: "1:129286353270:web:c38078aedff7989a1f8a57",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Configurando o recurso de autenticação para uso em outras partes
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
