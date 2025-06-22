import { StyleSheet ,View,Text,ScrollView} from 'react-native';
import { Button } from 'react-native-paper';
import SearchBar from '@/components/ui/SearchBar';
import theme from '../theme/theme';
import { Link } from 'expo-router';
import PartnerCard from '@/components/ui/PartnerCard';
import ShopCard from '@/components/ui/shopCard';
export default function HomeScreen() {
 
  const handelthisPartnerCardPress = () => {
    console.log("Partner Card Pressed");
  };
  return (
  <ScrollView   showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }} >
    <View style={{flex: 1,gap: 10,backgroundColor: theme.colors.neutral["42_card_list"]}}>
    <SearchBar></SearchBar>
    <View style={{backgroundColor:"white",marginRight:15,marginLeft:15,padding:10,borderRadius:15,gap:15}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 10}}>
        <Text  style={{ color: theme.colors.neutral["800"],fontFamily: 'DMSans', fontWeight:"700",fontSize:16 }}>Best Partners</Text>
        <Link href="/explore" style={{ color: theme.colors.neutral["800"],fontSize:14,fontWeight:"700",fontFamily: 'DMSans' }}>
         See all
        </Link>
      </View>
      <View style={{backgroundColor:theme.colors.neutral["42_card_list"],width:"100%",height:1}}></View>
  <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 10, gap: 20, paddingBottom: 10 }}
        >
          <PartnerCard
            image={require('../../assets/images/subway.png')}
            name="Subway"
            isOpen={true}
            location="Santa Nella"
            distance="1.5km"
            review={4.5}
            shipping="Free shipping"
            onPress={handelthisPartnerCardPress}
          />

          <PartnerCard
            image={require('../../assets/images/tacobell.png')}
            name="Taco Bell"
            isOpen={false}
            location="Santa Nella"
            distance="0.2km"
            review={4.5}
            shipping="Free shipping"
          />
            <PartnerCard
            image={require('../../assets/images/burgerking.png')}
            name="Burger King"
            isOpen={true}
            location="Santa Nella"
            distance="2km"
            review={3.5}
            shipping="Free shipping"
          />
          <PartnerCard
            image={require('../../assets/images/macdo.png')}
            name="macdonalds"
            isOpen={true}
            location="Santa Nella"
            distance="2km"
            review={4.5}
            shipping="Free shipping"
          />
          
          
        </ScrollView>
  </View>
  <View style={{flexWrap: 'wrap', flexDirection: 'row',justifyContent: 'space-between', padding: 15,gap:10}}>
  <ShopCard image={require('../../assets/images/star1.png')}
  key={1}
  name="Starbucks"
  isOpen={true}
  item={["cofee"]}
  ></ShopCard>
  <ShopCard image={require('../../assets/images/subway1.png')}
  key={2}

name="Subway"
  isOpen={true}
  item={["cofee"]}
  ></ShopCard>
  <ShopCard image={require('../../assets/images/burgerking1.png')}
  name="Burger king"
    key={2}

  isOpen={true}
  item={["Fast food"]}
  ></ShopCard>
  <ShopCard image={require('../../assets/images/macdo1.png')}
  name="MacDonalds"
    key={3}

  isOpen={true}
  item={["Fast food"]}
  ></ShopCard>
  </View>

  </View>

  </ScrollView>
   
  );
}

const styles = StyleSheet.create({
  input: {

  },
});
