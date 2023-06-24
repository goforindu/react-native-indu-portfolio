import React from 'react';
import { Text, View, StyleSheet,FlatList,SafeAreaView ,Image} from 'react-native';

function SkillsScreen(props) {
    const skills=[{pro:[
        {
            name:"HTML5",
            iconsrc:require("../../assets/skills/html5.png"),
            },
            {
                name:"CSS3",
                iconsrc:require("../../assets/skills/css3.png")
            },
                {
                    name:"Javascript",
                    iconsrc:require("../../assets/skills/js.png")
                    },
                    {
                        name:"React",
                        iconsrc:require("../../assets/skills/react.png")
                        },
                        {
                            name:"React Native",
                            iconsrc:require("../../assets/skills/react_native.png")
                            },
                            {
                                name:"Redux Tool Kit",
                                iconsrc:require("../../assets/skills/redux.png")
                                },
                                {
                                    name:"json",
                                    iconsrc:require("../../assets/skills/json.png")
                                    },
                                    {
                                        name:"Rest API",
                                        iconsrc:require("../../assets/skills/rest_api.png")
                                        },
                                        {
                                            name:"Bootstrap",
                                            iconsrc:require("../../assets/skills/bootstrap.png")
                                            }

    ]},{begi:[{
        name:"Nodejs",
        iconsrc:require("../../assets/skills/node.png"),
        },
        {
            name:"Mongodb",
            iconsrc:require("../../assets/skills/mongodb.png")
        },
            {
                name:"firebase",
                iconsrc:require("../../assets/skills/firebase.png")
                },
                {
                    name:"Git",
                    iconsrc:require("../../assets/skills/git.png")
                    },
                    {
                        name:"Sass",
                        iconsrc:require("../../assets/skills/sass.png")
                        }]}
        
                               
    ]
    const content=({item})=>{
        let imgurl=item.iconsrc;
        return (
           <View style={{padding:15, justifyContent:'center', alignItems:'center'}}>
            <Image source={imgurl} style={{marginBottom:5,width:80,height:80}}/>
            <Text style={styles.title} onPress={() => Linking.openURL(item.link)}>{item.name}</Text>
           </View>
        )
    }
    const styles=StyleSheet.create({
        title:{
            fontSize:18,
            fontWeight:500,
            color:"#61DAFB",
            marginVertical:5,
           

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
       <SafeAreaView >
        
         <View style={{flex:1,minWidth:'95%',backgroundColor:"#282C34" ,marginHorizontal:'auto',marginVertical:15,padding:20, boxShadow: '5px 5px 5px grey', width:'40%'}}>
         <Text style={{padding:20,textAlign:'center',fontWeight:'500',fontSize:26, color:"#ffffff"}}>Pro Level Skills</Text>
         <FlatList data={skills[0].pro} renderItem={content} numColumns={3} showsVerticalScrollIndicator={false}/>
       </View>
       <View style={{flex:1,width:'90%',backgroundColor:"#282C34" ,marginHorizontal:'auto',marginVertical:15,padding:20, boxShadow: '5px 5px 5px grey'}}>
       <Text style={{padding:20,textAlign:'center',fontWeight:'500',fontSize:26, color:"#ffffff"}}>Beginners Level skills</Text>
       <FlatList data={skills[1].begi} renderItem={content} numColumns={3}/>
       </View>
       </SafeAreaView>
    );


}

export default SkillsScreen;