import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, Button, Image, TextInput, ScrollView, SafeAreaView } from 'react-native';
import SearchDropDown from './app/components/SearchSection';
import { useState } from 'react';
import {LinearGradient} from 'expo-linear-gradient';

//-----Home Screen-----
function HomeScreen ({navigation}) {
  return (
 
    <LinearGradient start={{x: 0, y: 0}} end={{x: 3, y: 1 }} colors={['#ffcc99', '#D2D8D6', '#ffd9b3', 'transparent']} style={styles.linearGradient}>
      <Text style={styles.log}>Welcome to the Book App!</Text>
      <View style={styles.image}>
        <Image source={{
          width:339,
          height:250,
          uri:"https://media.istockphoto.com/photos/books-on-display-in-the-corner-of-a-second-hand-bookstore-picture-id1129874863?b=1&k=20&m=1129874863&s=170667a&w=0&h=FTGHLcHTwhBCwYVQ-P4pJgrkIbwK0Kh94aYOUxTBRmg="
        }}/>
      </View>
      <View style={styles.imgSec}>
        <View style={{width: 250, height:100,marginTop: -10, marginLeft: 60}} ><Button title = "LOGIN" onPress = {() => navigation.navigate('UserInput')} /> 
        <View style={{marginTop: 20,backgroundColor: "#001A76",}}  ><Button title = "REGISTER" onPress = {() => navigation.navigate('REGISTER')} />
        </View> 
        </View>  
      </View>
      <View style={styles.part}>
        <Text style={styles.text}>Thanks for the support.</Text>
      </View>
      </LinearGradient>
    
  )
}
//-----Login Inputs-----
function CustomerInput ({navigation}) {
  return (
<LinearGradient start={{x: 0, y: 0}} end={{x: 3, y: 1 }} colors={['#ffcc99', '#D2D8D6', '#ffd9b3', 'transparent']} style={styles.linearGradient}>

        <Text style={styles.log}>Welcome To Login </Text>
        <View style={styles.part1}>
          <Text style={styles.inputs}>User Name</Text>
          <TextInput style={styles.input} placeholder= "Enter Username"/>
        </View>
        <View style={styles.part2}>
          <Text style={styles.inputs}>Password</Text>
          <TextInput style={styles.input} placeholder= "Enter Password"/>
        </View>
        <View style={styles.btnSignIn}>
          <Button title = "SIGN IN" onPress = {() => navigation.navigate('DASHBOARD')} />
          </View>
      </LinearGradient>
  )
}

//DashBoardScreen
function DashBoardScreen ({navigation}) {
  return (
    <LinearGradient start={{x: 0, y: 1}} end={{x: 3, y: 2 }} colors={['#000000', '#0cbaba', '#000000', 'transparent']} style={styles.linearGradient}>
    <View style={styles.Detail}>
      <View style={{marginTop: -20}}> 
      <Image source={{
          width:339,
          height:250,
          uri:"https://images.indianexpress.com/2018/04/world-book-day-feature.jpg"
        }}/>
      </View>
      <View style={{width:300,marginLeft:10,marginTop:30,}}>
        <Button title = "Novel" onPress = {() => navigation.navigate('Novels')} />
      </View>
      <View style={{width:300,marginLeft:10,marginTop:20,}}>
        <Button title = "Short Story" onPress = {() => navigation.navigate('Short')} />
      </View>
      <View style={{width:300,marginLeft:10,marginTop:20,}}>
        <Button title = "Fiction" onPress = {() => navigation.navigate('Fiction')} />
      </View>
      <View style={{width:300,marginLeft:10,marginTop:20,}}>
        <Button title = "Non fiction" onPress = {() => navigation.navigate('Non_Fiction')} />
      </View>  
    </View>
    </LinearGradient>
  )
}

//-----Novel-----
function NovelScreen ({navigation}){
  return(
    
    <ScrollView>
      <LinearGradient start={{x: 0, y: 1}} end={{x: 3, y: 2 }} colors={['#000000', '#0cbaba', '#000000', 'transparent']} style={styles.linearGradient}>
      <Text style={{fontSize:25, fontWeight:'bold', textAlign:"center", color:"white"}}> List of Novels </Text>
      <View style={{marginLeft:10, marginTop:7}}>
      <View>
          <Image source={{
            width:160,
            height:212,
            uri:"https://images-na.ssl-images-amazon.com/images/I/91+0b-ZWeUL.jpg",
            }}/>
      </View>
      <View style={{width:160,marginLeft:0,marginTop:4,}}>
        <Button title = "star wars" onPress = {() => navigation.navigate('StarWars')} />
      </View>
      </View>

      <View style={{marginLeft:10,marginTop:14,}}>
      <View>
          <Image source={{
            width:160,
            height:212,
            uri:"https://www.ubuy.com/productimg/?image=aHR0cHM6Ly9pbWFnZXMtbmEuc3NsLWltYWdlcy1hbWF6b24uY29tL2ltYWdlcy9JLzUxQmtDTG1RNWpTLl9TUzQwMF8uanBn.jpg",
            }}/>
      </View>
      <View style={{width:160,marginLeft:0,marginTop:4,}}>
        <Button title = "jane eyre" onPress = {() => navigation.navigate('JaneEyre')} />
      </View>
      </View>
      
      <View style={{marginLeft:190,marginTop:-515}}>
      <View>
          <Image source={{
            width:160,
            height:212,
            uri:"https://bestlifeonline.com/wp-content/uploads/sites/3/2020/10/Harry-Potter-and-the-Chamber-of-Secrets-book-cover.jpg",
            }}/>
      </View>
      <View style={{width:160,marginLeft:0,marginTop:4,}}>
        <Button title = "harry potter" onPress = {() => navigation.navigate('HarryPotter')} />
      </View>
      </View>
      
      <View style={{marginLeft:190,marginTop:11,}}>
      <View>
          <Image source={{
            width:160,
            height:212,
            uri:"https://cdn.lifehack.org/wp-content/uploads/2015/03/kiterunner.jpg",
            }}/>
      </View>
      <View style={{width:160,marginLeft:0,marginTop:4,}}>
        <Button title = "kite runner" onPress = {() => navigation.navigate('KiteRunner')} />
      </View>
      </View>
      </LinearGradient>
      </ScrollView>
  )
}
//
function StarWarsScreen ({navigation}) {
  return(
    <ScrollView>
    <View style={{alignItems: 'center'}}>
      <Text style={{fontSize: 30, fontWeight: 'bold'}}>Star Wars</Text>
      <Image source={{
            width:160,
            height:212,
            uri:"https://images-na.ssl-images-amazon.com/images/I/91+0b-ZWeUL.jpg",
            }}/>

    <View style={{marginTop:17}}>
      <Text style={{fontSize:20, fontWeight:"bold", backgroundColor: "#d7fbc1", marginTop:5, marginLeft:5, marginRight:5}}>Book Price:  $7.99 </Text>
      <Text style={{fontSize:20, fontWeight:"bold", backgroundColor: "#cdfffc", marginTop:12, marginLeft:5, marginRight:5}}> Author:  K.W. Jeter  </Text>
      <Text style={{fontSize:20, fontWeight:"bold", backgroundColor: "#d9dbdb", marginTop:12, marginLeft:5, marginRight:5}}>Description: </Text>
      <Text style={{fontSize:16, backgroundColor: "#d9dbdb",marginLeft:5, marginRight:5}}> Boba Fett fears only one enemy...the one he cannot see....Feared and admired, 
      respected and despised, Boba Fett enjoys a dubious reputation as the galaxy's most successful bounty hunter. Yet even a man like Boba Fett can have one too many enemies.... 
      </Text>
    </View>
    </View>
    </ScrollView>
  )
}
function JaneEyreScreen ({navigation}) {
  return(
    <ScrollView>
    <View style={{alignItems: 'center'}}>
      <Text style={{fontSize: 30, fontWeight: 'bold'}}>Jane Eyre</Text>
      <Image source={{
            width:160,
            height:212,
            uri:"https://www.ubuy.com/productimg/?image=aHR0cHM6Ly9pbWFnZXMtbmEuc3NsLWltYWdlcy1hbWF6b24uY29tL2ltYWdlcy9JLzUxQmtDTG1RNWpTLl9TUzQwMF8uanBn.jpg",
            }}/>

    <View style={{marginTop:17}}>
      <Text style={{fontSize:20, fontWeight:"bold", backgroundColor: "#d7fbc1", marginTop:5, marginLeft:5, marginRight:5}}>Book Price:  $8.99 </Text>
      <Text style={{fontSize:20, fontWeight:"bold", backgroundColor: "#cdfffc", marginTop:12, marginLeft:5, marginRight:5}}> Author:  Charlotte Bronte  </Text>
      <Text style={{fontSize:20, fontWeight:"bold", backgroundColor: "#d9dbdb", marginTop:12, marginLeft:5, marginRight:5}}>Description: </Text>
      <Text style={{fontSize:16, backgroundColor: "#d9dbdb",marginLeft:5, marginRight:5}}> The story follows the experiences of its eponymous heroine, including her growth to adulthood and her love for Mr. Rochester, the brooding master of Thornfield Hall.
The novel revolutionised prose fiction by being the first to focus on its protagonist's moral and spiritual development through an intimate first-person narrative, where actions and events are coloured by a psychological intensity.
      </Text>
    </View>
    </View>
    </ScrollView>
  )
}
function HarryPotterScreen ({navigation}) {
  return(
    <ScrollView>
    <View style={{alignItems: 'center'}}>
    <Text style={{fontSize: 30, fontWeight: 'bold'}}>Harry Potter</Text>
    <Image source={{
          width:160,
          height:212,
          uri:"https://bestlifeonline.com/wp-content/uploads/sites/3/2020/10/Harry-Potter-and-the-Chamber-of-Secrets-book-cover.jpg",
          }}/>

  <View style={{marginTop:17}}>
    <Text style={{fontSize:20, fontWeight:"bold", backgroundColor: "#d7fbc1", marginTop:5, marginLeft:5, marginRight:5}}>Book Price:  $6.99 </Text>
    <Text style={{fontSize:20, fontWeight:"bold", backgroundColor: "#cdfffc", marginTop:12, marginLeft:5, marginRight:5}}> Author:  J.K. Rowling, Jim Dale, et al.  </Text>
    <Text style={{fontSize:20, fontWeight:"bold", backgroundColor: "#d9dbdb", marginTop:12, marginLeft:5, marginRight:5}}>Description: </Text>
    <Text style={{fontSize:16, backgroundColor: "#d9dbdb",marginLeft:5, marginRight:5}}> ‘There is a plot, Harry Potter. A plot to make most terrible things happen at Hogwarts School of Witchcraft and Wizardry this year. 'Harry Potter's summer has included the worst birthday ever, doomy warnings from a house-elf called Dobby, and rescue from the Dursleys by his friend Ron Weasley in a magical flying car! Back at Hogwarts School of Witchcraft and Wizardry for his second year.
    </Text>
  </View>
  </View>
  </ScrollView>
  )
}
function KiteRunnerScreen ({navigation}) {
  return(
    <ScrollView>
    <View style={{alignItems: 'center'}}>
    <Text style={{fontSize: 30, fontWeight: 'bold'}}>The Kite Runner</Text>
    <Image source={{
          width:160,
          height:212,
          uri:"https://cdn.lifehack.org/wp-content/uploads/2015/03/kiterunner.jpg",
          }}/>

  <View style={{marginTop:17}}>
    <Text style={{fontSize:20, fontWeight:"bold", backgroundColor: "#d7fbc1", marginTop:5, marginLeft:5, marginRight:5}}>Book Price:  $17.99 </Text>
    <Text style={{fontSize:20, fontWeight:"bold", backgroundColor: "#cdfffc", marginTop:12, marginLeft:5, marginRight:5}}> Author:  Khaled Hosseini</Text>
    <Text style={{fontSize:20, fontWeight:"bold", backgroundColor: "#d9dbdb", marginTop:12, marginLeft:5, marginRight:5}}>Description: </Text>
    <Text style={{fontSize:16, backgroundColor: "#d9dbdb",marginLeft:5, marginRight:5}}> Taking us from Afghanistan in the final days of its monarchy to the present, The Kite Runner is the unforgettable and beautifully told story of the friendship between two boys growing up in Kabul. Raised in the same household and sharing the same wet nurse, Amir and Hassan grow up in different worlds: Amir is the son of a prominent and wealthy man, while Hassan, the son of Amir's father's servant, is a Hazara.
    </Text>
  </View>
  </View>
  </ScrollView>
  )
}

//-----Short Story----- 
function ShortScreen ({navigation}){
  return(
    <ScrollView>
      <LinearGradient start={{x: 0, y: 1}} end={{x: 3, y: 2 }} colors={['#000000', '#0cbaba', '#000000', 'transparent']} style={styles.linearGradient}>
      <Text style={{fontSize:25, fontWeight:'bold', textAlign:"center", color:"white"}}>List of Short Stories</Text>
      <View style={{marginLeft:10,marginTop:7}}>
      <View>
          <Image source={{
            width:160,
            height:210,
            uri:"https://i.pinimg.com/originals/b6/91/80/b69180b21da179471b14167bcbb9d340.jpg",
            }}/>
      </View>
      <View style={{width:160,marginLeft:0,marginTop:4,}}>
        <Button title = "Dubliners" onPress = {() => navigation.navigate('Dubliners')} />
      </View>
      </View>

      <View style={{marginLeft:10,marginTop:12,}}>
      <View>
          <Image source={{
            width:160,
            height:212,
            uri:"https://s3.ap-south-1.amazonaws.com/storage.commonfolks.in/docs/products/images_full/best-short-stories-of-anton-chekov_FrontImage_858.jpg",
            }}/>
      </View>
      <View style={{width:160,marginLeft:0,marginTop:4,}}>
        <Button title = "Anton Chekov" onPress = {() => navigation.navigate('AntonChekov')} />
      </View>
      </View>
      
      <View style={{marginLeft:190,marginTop:-510}}>
      <View>
          <Image source={{
            width:160,
            height:208,
            uri:"https://hachette.imgix.net/books/9781444904338.jpg?auto=compress,format",
            }}/>
      </View>
      <View style={{width:160,marginLeft:0,marginTop:4,}}>
        <Button title = "The Famous Five" onPress = {() => navigation.navigate('FamousFive')} />
      </View>
      </View>
      
      <View style={{marginLeft:190,marginTop:12,}}>
      <View>
          <Image source={{
            width:160,
            height:211,
            uri:"https://cdn2.momjunction.com/wp-content/uploads/2014/06/The-Jungle-Book.jpg",
            }}/>
      </View>
      <View style={{width:160,marginLeft:0,marginTop:4,}}>
        <Button title = "The Jungle Book" onPress = {() => navigation.navigate('JungleBook')} />
      </View>
      </View>
      </LinearGradient>
      </ScrollView>
  )
}
//
function DublinersScreen ({navigation}) {
  return(
    <ScrollView>
    <View style={{alignItems: 'center'}}>
    <Text style={{fontSize: 30, fontWeight: 'bold'}}>Dubliners</Text>
    <Image source={{
          width:160,
          height:212,
          uri:"https://i.pinimg.com/originals/b6/91/80/b69180b21da179471b14167bcbb9d340.jpg",
          }}/>

  <View style={{marginTop:17}}>
    <Text style={{fontSize:20, fontWeight:"bold", backgroundColor: "#d7fbc1", marginTop:5, marginLeft:5, marginRight:5}}>Book Price:  $8.99 </Text>
    <Text style={{fontSize:20, fontWeight:"bold", backgroundColor: "#cdfffc", marginTop:12, marginLeft:5, marginRight:5}}> Author:  James Joyce </Text>
    <Text style={{fontSize:20, fontWeight:"bold", backgroundColor: "#d9dbdb", marginTop:12, marginLeft:5, marginRight:5}}>Description: </Text>
    <Text style={{fontSize:16, backgroundColor: "#d9dbdb",marginLeft:5, marginRight:5}}> James Joyce’s Dubliners is a vivid and unflinching portrait of “dear dirty Dublin” at the turn of the twentieth century. These fifteen stories, including such unforgettable ones as “Araby,” “Grace,” and “The Dead,” delve into the heart of the city of Joyce’s birth, capturing the cadences of Dubliners’ speech and portraying with an almost brute realism their outer and inner lives. 
    </Text>
  </View>
  </View>
  </ScrollView>
  )
}
function AntonChekovScreen ({navigation}) {
  return(
    <ScrollView>
    <View style={{alignItems: 'center'}}>
    <Text style={{fontSize: 27, fontWeight: 'bold'}}>The Greatest Short Stories</Text>
    <Image source={{
          width:160,
          height:212,
          uri:"https://s3.ap-south-1.amazonaws.com/storage.commonfolks.in/docs/products/images_full/best-short-stories-of-anton-chekov_FrontImage_858.jpg",
          }}/>

  <View style={{marginTop:17}}>
    <Text style={{fontSize:20, fontWeight:"bold", backgroundColor: "#d7fbc1", marginTop:5, marginLeft:5, marginRight:5}}>Book Price:  $12.99 </Text>
    <Text style={{fontSize:20, fontWeight:"bold", backgroundColor: "#cdfffc", marginTop:12, marginLeft:5, marginRight:5}}> Author:  Anton Chekhov </Text>
    <Text style={{fontSize:20, fontWeight:"bold", backgroundColor: "#d9dbdb", marginTop:12, marginLeft:5, marginRight:5}}>Description: </Text>
    <Text style={{fontSize:16, backgroundColor: "#d9dbdb",marginLeft:5, marginRight:5}}>Life is a vexatious trap; when a thinking man reaches maturity and attains to full consciousness he cannot help feeling that he is in a trap from which there is no escape. One of the greatest Russian short story writers and an exemplary playwright, Anton Chekhov penned down some of the finest short stories and plays in literature. His works continue to be translated into various languages across the world.
    </Text>
  </View>
  </View>
  </ScrollView>
  )
}
function FamousFiveScreen ({navigation}) {
  return(
    <ScrollView>
    <View style={{alignItems: 'center'}}>
    <Text style={{fontSize: 30, fontWeight: 'bold'}}>The Famous Five</Text>
    <Image source={{
          width:160,
          height:212,
          uri:"https://hachette.imgix.net/books/9781444904338.jpg?auto=compress,format",
          }}/>

  <View style={{marginTop:17}}>
    <Text style={{fontSize:20, fontWeight:"bold", backgroundColor: "#d7fbc1", marginTop:5, marginLeft:5, marginRight:5}}>Book Price:  $12.99 </Text>
    <Text style={{fontSize:20, fontWeight:"bold", backgroundColor: "#cdfffc", marginTop:12, marginLeft:5, marginRight:5}}> Author:  Enid Blyton  </Text>
    <Text style={{fontSize:20, fontWeight:"bold", backgroundColor: "#d9dbdb", marginTop:12, marginLeft:5, marginRight:5}}>Description: </Text>
    <Text style={{fontSize:16, backgroundColor: "#d9dbdb",marginLeft:5, marginRight:5}}>Julian, Dick, Anne, George and Timmy the dog find excitement and adventure wherever they go in Enid Blyton's most popular series, The Famous Five. This new collection contains three fantastic books in one volume. Join the adventure!
    </Text>
  </View>
  </View>
  </ScrollView>
  )
}
function JungleBookScreen ({navigation}) {
  return(
    <ScrollView>
    <View style={{alignItems: 'center'}}>
    <Text style={{fontSize: 30, fontWeight: 'bold'}}>The Jungle Book</Text>
    <Image source={{
          width:160,
          height:212,
          uri:"https://cdn2.momjunction.com/wp-content/uploads/2014/06/The-Jungle-Book.jpg",
          }}/>

  <View style={{marginTop:17}}>
    <Text style={{fontSize:20, fontWeight:"bold", backgroundColor: "#d7fbc1", marginTop:5, marginLeft:5, marginRight:5}}>Book Price:  $4.79 </Text>
    <Text style={{fontSize:20, fontWeight:"bold", backgroundColor: "#cdfffc", marginTop:12, marginLeft:5, marginRight:5}}> Author:  RH Disney  </Text>
    <Text style={{fontSize:20, fontWeight:"bold", backgroundColor: "#d9dbdb", marginTop:12, marginLeft:5, marginRight:5}}>Description: </Text>
    <Text style={{fontSize:16, backgroundColor: "#d9dbdb",marginLeft:5, marginRight:5}}> YOUNG MOWGLI LOVES growing up in the jungle with his animal friends. But what happens when he is told that he must go live in the Man-village? Find out in this Little Golden Book retelling of the classic Disney movie The Jungle Book.
    </Text>
  </View>
  </View>
  </ScrollView>
  )
}

//-----Fiction-----
function FictionScreen ({navigation}){
  return(
    <ScrollView>
      <LinearGradient start={{x: 0, y: 1}} end={{x: 3, y: 2 }} colors={['#000000', '#0cbaba', '#000000', 'transparent']} style={styles.linearGradient}>
      <Text style={{fontSize:25, fontWeight:'bold', textAlign:"center", color:"white"}}>List of Fictions</Text>
      <View style={{marginLeft:10,marginTop:7}}>
      <View>
          <Image source={{
            width:160,
            height:212,
            uri:"https://i.pinimg.com/474x/a7/91/62/a7916230aedcdce47a4dfbff5247f0ce.jpg",
            }}/>
      </View>
      <View style={{width:160,marginLeft:0,marginTop:4,}}>
        <Button title = "The Past Is Rising" onPress = {() => navigation.navigate('PastRising')} />
      </View>
      </View>

      <View style={{marginLeft:10,marginTop:12,}}>
      <View>
          <Image source={{
            width:160,
            height:212,
            uri:"https://blog-cdn.reedsy.com/directories/admin/attachments/large_15995a7d7b81315b99d70d825ad13c6a.jpg",
            }}/>
      </View>
      <View style={{width:160,marginLeft:0,marginTop:4,}}>
        <Button title = "Pelosi" onPress = {() => navigation.navigate('Pelosi')} />
      </View>
      </View>
      
      <View style={{marginLeft:190,marginTop:-512}}>
      <View>
          <Image source={{
            width:160,
            height:212,
            uri:"https://qph.fs.quoracdn.net/main-qimg-6e605c06d439faf2c38ecb529964f0e8-lq",
            }}/>
      </View>
      <View style={{width:160,marginLeft:0,marginTop:4,}}>
        <Button title = "The Lost World" onPress = {() => navigation.navigate('LostWorld')} />
      </View>
      </View>
      
      <View style={{marginLeft:190,marginTop:8,}}>
      <View>
          <Image source={{
            width:160,
            height:214,
            uri:"https://rivetedlit.com/wp-content/uploads/2018/09/five-feet-apart-9781534437333_hr-679x1024.jpg",
            }}/>
      </View>
      <View style={{width:160,marginLeft:0,marginTop:4,}}>
        <Button title = "Five Feet Apart" onPress = {() => navigation.navigate('FiveFeet')} />
      </View>
      </View>
      </LinearGradient>
      </ScrollView>
  )
}
//
function PastRisingScreen ({navigation}) {
  return(
    <ScrollView>
    <View style={{alignItems: 'center'}}>
    <Text style={{fontSize: 30, fontWeight: 'bold'}}>The Past is Rising </Text>
    <Image source={{
          width:160,
          height:212,
          uri:"https://i.pinimg.com/474x/a7/91/62/a7916230aedcdce47a4dfbff5247f0ce.jpg",
          }}/>

  <View style={{marginTop:17}}>
    <Text style={{fontSize:20, fontWeight:"bold", backgroundColor: "#d7fbc1", marginTop:5, marginLeft:5, marginRight:5}}>Book Price:  $11.99 </Text>
    <Text style={{fontSize:20, fontWeight:"bold", backgroundColor: "#cdfffc", marginTop:12, marginLeft:5, marginRight:5}}> Author:   Kathryn Bywaters  </Text>
    <Text style={{fontSize:20, fontWeight:"bold", backgroundColor: "#d9dbdb", marginTop:12, marginLeft:5, marginRight:5}}>Description: </Text>
    <Text style={{fontSize:16, backgroundColor: "#d9dbdb",marginLeft:5, marginRight:5}}> At fourteen, Erik dreams of past glories. He was not alive when the False Kings marched against their nephew and laid siege to the city of Meraview. Now, perched on the outer wall, Erik imagines the two great armies battling on the plains outside the city. His excitement mounts as he spies a horse and rider racing to reach Meraview. This lone messenger is Eve, cousin to the High King—and she brings troubling news.
    </Text>
  </View>
  </View>
  </ScrollView>
  )
}
function PelosiScreen ({navigation}) {
  return(
    <ScrollView>
    <View style={{alignItems: 'center'}}>
    <Text style={{fontSize: 30, fontWeight: 'bold'}}>Pelosi</Text>
    <Image source={{
          width:160,
          height:212,
          uri:"https://blog-cdn.reedsy.com/directories/admin/attachments/large_15995a7d7b81315b99d70d825ad13c6a.jpg",
          }}/>

  <View style={{marginTop:17}}>
    <Text style={{fontSize:20, fontWeight:"bold", backgroundColor: "#d7fbc1", marginTop:5, marginLeft:5, marginRight:5}}>Book Price:  $10.87 </Text>
    <Text style={{fontSize:20, fontWeight:"bold", backgroundColor: "#cdfffc", marginTop:12, marginLeft:5, marginRight:5}}> Author:   Molly Ball  </Text>
    <Text style={{fontSize:20, fontWeight:"bold", backgroundColor: "#d9dbdb", marginTop:12, marginLeft:5, marginRight:5}}>Description: </Text>
    <Text style={{fontSize:16, backgroundColor: "#d9dbdb",marginLeft:5, marginRight:5}}> A riveting inside account of the unprecedented rise to power and unmatched political legacy of the first woman Speaker of the House, by award-winning journalist Molly Ball
    Nancy Pelosi’s opposition to Donald Trump has made her an icon of the Resistance, featured in viral memes clapping sardonically at the president or ripping up his State of the Union address.
    </Text>
  </View>
  </View>
  </ScrollView>
  )
}
function LostWorldScreen ({navigation}) {
  return(
    <ScrollView>
    <View style={{alignItems: 'center'}}>
    <Text style={{fontSize: 30, fontWeight: 'bold'}}>The Lost World</Text>
    <Image source={{
          width:160,
          height:212,
          uri:"https://qph.fs.quoracdn.net/main-qimg-6e605c06d439faf2c38ecb529964f0e8-lq",
          }}/>

  <View style={{marginTop:17}}>
    <Text style={{fontSize:20, fontWeight:"bold", backgroundColor: "#d7fbc1", marginTop:5, marginLeft:5, marginRight:5}}>Book Price:  $8.95 </Text>
    <Text style={{fontSize:20, fontWeight:"bold", backgroundColor: "#cdfffc", marginTop:12, marginLeft:5, marginRight:5}}> Author:   Arthur Conan Doyle </Text>
    <Text style={{fontSize:20, fontWeight:"bold", backgroundColor: "#d9dbdb", marginTop:12, marginLeft:5, marginRight:5}}>Description: </Text>
    <Text style={{fontSize:16, backgroundColor: "#d9dbdb",marginLeft:5, marginRight:5}}> The Lost World is a science fiction novel by British writer Arthur Conan Doyle, published in 1912, concerning an expedition to a plateau in the Amazon basin of South America where prehistoric animals still survive. It was originally published serially in the Strand Magazine and illustrated by New-Zealand-born artist Harry Rountree during the months of April–November 1912. 
    </Text>
  </View>
  </View>
  </ScrollView>
  )
}
function FiveFeetScreen ({navigation}) {
  return(
  <ScrollView>
  <View style={{alignItems: 'center'}}>
    <Text style={{fontSize: 30, fontWeight: 'bold'}}>Five Feet Apart</Text>
    <Image source={{
          width:160,
          height:212,
          uri:"https://rivetedlit.com/wp-content/uploads/2018/09/five-feet-apart-9781534437333_hr-679x1024.jpg",
          }}/>

  <View style={{marginTop:17}}>
    <Text style={{fontSize:20, fontWeight:"bold", backgroundColor: "#d7fbc1", marginTop:5, marginLeft:5, marginRight:5}}>Book Price:  $9.23 </Text>
    <Text style={{fontSize:20, fontWeight:"bold", backgroundColor: "#cdfffc", marginTop:12, marginLeft:5, marginRight:5}}> Author:   Rachael Lippincott </Text>
    <Text style={{fontSize:20, fontWeight:"bold", backgroundColor: "#d9dbdb", marginTop:12, marginLeft:5, marginRight:5}}>Description: </Text>
    <Text style={{fontSize:16, backgroundColor: "#d9dbdb",marginLeft:5, marginRight:5}}> Stella Grant likes to be in control—even though her totally out of control lungs have sent her in and out of the hospital most of her life. At this point, what Stella needs to control most is keeping herself away from anyone or anything that might pass along an infection and jeopardize the possibility of a lung transplant. Six feet apart. No exceptions.
    </Text>
  </View>
  </View>
  </ScrollView>
  )
}

//-----Non Fiction Screen-----
function NonFicScreen({navigation}){
  return(
    <ScrollView>
    <LinearGradient start={{x: 0, y: 1}} end={{x: 3, y: 2 }} colors={['#000000', '#0cbaba', '#000000', 'transparent']} style={styles.linearGradient}>
    <Text style={{fontSize:25, fontWeight:'bold', textAlign:"center", color:"white"}}>List of Non-Fictions</Text>
    <View style={{marginLeft:10,marginTop:7}}>
    <View>
        <Image source={{
          width:160,
          height:212,
          uri:"https://images-platform.99static.com//7Tzd__lpPb0VX-WVWt7OyKfFc40=/fit-in/500x500/projects-files/56/5686/568603/cd37bbc0-40b8-46e1-8c91-96ef13fea333.jpg",
          }}/>
    </View>
    <View style={{width:160,marginLeft:0,marginTop:4,}}>
      <Button title = "ReBirth of you " onPress = {() => navigation.navigate('ReBirth')} />
    </View>
    </View>

    <View style={{marginLeft:10,marginTop:12,}}>
    <View>
        <Image source={{
          width:160,
          height:212,
          uri:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348791586l/13641974.jpg",
          }}/>
    </View>
    <View style={{width:160,marginLeft:0,marginTop:4,}}>
      <Button title = "Good Prose" onPress = {() => navigation.navigate('GoodProse')} />
    </View>
    </View>
    
    <View style={{marginLeft:190,marginTop:-512}}>
    <View>
        <Image source={{
          width:160,
          height:212,
          uri:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1560816565l/48855.jpg",
          }}/>
    </View>
    <View style={{width:160,marginLeft:0,marginTop:4,}}>
      <Button title = "Anne Frank" onPress = {() => navigation.navigate('AnneFrank')} />
    </View>
    </View>
    
    <View style={{marginLeft:190,marginTop:8,}}>
    <View>
        <Image source={{
          width:160,
          height:214,
          uri:"https://s26162.pcdn.co/wp-content/uploads/2019/10/slavery-bookgif-684x1024.gif",
          }}/>
    </View>
    <View style={{width:160,marginLeft:0,marginTop:4,}}>
      <Button title = "Other Slavery" onPress = {() => navigation.navigate('OtherSlavery')} />
    </View>
    </View>
    </LinearGradient>
    </ScrollView>
  )
}
//
function ReBirthScreen ({navigation}) {
  return(
    <ScrollView>
    <View style={{alignItems: 'center'}}>
    <Text style={{fontSize: 30, fontWeight: 'bold'}}>The Rebirth of You</Text>
    <Image source={{
          width:160,
          height:212,
          uri:"https://images-platform.99static.com//7Tzd__lpPb0VX-WVWt7OyKfFc40=/fit-in/500x500/projects-files/56/5686/568603/cd37bbc0-40b8-46e1-8c91-96ef13fea333.jpg",
          }}/>

  <View style={{marginTop:17}}>
    <Text style={{fontSize:20, fontWeight:"bold", backgroundColor: "#d7fbc1", marginTop:5, marginLeft:5, marginRight:5}}>Book Price:  $24.99 </Text>
    <Text style={{fontSize:20, fontWeight:"bold", backgroundColor: "#cdfffc", marginTop:12, marginLeft:5, marginRight:5}}> Author:    Zhi Zhi  </Text>
    <Text style={{fontSize:20, fontWeight:"bold", backgroundColor: "#d9dbdb", marginTop:12, marginLeft:5, marginRight:5}}>Description: </Text>
    <Text style={{fontSize:16, backgroundColor: "#d9dbdb",marginLeft:5, marginRight:5}}> Rebirth For You. Princess of Jianan Jiang Baoning balances each force step by step with her wisdom and intelligence, during which she knows and falls in love with an imperial guard Li Qian. Overcoming various difficulties, they finally skipped over the gap between their identities and have a happy end. Our boy is finally done with the teasing and tells Jiang Bao Ning he won't let go of her hand anymore. 
    </Text>
  </View>
  </View>
  </ScrollView>
  )
}
function GoodProseScreen ({navigation}) {
  return(
    <ScrollView>
    <View style={{alignItems: 'center'}}>
    <Text style={{fontSize: 30, fontWeight: 'bold'}}>Good Prose</Text>
    <Image source={{
          width:160,
          height:212,
          uri:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348791586l/13641974.jpg",
          }}/>

  <View style={{marginTop:17}}>
    <Text style={{fontSize:20, fontWeight:"bold", backgroundColor: "#d7fbc1", marginTop:5, marginLeft:5, marginRight:5}}>Book Price:  $16.92 </Text>
    <Text style={{fontSize:20, fontWeight:"bold", backgroundColor: "#cdfffc", marginTop:12, marginLeft:5, marginRight:5}}> Author:    Tracy Kidder, Richard Todd  </Text>
    <Text style={{fontSize:20, fontWeight:"bold", backgroundColor: "#d9dbdb", marginTop:12, marginLeft:5, marginRight:5}}>Description: </Text>
    <Text style={{fontSize:16, backgroundColor: "#d9dbdb",marginLeft:5, marginRight:5}}>Good Prose is an inspiring book about writing—about the creation of good prose—and the record of a warm and productive literary friendship. The story begins in 1973, in the offices of The Atlantic Monthly, in Boston, where a young freelance writer named Tracy Kidder came looking for an assignment. Richard Todd was the editor who encouraged him.  From that article grew a lifelong association. 
    </Text>
  </View>
  </View>
  </ScrollView>
  )
}
function AnneFrankScreen ({navigation}) {
  return(
    <ScrollView>
    <View style={{alignItems: 'center'}}>
    <Text style={{fontSize: 30, fontWeight: 'bold'}}>The Diary of a Young Girl</Text>
    <Image source={{
          width:160,
          height:212,
          uri:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1560816565l/48855.jpg",
          }}/>

  <View style={{marginTop:17}}>
    <Text style={{fontSize:20, fontWeight:"bold", backgroundColor: "#d7fbc1", marginTop:5, marginLeft:5, marginRight:5}}>Book Price:  $16.07 </Text>
    <Text style={{fontSize:20, fontWeight:"bold", backgroundColor: "#cdfffc", marginTop:12, marginLeft:5, marginRight:5}}> Author:    Annee Frank </Text>
    <Text style={{fontSize:20, fontWeight:"bold", backgroundColor: "#d9dbdb", marginTop:12, marginLeft:5, marginRight:5}}>Description: </Text>
    <Text style={{fontSize:16, backgroundColor: "#d9dbdb",marginLeft:5, marginRight:5}}>In 1942, with Nazis occupying Holland, a thirteen-year-old Jewish girl and her family fled their home in Amsterdam and went into hiding. For the next two years, until their whereabouts were betrayed to the Gestapo, they and another family lived cloistered in the “Secret Annex” of an old office building. Cut off from the outside world, they faced hunger, boredom, and the ever-present threat of discovery and death. 
    </Text>
  </View>
  </View>
  </ScrollView>
  )
}
function OtherSlaveryScreen ({navigation}) {
  return(
    <ScrollView>
    <View style={{alignItems: 'center'}}>
    <Text style={{fontSize: 30, fontWeight: 'bold'}}>The Other Slavery</Text>
    <Image source={{
          width:160,
          height:212,
          uri:"https://s26162.pcdn.co/wp-content/uploads/2019/10/slavery-bookgif-684x1024.gif",
          }}/>

  <View style={{marginTop:17}}>
    <Text style={{fontSize:20, fontWeight:"bold", backgroundColor: "#d7fbc1", marginTop:5, marginLeft:5, marginRight:5}}>Book Price:  $11.99 </Text>
    <Text style={{fontSize:20, fontWeight:"bold", backgroundColor: "#cdfffc", marginTop:12, marginLeft:5, marginRight:5}}> Author:    Andrés Reséndez </Text>
    <Text style={{fontSize:20, fontWeight:"bold", backgroundColor: "#d9dbdb", marginTop:12, marginLeft:5, marginRight:5}}>Description: </Text>
    <Text style={{fontSize:16, backgroundColor: "#d9dbdb",marginLeft:5, marginRight:5}}> Since the time of Columbus, Indian slavery was illegal in much of the American continent. Yet, as Andrés Reséndez illuminates in his myth-shattering The Other Slavery, it was practiced for centuries as an open secret. There was no abolitionist movement to protect the tens of thousands of Natives who were kidnapped and enslaved by the conquistadors.
    </Text>
  </View>
  </View>
  </ScrollView>
  )
}

//Registration Screen
function RegisterScreen ({navigation}) {
  return (
  <LinearGradient start={{x: 0, y: 0}} end={{x: 3, y: 1 }} colors={['#ffcc99', '#D2D8D6', '#ffd9b3', 'transparent']} style={styles.linearGradient}>
    <Text style={styles.log}>Register Your Account </Text>

        <View style={styles.part1}>
          <Text style={styles.inputs}> First Name</Text>
          <TextInput style={styles.input} placeholder= "Enter First Name"/>
        </View>

        <View style={styles.part2}>
          <Text style={styles.inputs}> Last Name</Text>
          <TextInput style={styles.input} placeholder= "Enter Last Name"/>
        </View>

        <View style={styles.part3}>
          <Text style={styles.inputs}> Password</Text>
          <TextInput style={styles.input} placeholder= "Enter Password"/>
        </View>

        <View style={styles.part4}>
          <Text style={styles.inputs}>Confirm Password</Text>
          <TextInput style={styles.input} placeholder= "Re Enter Password"/>
        </View>
        
        <View style={styles.btnSignIn}>
          <Button title = "REGISTER" onPress = {() => navigation.navigate('UserInput')} />
        </View>
      </LinearGradient>
  )
}

//Search Section
function SearchScreen (navigation) {
  const [dataSource] = useState(['starWars', 'harryPotter', 'janeEyer', 'kiteRunner', 'dubliners', 'five', 'antonChekov', 'pelosi', 'jungleBook'])
  const [colors] = useState(['#84DCC6', '#FEC8C8', '#F7E4CF', "#E8DEF3",
  ])
  const [filtered, setFiltered] = useState(dataSource)
  const [searching, setSearching] = useState(false)
  const onSearch = (text) => {
    if (text) {
      setSearching(true)
      const temp = text.toLowerCase()

      const tempList = dataSource.filter(item => {
        if (item.match(temp))
          return item
      })
      setFiltered(tempList)
    }
    else {
      setSearching(false)
      setFiltered(dataSource)
    }
  }
  const randomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)]
  }
  return (
    <View style={styles.containe}>
      <TextInput
        style={styles.textInput}
        placeholder="Search"
        placeholderTextColor='white'
        onChangeText={onSearch}
      />
      <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 20, marginTop: 20, marginBottom: 20, }}> List of Books</Text>
        <View style={{
          flexWrap: 'wrap', flexDirection: 'row',
          justifyContent: 'center',
        }}>
          {
            dataSource.map((item, index) => {
              return (
                <View style={{
                  margin: 10,
                  borderRadius:30,
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: 80, width: 90, backgroundColor: randomColor()
                }}>
                  <Text style={{ fontSize: 15, }}>
                    {item}
                  </Text>
                </View>
              )
            })
          }
        </View>
      </View>
      {
        searching &&
        <SearchDropDown
          onPress={() => setSearching(false)}
          dataSource={filtered} />
      }
    </View>
  )
}

//------Tab Bar-------
const Tab = createBottomTabNavigator();

function TabBar() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} options={{tabBarIcon:({focused})=>(
      <View>
        <Image source={{
          width:35,
          height:35,
          marginTop:15,
          marginLeft:50,
          uri:"https://i.pinimg.com/originals/f4/98/8c/f4988c15c88b58036f5005e3b7c714ed.jpg",
        }}/>
    </View> 
    ),}}/>

      <Tab.Screen name="Login" component={CustomerInput} options={{tabBarIcon:({focused}) =>(
        <View>
         <Image source={{
           width:30,
           height:30,
           marginTop:15,
           marginLeft:50,
           uri:"https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars.png",
         }}/>
     </View> 
   ),}}/>

      <Tab.Screen name="Register" component={RegisterScreen} options={{tabBarIcon:({focused})  =>(
         <View>
         <Image source={{
           width:28,
           height:28,
           marginTop:15,
           marginLeft:50,
           uri:"https://icon-library.com/images/registered-icon/registered-icon-24.jpg",
         }}/>
     </View> 
      )}}/>

      <Tab.Screen name="Search" component={SearchScreen} options={{tabBarIcon:({focused}) =>(
         <View>
         <Image source={{
           width:28,
           height:28,
           marginTop:15,
           marginLeft:50,
           uri:"https://icon-library.com/images/black-search-icon-png/black-search-icon-png-27.jpg",
         }}/>
     </View> 
      )}} />
    </Tab.Navigator>
  );
}

//Navigation Screens
const Stack = createNativeStackNavigator();
export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TabBar" component={TabBar} options={{ headerShown: false }}/>
        <Stack.Screen name= "Home" component = {HomeScreen} />
        <Stack.Screen name= "UserInput" component = {CustomerInput} />
        <Stack.Screen name= "DASHBOARD" component = {DashBoardScreen} />
        <Stack.Screen name= "REGISTER" component = {RegisterScreen} />
        <Stack.Screen name= "Novels" component = {NovelScreen} />
        <Stack.Screen name= "Short" component = {ShortScreen} />
        <Stack.Screen name= "Fiction" component = {FictionScreen} />
        <Stack.Screen name= "Non_Fiction" component = {NonFicScreen} />
        
        <Stack.Screen name= "StarWars" component = {StarWarsScreen} />
        <Stack.Screen name= "JaneEyre" component = {JaneEyreScreen} />
        <Stack.Screen name= "HarryPotter" component = {HarryPotterScreen} />
        <Stack.Screen name= "KiteRunner" component = {KiteRunnerScreen} />

        <Stack.Screen name= "Dubliners" component = {DublinersScreen} />
        <Stack.Screen name= "AntonChekov" component = {AntonChekovScreen} />
        <Stack.Screen name= "FamousFive" component = {FamousFiveScreen} />
        <Stack.Screen name= "JungleBook" component = {JungleBookScreen} />

        <Stack.Screen name= "PastRising" component = {PastRisingScreen} />
        <Stack.Screen name= "Pelosi" component = {PelosiScreen} />
        <Stack.Screen name= "LostWorld" component = {LostWorldScreen} />
        <Stack.Screen name= "FiveFeet" component = {FiveFeetScreen} />

        <Stack.Screen name= "ReBirth" component = {ReBirthScreen} />
        <Stack.Screen name= "AnneFrank" component = {AnneFrankScreen} />
        <Stack.Screen name= "GoodProse" component = {GoodProseScreen} />
        <Stack.Screen name= "OtherSlavery" component = {OtherSlaveryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FAF0E6',
  },
  log:{
    textAlign: 'center',
    justifyContent: 'center',
    paddingBottom:100,
    paddingTop:50,
    color:"#063970",
    fontWeight:"bold",
    fontSize:29,
    marginTop:-38,
  },
  image:{
    marginTop:-70,
    marginLeft:10,
  },
  Detail:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  part:{
    marginTop:30,
  },
  text:{
    fontSize:15,
    textAlign:"center",
  },
  part1:{
    marginTop:-80,
    marginLeft:20,
  },
  part2:{
    marginTop:20,
    marginLeft:20,
  },
  part3:{
    marginTop:20,
    marginLeft:20,
  },
  part4:{
    marginTop:20,
    marginLeft:20,
  },
  inputs:{
    fontSize:20,
  },
  input:{
    width:320,
    height:50,
    fontSize:15,
    backgroundColor: "white",
  },
  btnSignIn:{
    width:180,
    height:150,
    marginTop:30,
    marginLeft:90,
  },
  btnFPWD:{
    width:180,
    height:150,
    marginTop:20,
  },
  btnLogin:{  
  },
  btnRegister:{
    marginTop: 20,
  },
  imgSec:{
    marginTop: 38,
  },
  containe: {
    alignItems: 'center',
    marginTop: '20%',
    flex: 1
  },
  textInput: {
    backgroundColor: '#BFBFBF',
    width: '90%',
    borderRadius:10,
    height: 50,
    marginTop:-40,
    fontSize: 17,
    textAlign:"center",
    paddingHorizontal: 10,
  },
  linearGradient: {
    flex: 1,
  },
});