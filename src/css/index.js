import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
      flex:1,
     
    },
    txt:{
      marginTop:50,
      mnarginBottom:15,
      fontSize:25,
      fontWeight:'bold',
    },
    inpt:{
      backgroundColor:'#fff',
      borderWidth:1,
      borderColor:'#458',
      borderRadius:5,
      width:'100%',
      padding:10,
      fontSize:18,
    },
    areaBtn:{
        alignItems:'center',
        justifyContent:"space-around",
        flexDirection:'row',
        marginTop:15,

    },
    btn:{
        heigth:50,
        width:100,
        justifyContent:'center',
        alignItems:'center',
        padding:15,
        borderRadius:5,
        backgroundColor:'#159951'
    },
    btnLimpar:{
        heigth:50,
        width:100,
        justifyContent:'center',
        alignItems:'center',
        padding:15,
        borderRadius:5,
        backgroundColor:'rgb(200,50,50)'
    },
    txtBtn:{
        fontSize:20,
    },
    restArea:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    item:{
        fontSize:22,
    }
  })

  export default styles;