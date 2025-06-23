import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
import theme from '@/app/theme/theme';
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';
import Review from '@/components/ui/ReviewCard';
import AntDesign from '@expo/vector-icons/AntDesign';

interface MenuItemProps {
  image: any;
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

const MenuItemHorizontal: React.FC<MenuItemProps> = ({ image, title, price, isCombo = false, isPopular = false }) => (
  <View style={[styles.menuItem, { flexDirection: 'row', maxWidth: 400, alignItems: 'center' }]}>
    <Image source={image} style={[styles.itemImage, { width: 90, height: 90 }]} />
    <View style={[styles.itemDetails, { gap: 10 }]}>
      <Text style={[styles.itemTitle, { width: '100%' }]}>{title}</Text>
      <View style={styles.row}>
        <Text style={[styles.itemPrice, { color: theme.colors.red['400'] }]}>{price}</Text>
        <Text style={styles.dot}>•</Text>
        <Text style={styles.comboText}>Burger</Text>
      </View>
    </View>
  </View>
);

const BurgerKingMenu: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState('Delivery');

  const popularItems = [
    {
      restaurantID: 3,
      id: 1,
      image: require('../../../assets/images/item.png'),
      title: 'Extreme cheese',
      price: '$5.99',
    },
    {
      restaurantID: 3,
      id: 2,
      image: require('../../../assets/images/item2.png'),
      title: 'Singles BBQ',
      price: '$7.99',
    },
    {
      id: 3,
      restaurantID: 3,
      image: require('../../../assets/images/item3.png'),
      title: 'Potato cheese',
      price: '$3.99',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View>
        <Image
          source={require('../../../assets/images/Cover Image.png')}
          style={styles.headerImage}
        />
        <View style={styles.headerInfo}>
          <View style={styles.row}>
            <Text style={styles.title}>Burger King</Text>
            <Ionicons name="shield-checkmark" size={18} color={theme.colors.green['400']} />
          </View>
          <View style={styles.row}>
            <Text
              style={[
                styles.status,
                { color: true ? theme.colors.green['400'] : theme.colors.red['400'] },
              ]}
            >
              {true ? 'Open' : 'Closed'}
            </Text>
            <Text style={styles.dot}>•</Text>
            <Text style={styles.subInfo}>1453 W Manchester Ave Los Angeles CA 90047</Text>
          </View>
          <View
            style={{
              backgroundColor: theme.colors.neutral['42_card_list'],
              width: '100%',
              height: 1,
              marginVertical: 10,
            }}
          ></View>
          <View style={styles.row}>
            <View style={styles.ratingBox}>
              <Ionicons name="star" size={12} color={theme.colors.neutral['00']} />
              <Text style={styles.ratingText}>4.5</Text>
            </View>
            <Text style={styles.dot}>•</Text>
            <View style={{justifyContent: 'center', alignItems: 'center',gap:2,flexDirection:"row"}}>
              <Ionicons name="time-sharp" size={16} color={theme.colors.neutral["500"]}  />
            <Text style={styles.subInfotwo}>15 min</Text>
            </View>
            <Text style={styles.dot}>•</Text>
            <Text style={styles.subInfotwo}><Feather name="dollar-sign" size={16} color={theme.colors.neutral["500"]} /> Free Shopping</Text>
          </View>
          <TouchableOpacity style={styles.discount}>
            <Feather name="percent" size={24} color={theme.colors.red['400']} />
            <Text style={styles.discountText}>Save $15.00 with code Total Dish</Text>
          </TouchableOpacity>
          <View
            style={{
              backgroundColor: theme.colors.neutral['42_card_list'],
              width: '100%',
              height: 1,
              marginVertical: 15,
            }}
          ></View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 10,
              borderBottomColor: '#f4f5f7',
              borderBottomWidth: 0.5,
              padding: 0,
            }}
          >
            {['Delivery', 'Review'].map((btn) => {
              const isActive = selectedTab === btn;
              return (
                <View
                  key={btn}
                  style={{
                    borderBottomWidth: isActive ? 2 : 0,
                    borderBottomColor: isActive ? '#EF9F27' : 'transparent',
                    padding: 0,
                  }}
                >
                  <Button
                    mode="text"
                    onPress={() => setSelectedTab(btn)}
                    style={{ backgroundColor: 'white', borderRadius: 0 }}
                    contentStyle={{ paddingHorizontal: 12, paddingVertical: 12 }}
                    labelStyle={{
                      color: isActive ? '#EF9F27' : theme.colors.neutral['800'],
                      fontWeight: '500',
                      fontSize: 18,
                    }}
                  >
                    {btn}
                  </Button>
                </View>
              );
            })}
          </View>
        </View>
      </View>
      {selectedTab === 'Delivery' && (
        <Animated.View entering={FadeIn.duration(300)} exiting={FadeOut.duration(300)}>
          <View style={{ flexDirection: 'column', paddingHorizontal: 10 }}>
            <Text style={styles.sectionTitle}>Popular Items</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingHorizontal: 0, gap: 16 }}
            >
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
          <View style={{ flexDirection: 'column', paddingHorizontal: 10 }}>
            <Text style={styles.sectionTitle}>Hot Burger Combo</Text>
            <MenuItemHorizontal
              image={require('../../../assets/images/menu.png')}
              title="Combo Spicy Tender"
              price="$10.15"
              isCombo
              isPopular
            />
            <MenuItemHorizontal
              image={require('../../../assets/images/menu.png')}
              title="Combo Tender Grill..."
              price="$10.15"
              isCombo
            />
            <MenuItemHorizontal
              image={require('../../../assets/images/menu.png')}
              title="Combo BBQ Bacon..."
              price="$10.15"
              isCombo
            />
            <Text style={styles.sectionTitle}>Fried Chicken</Text>
            <MenuItemHorizontal
              image={require('../../../assets/images/menuchicken.png')}
              title="Chicken BBQ"
              price="$10.15"
              isCombo
            />
            <MenuItemHorizontal
              image={require('../../../assets/images/menuchicken.png')}
              title="Combo Chicken Crispy..."
              price="$10.15"
              isCombo
            />
            <MenuItemHorizontal
              image={require('../../../assets/images/menuchicken.png')}
              title="Combo BBQ Bacon..."
              price="$10.15"
              isCombo
              isPopular
            />
          </View>
        </Animated.View>
      )}
      {selectedTab === 'Review' && (
        <Animated.View entering={FadeIn.duration(300)} exiting={FadeOut.duration(300)}>
          <View style={{ padding: 20, marginBottom: 40,gap:30 }}>
            <Review
              type="no-attach-photo"
              name="Bob Smith"
              stars={2}
              comment="Food was okay, but the service was slow. Expected better."
              likes={23}
              userId="u002"
              commentId="c002"
              date="2025-06-22 18:30"
              image={require('../../../assets/images/vector1.png')}
            />
                <Review
              type="no-attach-photo"
              name="Victoria Champain"
              stars={5}
              comment="Food, as always, is good both upstairs and downstairs is always clean (download the bk app for deals etc.) sit upstairs every time, more relaxed feel."
              likes={123}
              userId="u002"
              commentId="c002"
              date="2025-06-22 18:30"
              image={require('../../../assets/images/vector2.png')}
            />
                <Review
              type="no-attach-photo"
              name="Bob Smith"
              stars={2}
              comment="Amazing food. Lots of choice. We took a while to choose as everything sounded amazing on the menu! All cooked to perfection. Portions were large. Service excellent. Definitely plan to go again and often!"
              likes={23}
              userId="u002"
              commentId="c002"
              date="2025-06-22 18:30"
              image={require('../../../assets/images/vector3.png')}
            />
              <Review
              type="no-attach-photo"
              name="Bob Smith"
              stars={2}
              comment="Food was okay, but the service was slow. Expected better."
              likes={23}
              userId="u002"
              commentId="c002"
              date="2025-06-22 18:30"
              image={require('../../../assets/images/vector1.png')}
            />
            
          </View>
        </Animated.View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  headerImage: { width: '100%', height: 250, backgroundColor: '#808080', zIndex: 0 },
  headerInfo: {
    padding: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    zIndex: 10,
    marginTop: -40,
    gap: 10,
    shadowColor: '#000',
    backgroundColor: 'white',
  },
  restaurantName: { fontSize: 24, fontWeight: 'bold', color: '#000' },
  status: { fontSize: 14, color: '#666' },
  rating: { flexDirection: 'row', marginVertical: 5 },
  ratingText: { fontSize: 14, color: '#000' },
  discount: {
    backgroundColor: '#F4F5F7',
    padding: 12,
    flexDirection: 'row',
    gap: 20,
    borderRadius: 15,
    marginTop: 20,
  },
  discountText: {
    color: theme.colors.neutral['800'],
    fontSize: 16,
    textAlign: 'center',
  },
  deliveryReview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  deliveryText: { fontSize: 16, color: '#1e3a8a' },
  reviewText: { fontSize: 16, color: '#1e3a8a' },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    paddingVertical: 20,
    paddingHorizontal: 10,
    color: theme.colors.neutral['800'],
    backgroundColor: 'white',
  },
  menuItem: { flexDirection: 'column', padding: 10, maxWidth: 170 },
  itemImage: { width: 145, height: 145, marginRight: 10, borderRadius: 8 },
  itemDetails: { flex: 1 },
  itemTitle: {
    fontSize: 20,
    color: theme.colors.neutral['800'],
    fontWeight: '500',
  },
  itemPrice: {
    fontSize: 14,
    color: theme.colors.green['400'],
    fontWeight: '700',
  },
  comboText: {
    fontSize: 12,
    color: theme.colors.neutral['100'],
    fontWeight: '700',
  },
  popularText: {
    color: '#f5a623',
    fontSize: 18,
    position: 'absolute',
    right: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  title: {
    fontFamily: 'DMSans',
    color: theme.colors.neutral['800'],
    fontWeight: '700',
    fontSize: 24,
    letterSpacing: 0.4,
  },
  status: {
    fontFamily: 'DMSans',
    fontWeight: '500',
    fontSize: 13,
  },
  subInfo: {
    fontFamily: 'DMSans',
    color: theme.colors.neutral['100'],
    fontWeight: '500',
    fontSize: 13,
  },
  subInfotwo: {
    fontFamily: 'DMSans',
    color: theme.colors.neutral['800'],
    fontWeight: '700',
    fontSize: 14,
    textAlign:"center"
  },
  dot: {
    fontFamily: 'DMSans',
    color: theme.colors.neutral['100'],
    fontWeight: '500',
    textAlign: 'center',
    fontSize: 13,
  },
  ratingBox: {
    flexDirection: 'row',
    backgroundColor: theme.colors.red['400'],
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    width: 50,
    borderRadius: 10,
    padding: 6,
    paddingHorizontal: 12,
  },
  ratingText: {
    fontFamily: 'DMSans',
    color: theme.colors.neutral['00'],
    fontWeight: '500',
    fontSize: 13,
  },
});

export default BurgerKingMenu;