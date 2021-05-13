//Aluna: LAURA ALVES LEMOS - 6° INFO
//Aluna: LAURA ALVES LEMOS - 6° INFO
//Aluna: LAURA ALVES LEMOS - 6° INFO
//Aluna: LAURA ALVES LEMOS - 6° INFO

import * as React from 'react';
import { TouchableOpacity, TextInput, View, ScrollView, StatusBar} from 'react-native';
import {RadioButton, Text} from 'react-native-paper';

import MeuEstilo from './src/componentes/meuestilo'

export default class App extends React.Component{
  state={
    valor1: 0.0,
    valor2: 0.0,
    resultado: 0.0,
    valorRadio: 'soma',
    
  }
  calcular(){
    if(this.state.valorRadio=='soma'){
      alert(this.state.valorRadio= parseFloat(this.state.valor1) + parseFloat(this.state.valor2));
    }
    if(this.state.valorRadio=='subtrair'){
      alert(this.state.valorRadio= parseFloat(this.state.valor1) - parseFloat(this.state.valor2));
    }
    if(this.state.valorRadio=='multiplicar'){
      alert(this.state.valorRadio= parseFloat(this.state.valor1) * parseFloat(this.state.valor2));
    }
    if(this.state.valorRadio=='dividir'){
      alert(this.state.valorRadio= parseFloat(this.state.valor1) / parseFloat(this.state.valor2));
    }
  }
  atualizaValor1=(number)=>{
    this.setState({valor1:number})
  }
  atualizaValor2=(number)=>{
    this.setState({valor2:number})
  
}

  render(){     
    return(

      <View style = {MeuEstilo.container}>

        <StatusBar backgroundColor="black"/>  
        <TextInput style = {MeuEstilo.input}
        underlineColorAndroid = "transparent" 
        placeholder = " Digite o valor 1 "
        placeholderTextColor = "black"
        autoCapitalize = "none"
        onChangeText = {this.atualizaValor1}
        keyboardType ='numeric'/>

        <TextInput style = {MeuEstilo.input}
        underlineColorAndroid = "transparent" 
        placeholder = " Digite o valor 2 "
        placeholderTextColor = "black"
        autoCapitalize = "none"
        onChangeText = {this.atualizaValor2}
        keyboardType ='numeric'/>

<ScrollView style = {{padding:23}}>
        <Text>                                                                                                                        Radio Button utilizando classe Expo</Text>
        <RadioButton.Group
        onValueChange = {valorRadio => this.setState({valorRadio})}
        value = {this.state.valorRadio}>
          <View>
            <Text>SOMA</Text> 
            <RadioButton value='soma'/>
          </View>
          <View>
            <Text>SUBTRAÇÃO</Text>
            <RadioButton value='subtrair'/>
          </View>
          <View>
            <Text>MULTIPLICAÇÃO</Text>
            <RadioButton value='multiplicar'/>
          </View>
          <View>
            <Text>DIVISÃO</Text>
            <RadioButton value='dividir'/>
          </View>
        </RadioButton.Group>

        <TouchableOpacity style = {MeuEstilo.botao} 
      onPress={()=>this.calcular(this.state.valorRadio)} 
      >
        
       <Text style = {MeuEstilo.textoBotao}> CALCULAR</Text>
       
      </TouchableOpacity>
      </ScrollView>
      </View>
      
    )
  }
} 