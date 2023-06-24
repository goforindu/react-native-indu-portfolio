import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View, Linking } from 'react-native';

function BlogScreen(props) {
    const blogs=[
        {
            title:"What is React.js ?",
            desc:"React is a javascript library for building user interfaces.",
            published:"Published on Sep 7, 2022",
            link:"https://medium.com/@goforindu/what-is-react-js-cbda7aaa5082",
            image:""
        },
        {
            title:"How to create React App?",
            desc:"You can create react app using tool NodeJS and VSCode editor. Some basic knowledge of html,css and javascript is needed for react…",
            published:"Published on Sep 8, 2022",
            link:"https://medium.com/@goforindu/how-to-create-react-app-7cab285e2359",
            image:""
        },
        {
            title:"What is React.js ?",
            desc:"React is a javascript library for building user interfaces.",
            published:"Published on Sep 7, 2022",
            link:"https://medium.com/@goforindu/what-is-react-js-cbda7aaa5082",
            image:""
        },
        {
            title:"What is React.js ?",
            desc:"React is a javascript library for building user interfaces.",
            published:"Published on Sep 7, 2022",
            link:"https://medium.com/@goforindu/what-is-react-js-cbda7aaa5082",
            image:""
        },
        {
            title:"What is React.js ?",
            desc:"React is a javascript library for building user interfaces.",
            published:"Published on Sep 7, 2022",
            link:"https://medium.com/@goforindu/what-is-react-js-cbda7aaa5082",
            image:""
        },
        {
            title:"What is React.js ?",
            desc:"React is a javascript library for building user interfaces.",
            published:"Published on Sep 7, 2022",
            link:"https://medium.com/@goforindu/what-is-react-js-cbda7aaa5082",
            image:""
        },
        {
            title:"What is React.js ?",
            desc:"React is a javascript library for building user interfaces.",
            published:"Published on Sep 7, 2022",
            link:"https://medium.com/@goforindu/what-is-react-js-cbda7aaa5082",
            image:""
        },
        {
            title:"What is React.js ?",
            desc:"React is a javascript library for building user interfaces.",
            published:"Published on Sep 7, 2022",
            link:"https://medium.com/@goforindu/what-is-react-js-cbda7aaa5082",
            image:""
        },
        {
            title:"What is React.js ?",
            desc:"React is a javascript library for building user interfaces.",
            published:"Published on Sep 7, 2022",
            link:"https://medium.com/@goforindu/what-is-react-js-cbda7aaa5082",
            image:""
        },
        {
            title:"What is React.js ?",
            desc:"React is a javascript library for building user interfaces.",
            published:"Published on Sep 7, 2022",
            link:"https://medium.com/@goforindu/what-is-react-js-cbda7aaa5082",
            image:""
        },
        
    ]
    const content=({item})=>{
        return (
            <View style={{width:'90%',backgroundColor:"#282C34" ,padding:30,marginHorizontal:'auto',marginVertical:15,boxShadow: '5px 5px 5px grey'}}>
        <Text style={styles.title} onPress={() => Linking.openURL(item.link)}>{item.title}</Text>
        <Text style={styles.desc}>{item.desc}</Text>
        <Text style={styles.published}>{item.published}</Text>
       </View>
        )
    }
    const styles=StyleSheet.create({
        title:{
            fontSize:24,
            fontWeight:500,
            color:"#61DAFB",
            marginVertical:5

        },desc:{
            fontSize:18,
            color:"#ffffff",
            marginVertical:5
        },
        published:{
            fontSize:18,
            color:"#5A5D63",
            marginVertical:5

        }
    })
    return (
       <SafeAreaView style={{flex:1}}>
       <FlatList data={blogs} renderItem={content}/>
       </SafeAreaView>
    );
}

export default BlogScreen;