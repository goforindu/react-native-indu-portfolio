import React from 'react';
import { Text, View, ImageBackground, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

function ContactScreen(props) {
    return (
        <View style={{flex:1}}>
                 <View style={styles.loginContainer}>
                <Text style={{textAlign:'center',fontWeight:'500',fontSize:26, color:"#ffffff"}}>Contacts</Text>
                    <View style={{marginVertical:20}}>
                    <Text style={styles.inputlabel}>Name</Text>
                    <TextInput style={styles.input} placeholder='user@example.com'/>
                    </View>
                    <View>
                    <Text style={styles.inputlabel}>Email</Text>
                    <TextInput style={styles.input}  value="abcdefghijkl" textContentType='email'/>
                    </View>
                    <View>
                    <Text style={styles.inputlabel}>Message</Text>
                    <TextInput style={styles.input}  value="abcdefghijkl" multiline = {true} numberOfLines = {4}/>
                    </View>
                    <TouchableOpacity><View style={styles.loginBtn}><Text style={styles.loginBtnTxt}>Send Message</Text></View></TouchableOpacity>
                   
            </View>
        
      </View>
    );
}
const styles = StyleSheet.create({
    img: {
      height: '100%',
      width: '100%',
      justifyContent:'center',
      alignItems: 'center',
      opacity:0.9
     
    },
    loginContainer:{
       
      marginTop:40,
      width:'90%',
      padding:30,
      marginHorizontal:'auto',
      backgroundColor:'#282C34',
      
  },
  input:{
      borderColor:'#61DAFB',
      padding:10,
      borderRadius:5,
      borderWidth:2,
      color:"#ffffff"
      
  },
  inputlabel:{
      fontSize:16,
      color:'#777777',
      marginHorizontal:5
  },
  loginBtn:{
      backgroundColor:'#61DAFB',
      borderColor:'#61DAFB',
      padding:10,
      borderRadius:5,
      borderWidth:2,
      marginTop:20,
      width:"50%",
      marginHorizontal:"auto",
     
  },
  loginBtnTxt:{
      color:"#000000",
      textAlign:'center',
      fontWeight:500
  },
   
  });
export default ContactScreen;