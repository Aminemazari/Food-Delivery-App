import { StyleSheet ,View,Text,ScrollView} from 'react-native';
import { Button } from 'react-native-paper';
import SearchBar from '@/components/ui/SearchBar';
import theme from '../theme/theme';
import { Link } from 'expo-router';
import PartnerCard from '@/components/ui/PartnerCardBig';
import ShopCard from '@/components/ui/shopCard';

export default function HomeScreen() {
 
  const handelthisPartnerCardPress = () => {
    console.log("Partner Card Pressed");
  };
const partners = [
  {
    id: 1,
    image: require('../../assets/images/subway.png'),
    name: 'Subway',
    isOpen: true,
    item: ["Coffee","Tea","Cake"],
    distance: '1.5km',
    review: 4.5,
    shipping: 'Free shipping',
  },
  {
    id: 2,
    image: require('../../assets/images/tacobell.png'),
    name: 'Taco Bell',
    isOpen: false,
    item: ["Coffee","Tea","Cake"],
    distance: '0.2km',
    review: 4.5,
    shipping: 'Free shipping',
  },
  {
    id: 3,
    image: require('../../assets/images/berger2.png'),
    name: 'Burger King',
    isOpen: true,
    item: ["Coffee","Tea","Cake"],
    distance: '2km',
    review: 3.5,
    shipping: 'Free shipping',
  },
  {
    id: 4,
    image: require('../../assets/images/macdo.png'),
    name: 'MacDonalds',
    isOpen: true,
    item: ["Coffee","Tea","Cake"],
    distance: '2km',
    review: 4.5,
    shipping: 'Free shipping',
  },
   {
    id: 5,
    image: require('../../assets/images/starbucks.png'),
    name: 'Starbucks',
    isOpen: true,
    item: ["Coffee","Tea","Cake"],
    distance: '2km',
    review: 4.5,
    shipping: 'Free shipping',
  },
];
return (
   <ScrollView
    
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={{paddingBottom:20,backgroundColor:"white+"}}
  >
    
    <View style={{ gap: 20,paddingTop:100,borderRadius:12, backgroundColor:"white"}}>

    <Text  style={{ color: theme.colors.neutral["800"],fontFamily: 'DMSans', fontWeight:"700",fontSize:19 ,textAlign:"center"}}>Best Partners</Text>
    <View style={{backgroundColor:theme.colors.neutral["42_card_list"],width:"100%",height:1}}></View>
    {partners.map((partner) => (
      <PartnerCard
        key={partner.id}
        image={partner.image}
        name={partner.name}
        isOpen={partner.isOpen}
        item={partner.item || []}
        distance={partner.distance}
        review={partner.review}
        shipping={partner.shipping}
      />
    ))}
    
    </View>
  </ScrollView>
)}