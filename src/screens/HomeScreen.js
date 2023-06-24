import React from 'react';
import { Text, View,Image, ImageBackground, Dimensions,StyleSheet, SafeAreaView,TouchableOpacity } from 'react-native';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
function HomeScreen(props) {
   const  profile={
    name:"Indu Kushwaha",
    heading:"Hello, My name is Indu Kushwaha.",
    subtitle:"I am a front end developer working as freelancer based in India. I have 13 years of experience in this beautiful world of web development. I am very flexible in adapting new technologies and get command over it very easily. Web development is my passion."
   }
  
  
const BackgroundImg = () => {
  return (
    <View style={{flex:1}}>
      <ImageBackground
        source={{
          uri:require('../../assets/bg.png'),
        }}
        resizeMode="cover"
        style={styles.img}>
        <Text style={{textAlign:'center', marginBottom:30, fontSize:42, fontWeight:500, color:'#ffffff'}} >{profile.name}</Text>
      </ImageBackground>
    </View>
  );
};
    return (
        
       <SafeAreaView style={{flexDirection:'column',padding:30,backgroundColor:'#282C34', width:'100%', marginHorizontal:'auto', paddingBottom:50}}>
        
        <Text style={{textAlign:'center', marginBottom:30, fontSize:32, fontWeight:500, color:'#61DAFB'}} >{profile.heading}</Text>
        <Image source={require('../../assets/profile_pic.jpg')} style={{marginBottom:30,width:200,height:200, marginHorizontal:'auto',boxShadow: '5px 5px 5px  black'}}/>
        <Text style={{textAlign:'center', fontSize:18, fontWeight:500,color:'#ffffff'}}>{profile.subtitle}  </Text>
      
        <TouchableOpacity><View style={styles.loginBtn}><Text style={styles.loginBtnTxt}>Hire Me</Text></View></TouchableOpacity>
        
        <TouchableOpacity><View style={styles.loginBtn}><Text style={styles.loginBtnTxt}>Download Resume</Text></View></TouchableOpacity>
       
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    img: {
      height: '100%',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
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
      boxShadow: '0px 5px 5px black'
     
  },
  loginBtnTxt:{
      color:"#000000",
      textAlign:'center',
      fontWeight:500
  },
  });

export default HomeScreen;