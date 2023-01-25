import React,{ useState, useRef } from 'react';
import { View , Text , TouchableOpacity,TextInput,SafeAreaView, Keyboard} from 'react-native';
import styles from './src/css';
import api from './src/services/api';

export default function App(){
  const [cep, setCep] = useState('');
  const [cepUser, setCepUser] = useState(null);
  const inputRef = useRef(null);

  async function buscar(){
    if(cep == ''){
      alert('Digite um cep valido');
      setCep('');
      return; //
    }

    try{
      const response = await api.get(`/${cep}/json`);
      console.log(response.data);
      setCepUser(response.data);
      Keyboard.dismiss(); //Garantir que o teclado sera fechado!

    }catch(error){
      console.log('ERROR: ' + error);
    }


  }

  
  

  function limpar(){
    setCep('');
    inputRef.current.focus;
    setCepUser(null);
  }
  

  return(
    <SafeAreaView style={styles.container}>
      <View style={{alignItems:'center'}}>
        <Text style={styles.txt}>Insira o cep a ser consultado</Text>
        <TextInput
          style={styles.inpt}
          placeholder='CEP: 00.000-00'
          value={cep}
          onChange={ (texto)=> setCep(texto)  }
          keyboardType='numeric'
        />
      </View>
      <View style={styles.areaBtn}>
        <TouchableOpacity style={styles.btn} onPress={buscar}>
          <Text style={styles.txtBtn}>
            Buscar
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnLimpar} onPress={limpar}>
          <Text style={styles.txtBtn}>
            Limpar
          </Text>
        </TouchableOpacity>
      </View>

      {cepUser &&
      <View style={styles.restArea}>
         <Text style={styles.item}>CEP: {cepUser.cep}</Text>
          <Text style={styles.item}>Logradouro: {cepUser.logradouro}</Text>
          <Text style={styles.item}>Bairro: {cepUser.bairro}</Text>
          <Text style={styles.item}>Cidade: {cepUser.localidade}</Text>
          <Text style={styles.item}>Estado: {cepUser.uf}</Text>

    </View>}
      
    </SafeAreaView>
  )
}

