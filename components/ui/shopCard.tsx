import { View, Image, Text, ImageSourcePropType, StyleSheet, Pressable } from "react-native";
import theme from "@/app/theme/theme";
import Ionicons from '@expo/vector-icons/Ionicons';

type PartnerCardProps = {
  image: ImageSourcePropType;
  name: string;
  isOpen: boolean;
  item:String[];
  key:number
  onPress?: () => void;
};

export default function shopCard({
  image,
  name,
  isOpen,
  item,
  key,
  onPress
}: PartnerCardProps) {
  return (
    <Pressable onPress={onPress}>
      <View style={{backgroundColor:"white",padding: 10, borderRadius: 12, gap: 10,width:164}}>
      <Image source={image} style={{ width: 141, height: 190, borderRadius: 12 }} />

      <View style={styles.row}>
        <Text style={styles.title}>{name}</Text>
        <Ionicons name="shield-checkmark" size={18} color={theme.colors.green["400"]} />
      </View>

      <View style={styles.row}>
        <Text style={[styles.status, { color: isOpen ? theme.colors.green["400"] : theme.colors.red["400"] }]}>
          {isOpen ? "Open" : "Closed"}
        </Text>
        {item.map((ite)=>(<><Text style={styles.dot}>•</Text><Text style={styles.subInfo}>{ite}</Text></>))}
      </View>

      
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
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
