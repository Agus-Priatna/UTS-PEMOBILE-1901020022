import React from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 
import { EvilIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import Lightbox from 'react-native-lightbox-v2';
export default function App() {
  

    return (
      <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
       {data.map(val => {
         return(<View style={styles.wrapper}>
          <View style={styles.hederWrapper}>
            <View style={styles.iconWrapper}>
              <View style={styles.logoWrapper}>
               <View style={styles.logoContainer}>
                  <Text>A</Text>
              </View>
            </View>
              <Text style={styles.usernameText}>Marvel</Text>
            </View>
            <View>
            <Entypo name="dots-three-vertical" size={22} color="black" />
            </View>
          </View>
          <Lightbox>
          <View style={styles.box}>
          <Image
        style={styles.tinyLogo}
        source={{
          uri: val.url,
        }}
      />
        </View>
        </Lightbox>
        <View>
          <View style={styles.iconRow}>
          <EvilIcons name="comment" size={24} color="black" />
          <EvilIcons name="retweet" size={24} color="black" />
          <EvilIcons name="heart" size={24} color="black" />
          <EvilIcons name="share-google" size={24} color="black" />
          </View>
        </View>
          </View>)
       })}
      </ScrollView>
      
          <TouchableOpacity 
          style={styles.TouchableOpacity}
          >
            
            <Image
            style={styles.floatingButton}
            source={{uri: 'https://is2-ssl.mzstatic.com/image/thumb/Purple128/v4/79/fd/aa/79fdaaaa-4b93-4d66-89e9-3d8b721fff16/source/512x512bb.jpg'}} />
          </TouchableOpacity>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    paddingTop: 20,
  },
  wrapper:{
    marginTop: 10
  },
  scroll:{
    height: 150,
    backgroundColor: '#000',
  },
  box:{
    width: '100%',
    height: 300,
    backgroundColor: '#C2C',
    marginTop: 10,
    marginLeft: 60,
    marginRight: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    
    
    
  },
  touch:{
    backgroundColor: '#F54',
    marginTop: 10,
    alignItems: 'center',
    paddingVertical: 5,
    borderRadius: 10
  },
  tinyLogo:{
    width: '100%',
    height: '100%',
    
  },
  text: {
    fontSize: 30
  },
  iconWrapper:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  logoContainer:{
    backgroundColor: '#C2C2C2',
    paddingHorizontal: 12,
    paddingVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100
    
  },
  logoWrapper: {
    borderRadius: 100,
    borderWidth: 2,
    borderColor: 'red',
    padding: 2
  },
  hederWrapper:{
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  usernameText:{
    fontWeight: 'bold',
    marginLeft: 5,
    fontSize: 16
  },
  iconRow:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 60,
    marginRight: 10,
    marginTop: 10
  },
  TouchableOpacity:{
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 10,
    bottom: 70

  },
  floatingButton:{
    resizeMode: 'contain',
    width: 50,
    height: 50,
    borderRadius: 100,
   
  },
  
  iconRowUpper:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
});

const data=[
  {
    
    url: "https://geekculture.co/wp-content/uploads/2020/10/moon-knight-feature-image.jpg",
  },
  {
   
    url: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/07/Daredevil-Costume-feature.jpg",
  },
  {
    
    url: "https://i.pinimg.com/originals/25/3c/b4/253cb4fef1c8798518840c66aeeedc7b.jpg",
  },
  {
        url: "https://i.pinimg.com/736x/c8/ae/4e/c8ae4e2106d71b4cd296f0b7509cd5b4.jpg",
  },
  {
   
    url: "https://static2.srcdn.com/wordpress/wp-content/uploads/2021/04/Avengers-Mech-Striker-2-Kang-the-Conqueror-Cropped.jpeg",
  },
  {
    
    url: "https://static0.srcdn.com/wordpress/wp-content/uploads/2016/11/Nightmare-Doctor-Strange-Marvel-Villain.jpg",
  },
  {
   
    url: "https://static0.cbrimages.com/wordpress/wp-content/uploads/2019/06/Galactus-Powers-Ranked-Feature.jpg",
  },
]