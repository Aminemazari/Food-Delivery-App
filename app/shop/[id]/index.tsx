import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import theme from '@/app/theme/theme';
import Ionicons from '@expo/vector-icons/Ionicons';
interface MenuItemProps {
  image: string;
  title: string;
  price: string;
  isCombo?: boolean;
  isPopular?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({ image, title, price, isCombo = false, isPopular = false }) => (
  <View style={styles.menuItem}>
    <Image source={image} style={styles.itemImage} />
    <View style={styles.itemDetails}>
      <Text style={styles.itemTitle}>{title}</Text>
      <View style={styles.row}>
        <Text style={styles.itemPrice}>{price}</Text>
        <Text style={styles.dot}>•</Text>
        <Text style={styles.comboText}>Burger</Text>
     </View>
    </View>
  </View>
);

const BurgerKingMenu: React.FC = () => {
  const popularItems = [
  {
    id: 1,
    image: require('../../../assets/images/item.png'),
    title: 'Extreme cheese ',
    price: '$5.99',
  },
  {
    id: 2,
    image: require('../../../assets/images/item2.png'),
    title: 'Singles BBQ ',
    price: '$7.99',
  },
  {
    id: 3,
    image: require('../../../assets/images/item3.png'),
    title: 'Potato cheese',
    price: '$3.99',
  },
];

  return (
    <ScrollView style={styles.container}>
      <Image
        source={require('../../../assets/images/Cover Image.png')} // Using local image path
        style={styles.headerImage}
      />
      <View style={styles.headerInfo}>
        <Text style={styles.restaurantName}>Burger King</Text>
        <Text style={styles.status}>✓ Open - 1453 W Manchester Ave Los Angeles CA 90047</Text>
        
      <View style={styles.row}>
        
        <View style={styles.ratingBox}>
          <Ionicons name="star" size={12} color={theme.colors.neutral["00"]} />
          <Text style={styles.ratingText}>{"4.5"}</Text>
        </View>

        <Text style={styles.dot}>•</Text>
        <Text style={styles.subInfo}>{"15 min"}</Text>
        <Text style={styles.dot}>•</Text>
        <Text style={styles.subInfo}>{"Free Shopping"}</Text>
      </View>
        <View style={styles.rating}>
          <Text style={styles.ratingText}>★ 4.1</Text>
          <Text style={styles.ratingText}> • 15 Mins • $ Free shipping</Text>
        </View>
        <TouchableOpacity style={styles.discount}>
          <Text style={styles.discountText}>Save $15.00 with code Total Dish</Text>
        </TouchableOpacity>
        <View style={styles.deliveryReview}>
          <Text style={styles.deliveryText}>Delivery</Text>
          <Text style={styles.reviewText}>Review</Text>
        </View>
      </View>
      <View style={{ flexDirection: 'column', paddingHorizontal: 10 }}>
      

      <Text style={styles.sectionTitle}>Popular Items</Text>
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 10, gap: 16 }}>
        {popularItems.map((item) => (
          <MenuItem
            key={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
          />
        ))}
    </ScrollView>
      </View>
      
      <Text style={styles.sectionTitle}>Hot Burger Combo</Text>
      <MenuItem image={require('../../../assets/images/item.png')} title="Combo Spicy Tender" price="$10.15" isCombo isPopular />
      <MenuItem image={require('../../../assets/images/item.png')} title="Combo Tender Grill..." price="$10.15" isCombo />
      <MenuItem image={require('../../../assets/images/item.png')} title="Combo BBQ Bacon..." price="$10.15" isCombo />

      <Text style={styles.sectionTitle}>Fried Chicken</Text>
      <MenuItem image={require('../../../assets/images/item.png')} title="Chicken BBQ" price="$10.15" isCombo />
      <MenuItem image={require('../../../assets/images/item.png')} title="Combo Chicken Crispy..." price="$10.15" isCombo />
      <MenuItem image={require('../../../assets/images/item.png')} title="Combo BBQ Bacon..." price="$10.15" isCombo isPopular />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  headerImage: { width: '100%', height: 200, backgroundColor: '#808080' },
  headerInfo: { padding: 10 },
  restaurantName: { fontSize: 24, fontWeight: 'bold', color: '#000' },
  status: { fontSize: 14, color: '#666', marginTop: 5 },
  rating: { flexDirection: 'row', marginVertical: 5 },
  ratingText: { fontSize: 14, color: '#000' },
  discount: { backgroundColor: '#f5a623', padding: 10, borderRadius: 5, marginVertical: 5 },
  discountText: { color: '#fff', textAlign: 'center' },
  deliveryReview: { flexDirection: 'row', justifyContent: 'space-between', padding: 10, borderBottomWidth: 1, borderBottomColor: '#ddd' },
  deliveryText: { fontSize: 16, color: '#1e3a8a' },
  reviewText: { fontSize: 16, color: '#1e3a8a' },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', padding: 10, color: theme.colors.neutral["800"], backgroundColor: '#f9f9f9' },
  menuItem: { flexDirection: 'column', padding: 10,maxWidth:170 },
  itemImage: { width: 145, height: 145, marginRight: 10, borderRadius: 8 },
  itemDetails: { flex: 1 },
  itemTitle: { fontSize: 20, color: theme.colors.neutral["800"],fontWeight: '500'},
  itemPrice: { fontSize: 14, color: theme.colors.green["400"], marginTop: 2 },
  comboText: { fontSize: 12, color: theme.colors.neutral["100"], marginTop: 2 },
  popularText: { color: '#f5a623', fontSize: 18, position: 'absolute', right: 10 },
  
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 10,
  },
  title: {
    fontFamily: 'DMSans',
    color: theme.colors.neutral["800"],
    fontWeight: '500',
    fontSize: 20,
    letterSpacing: 0.4,
  },
  status: {
    fontFamily: 'DMSans',
    fontWeight: '500',
    fontSize: 13,
  },
  subInfo: {
    fontFamily: 'DMSans',
    color: theme.colors.neutral["100"],
    fontWeight: '500',
    fontSize: 13,
  },
  dot: {
    fontFamily: 'DMSans',
    color: theme.colors.neutral["100"],
    fontWeight: '500',
    textAlign:"center",
    fontSize: 13,
  },
  ratingBox: {
    flexDirection: 'row',
    backgroundColor: theme.colors.red["400"],
    alignItems: 'center',
    justifyContent: "center",
    gap: 4,
    width: 50,
    borderRadius: 10,
    padding: 4,
  },
  ratingText: {
    fontFamily: 'DMSans',
    color: theme.colors.neutral["00"],
    fontWeight: '500',
    fontSize: 13,
  },
});

export default BurgerKingMenu;