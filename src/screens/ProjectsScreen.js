import React from 'react';
import { Text, View, SafeAreaView, FlatList,StyleSheet, Image } from 'react-native';

function ProjectsScreen(props) {
    const projects=[
        {
            name:"Green Chutney",
            image:require("../../assets/projects/harichutney.png"),
            short_desc:"A simple Restaurant app very reactive and responsive ",
            skills:"#React #bootstrap5 #Redux Tool kit #json #firebase #axios ",
            link:""
        },
        {
            name:"Pizza Mania",
            image:require("../../assets/projects/pizza.png"),
            short_desc:"A Pizza cafe app very reactive and responsive view",
            skills:"#React #bootstrap5 #Redux Tool kit #json #firebase #axios ",
            link:""
        },
        {
            name:"District Bar Association bhopal",
            image:require("../../assets/projects/dba.png"),
            short_desc:"It is an app for bar association members",
            skills:"React Native Redux toolkit",
            link:""
        },
        {
            name:"Bank Recovery Status app",
            image:require("../../assets/projects/bankrecovery.png"),
            short_desc:"It is an app for recovery section in bank who regularly want to get notification of the status of filed cases",
            skills:"React Native Redux toolkit axios REST API",
            link:""
        },
        {
            name:"32 Diamonds Clinic",
            image:require("../../assets/projects/dentist.png"),
            short_desc:"It is an app for dentist and its client who want the appointments details ",
            skills:"React Native Redux Tollkit ",
            link:""
        },
        {
            name:"Cosmorugs",
            image:require("../../assets/projects/rugs.png"),
            short_desc:"It is an eccomerce web app for rugs company",
            skills:"React Native Redux toolkit",
            link:""
        },
        {
            name:"Showcase",
            image:require("../../assets/projects/bankrecovery.png"),
            short_desc:"It is an app for movies lover who want to get information about perticular movie",
            skills:"React Native Redux toolkit",
            link:""
        },
        
        {
            name:"Portfolio",
            image:require("../../assets/projects/bankrecovery.png"),
            short_desc:"This is a current portfolio that you are viewing",
            skills:"React Js Redux toolkit",
            link:""
        },

    ]  
    const content=({item})=>{
        let imgurl=item.image;
        return (
            <View style={{width:'90%',backgroundColor:"#282C34" ,marginHorizontal:'auto',marginVertical:15,boxShadow: '5px 5px 5px grey'}}>
            <Image source={imgurl} style={{marginBottom:5,width:'100%',height:'60vh'}}/>
            <Text style={styles.title} onPress={() => Linking.openURL(item.link)}>{item.name}</Text>
            <Text style={styles.desc}>{item.short_desc}</Text>
             <Text style={styles.published}>{item.skills}</Text>
            </View>
        )
    }
    const styles=StyleSheet.create({
        title:{
            fontSize:24,
            fontWeight:500,
            color:"#ffffff",
            marginVertical:5,
            padding:10

        },desc:{
            fontSize:18,
            color:"#ffffff",
            marginVertical:5,
            padding:10

        },
        published:{
            fontSize:18,
            color:"#61DAFB",
            marginVertical:5,
            padding:10


        }
    })
    return (
       <SafeAreaView style={{flex:1}}>
       <FlatList data={projects} renderItem={content}/>
       </SafeAreaView>
    );


}

export default ProjectsScreen;