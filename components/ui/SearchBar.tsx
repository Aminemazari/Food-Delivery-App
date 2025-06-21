import theme from '@/app/theme/theme';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import IconInput from './IconInput';
export default function SearchBar(){
 const [search, setSearch] = useState("");
  return(
  <View style={style.container}>
<IconInput placeholder={"Search on Coody"}
  value={search}
  icon={<FontAwesome6 name="location-dot" size={24} color={theme.colors.neutral["50"] }/>}
  onChangeText={setSearch}>
  </IconInput>
  <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginTop:35,gap:20,paddingLeft:10}}>
    <View style={{flexDirection:"row",alignItems:"center",gap:16,flex:1}}>
    <FontAwesome5 name="location-arrow" size={24} color={theme.colors.neutral["50"]} />
    <View style={{flexDirection:"column",gap:4,flex:1,justifyContent:"center"}}>
        <Text style={{fontSize:15,fontWeight:500,color:theme.colors.red["400"]}}>Delivery to</Text>
        <Text style={{fontSize:16,fontWeight:400,color:theme.colors.neutral["800"],fontFamily:"DMSans"}}>{"1014 Prospect Vall"}</Text>
    </View>
    </View>
           <Button icon={()=><Feather name="sliders" size={24} color={theme.colors.neutral["50"]} />} mode="contained" onPress={() => console.log('Pressed')}
                textColor={theme.colors.neutral["800"]}  
                style={{backgroundColor:theme.colors.neutral["42_card_list"],paddingRight:2}}
                 contentStyle={{
                      flexDirection: 'row',
                      justifyContent: 'flex-start', // 👈 Push icon and text to the start
                      alignItems: 'center',
                     
                      height: 50,
                    }}
                    labelStyle={{ fontSize:16 , fontWeight:500 }}>
              Filter
            </Button>
  </View>
  </View>
)
}
const style= StyleSheet.create({
  container: {
   alignContent:"center",
    backgroundColor: "white",
   width: "100%",
   padding:20,
   paddingTop:55,
   height:220,
   borderBottomLeftRadius:35,
   borderBottomRightRadius:35,

  }
})