import theme from '@/app/theme/theme';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useState } from 'react';
import { Animated, Easing, Image, StyleSheet, Text, View, Pressable } from 'react-native';
import { Button } from 'react-native-paper';
import Slider from '@react-native-community/slider';
import IconInput from './IconInput';
import PrimaryButton from './primaryButon';

const filterOptions = [
  { label: 'Recommended', icon: <FontAwesome name="bookmark" size={24} color={theme.colors.neutral["50"]} /> },
  { label: 'Fastest Delivery', icon: <Ionicons name="time" size={24} color={theme.colors.neutral["50"]} /> },
  { label: 'Most Popular', icon: <FontAwesome5 name="fire" size={24} color={theme.colors.neutral["50"]} /> },
];

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const [selectedTab, setSelectedTab] = useState("Category");
  const [filterVisible, setFilterVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedRec, setSelectedRec] = useState('Recommended');
  const [priceValue, setPriceValue] = useState(5);

  const slideAnim = useState(new Animated.Value(0))[0];

  const toggleFilter = () => {
    setFilterVisible(prev => !prev);
    Animated.timing(slideAnim, {
      toValue: filterVisible ? 0 : 1,
      duration: 300,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start();
  };

  const Category = [
    { name: "Sandwich" },
    { name: "Pizza" },
    { name: "Burger" }
  ];

  const categoryImages = {
    Pizza: require('../../assets/images/pizza.png'),
    Burger: require('../../assets/images/Burger.png'),
    Sandwich: require('../../assets/images/sandwich.png'),
  };

  const handleComplete = () => {
    console.log({ selectedCategory, selectedRec, priceValue });
    toggleFilter();
  };

  const translateY = slideAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [-500, 0],
  });

  return (
    <View style={style.container}>
      <IconInput
        placeholder="Search on Coody"
        value={search}
        icon={<FontAwesome6 name="location-dot" size={24} color={theme.colors.neutral["50"]} />}
        onChangeText={setSearch}
      />

      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 10, gap: 20, paddingLeft: 10 }}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 16, flex: 1 }}>
          <FontAwesome5 name="location-arrow" size={24} color={theme.colors.neutral["50"]} />
          <View style={{ flexDirection: "column", gap: 4, flex: 1, justifyContent: "center" }}>
            <Text style={{ fontSize: 15, fontWeight: '500', color: theme.colors.red["400"] }}>Delivery to</Text>
            <Text style={{ fontSize: 16, fontWeight: '400', color: theme.colors.neutral["800"], fontFamily: "DMSans" }}>
              1014 Prospect Vall
            </Text>
          </View>
        </View>
        <Button
          icon={() => <Feather name="sliders" size={24} color={theme.colors.neutral["50"]} />}
          mode="contained"
          onPress={toggleFilter}
          textColor={theme.colors.neutral["800"]}
          style={{ backgroundColor: theme.colors.neutral["42_card_list"], paddingRight: 2 }}
          contentStyle={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', height: 50 }}
          labelStyle={{ fontSize: 16, fontWeight: '500' }}
        >
          Filter
        </Button>
      </View>

      {filterVisible && (
        <Animated.View style={{ transform: [{ translateY }], marginTop: 20 }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: 10, borderBottomColor: "#f4f5f7", borderBottomWidth: 0.5 }}>
            {["Category", "Sort by", "Price"].map((btn) => {
              const isActive = selectedTab === btn;
              return (
                <View key={btn} style={{ borderBottomWidth: isActive ? 2 : 0, borderBottomColor: isActive ? '#EF9F27' : 'transparent' }}>
                  <Button
                    mode="text"
                    onPress={() => setSelectedTab(btn)}
                    style={{ backgroundColor: 'white', borderRadius: 0 }}
                    contentStyle={{ paddingHorizontal: 10, paddingVertical: 4 }}
                    labelStyle={{ color: isActive ? '#EF9F27' : theme.colors.neutral["800"], fontWeight: '500' }}
                  >
                    {btn}
                  </Button>
                </View>
              );
            })}
          </View>

          {selectedTab === "Category" && (
            <View style={{ flexDirection: "row", gap: 22, marginTop: 20, justifyContent: "center" }}>
              {Category.map((item, index) => {
                const isSelected = selectedCategory === item.name;
                return (
                  <Pressable key={index} onPress={() => setSelectedCategory(item.name)}>
                    <View style={{ justifyContent: "center", alignItems: "center" }}>
                      <View style={{
                        backgroundColor: "#FFFAE5",
                        borderRadius: 100,
                        width: 100,
                        height: 100,
                        alignItems: "center",
                        justifyContent: "center",
                        borderWidth: isSelected ? 2 : 0,
                        borderColor: isSelected ? '#EF9F27' : 'transparent',
                      }}>
                        <Image
                          source={categoryImages[item.name]}
                          style={{ width: 50, height: 50, resizeMode: "contain" }}
                        />
                      </View>
                      <Text style={{ color: theme.colors.neutral["800"], fontWeight: '500', fontSize: 14 }}>{item.name}</Text>
                    </View>
                  </Pressable>
                );
              })}
            </View>
          )}

          {selectedTab === "Sort by" && (
            <View style={{ flexDirection: "column", gap: 20, marginTop: 20 }}>
              {filterOptions.map((option) => {
                const isSelected = selectedRec === option.label;
                return (
                  <View key={option.label} style={{ position: 'relative', justifyContent: 'center' }}>
                    <Button
                      mode="contained"
                      onPress={() => setSelectedRec(option.label)}
                      textColor={theme.colors.neutral["800"]}
                      style={{ backgroundColor: theme.colors.neutral["42_card_list"], paddingRight: 2 }}
                      contentStyle={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', height: 50 }}
                      labelStyle={{ fontSize: 16, fontWeight: '400', marginLeft: 8 }}
                      icon={() => <View style={{ marginRight: 25 }}>{option.icon}</View>}
                    >
                      {option.label}
                    </Button>
                    {isSelected && (
                      <AntDesign
                        name="checkcircle"
                        size={20}
                        color={theme.colors.neutral["50"]}
                        style={{ position: 'absolute', right: 16, top: '50%', transform: [{ translateY: -10 }] }}
                      />
                    )}
                  </View>
                );
              })}
            </View>
          )}

          {selectedTab === "Price" && (
            <View style={{ padding: 20, backgroundColor: '#f5f6fa', borderRadius: 16, marginTop: 20 }}>
              <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#1b2d45', marginBottom: 12 }}>
                Max Delivery Fee
              </Text>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 }}>
                <Text style={{ fontSize: 16 }}>${priceValue.toFixed(2)}</Text>
                <Text style={{ fontSize: 16 }}>$10.00</Text>
              </View>
              <Slider
                minimumValue={0}
                maximumValue={10}
                value={priceValue}
                onValueChange={setPriceValue}
                minimumTrackTintColor="#EF9F27"
                maximumTrackTintColor="#e0e0e0"
                thumbTintColor="#EF9F27"
              />
            </View>
          )}

          <View style={{ justifyContent: "center", alignItems: "center", width: "100%", marginVertical: 20 }}>
            <PrimaryButton text='Complete' onPress={handleComplete} />
          </View>
        </Animated.View>
      )}
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    alignContent: "center",
    backgroundColor: "white",
    width: "100%",
    padding: 20,
    gap: 24,
    paddingTop: 55,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
  },
});
