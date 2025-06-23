import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Platform,
} from 'react-native';
import PropTypes from 'prop-types';
import AntDesign from '@expo/vector-icons/AntDesign';
import theme from '@/app/theme/theme'; 

interface Props {
  type: 'no-attach-photo' | 'attach-photo';
  name: string;
  stars: number;
  comment: string;
  likes: number;
  userId: string;
  commentId: string;
  date: string;
  image: any; // require() result
}

const Review: React.FC<Props> = ({
  type,
  name,
  stars,
  comment,
  likes,
  userId,
  commentId,
  date,
  image,
}) => {
  return (
    <View style={styles.review}>
      <View style={styles.frame}>
        <View style={styles.div}>
          <Image
            style={styles.image}
            source={image}
            resizeMode="cover"
          />
          <View style={styles.frame2}>
            <Text style={styles.name}>{name}</Text>
            <View style={styles.star}>
              {[...Array(Math.min(Math.max(stars, 0), 5))].map((_, index) => (
                <AntDesign
                  key={index}
                  name="star"
                  size={16}
                  color="#EF9F27"
                  style={styles.icon}
                />
              ))}
            </View>
          </View>
        </View>
        <Text style={styles.time}>{date}</Text>
      </View>

      <View style={styles.frame3}>
        <Text style={styles.text}>
          {comment}
          
        </Text>
        <View style={styles.frame4}>
          <View style={styles.frame5}>
            <AntDesign
              name="heart"
              size={20}
              color={type === 'no-attach-photo' ? '#EF9F27' : '#FF0000'}
              
            />
            <Text style={styles.time2}>{likes} likes</Text>
          </View>
         
        </View> 
             </View>

      {type === 'attach-photo' && (
        <View style={styles.frame6}>
          {[
            require('../../assets/images/vector1.png'), // Replace with actual path
            require('../../assets/images/vector1.png'), // Replace with actual path
            require('../../assets/images/vector1.png'), // Replace with actual path
            require('../../assets/images/vector1.png'), // Replace with actual path
            require('../../assets/images/vector1.png'), // Replace with actual path
          ].map((source, index) => (
            <Image
              key={index}
              style={styles.rectangle}
              source={source}
              resizeMode="cover"
            />
          ))}
          <Text style={styles.textWrapper}>+1</Text>
        </View>
      )}
                    <View style={{backgroundColor:theme.colors.neutral["42_card_list"],width:"100%",height:1,marginTop:10}}></View>

    </View>
  );
};

const styles = StyleSheet.create({
  review: {
    alignItems: 'flex-start',
    flexDirection: 'column',
    gap: 8,
    justifyContent: 'center',
    position: 'relative',
  },
  frame: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 305,
  },
  div: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    gap: 16,
  },
  image: {
    height: 50,
    width: 50,
  },
  frame2: {
    alignItems: 'flex-start',
    flexDirection: 'column',
    gap: 4,
    justifyContent: 'center',
  },
  name: {
    color: '#172B4D', // --neutral-800
    fontFamily: Platform.OS === 'ios' ? 'Helvetica' : 'sans-serif-medium',
    fontSize: 16,
    fontWeight: '500',
    letterSpacing: -0.2,
    lineHeight: 20,
    marginTop: -1,
  },
  star: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    gap: 1,
    paddingVertical: 2,
  },
  icon: {
    height: 16,
    width: 16,
  },
  time: {
    color: '#7A869A', // --neutral-100
    fontFamily: Platform.OS === 'ios' ? 'Helvetica' : 'sans-serif-medium',
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: -0.24,
    lineHeight: 20,
    marginTop: -1,
    textAlign: 'right',
  },
  frame3: {
    alignItems: 'flex-start',
    justifyContent:"center",
    flexDirection: 'column',
    gap: 4,
  },
  text: {
    color: '#172B4D', // --neutral-800
    fontFamily: Platform.OS === 'ios' ? 'Helvetica' : 'sans-serif',
    fontSize: 16,
    fontWeight: '500',
    letterSpacing: -0.24,
    lineHeight: 20,
    marginTop: -1,
    width: 305,
  },
  frame4: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop:10
  },
  frame5: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 6,
  },
  love: {
    height: 16,
    width: 16,
  },
  time2: {
    color: '#EF9F27', // --red-400
    fontFamily: Platform.OS === 'ios' ? 'Helvetica' : 'sans-serif-medium',
    fontSize: 16,
    fontWeight: '500',
    letterSpacing: -0.24,
    lineHeight: 20,
    marginTop: -1,
    textAlign: 'right',
  },
  flag: {
    height: 14,
    width: 14,
  },
  frame6: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    gap: 8,
    width: '100%',
    position: 'relative',
  },
  rectangle: {
    flex: 1,
    height: 56,
  },
  textWrapper: {
    color: '#FFFFFF',
    fontFamily: Platform.OS === 'ios' ? 'Helvetica' : 'sans-serif-medium',
    fontSize: 16,
    fontWeight: '500',
    letterSpacing: -0.24,
    lineHeight: 20,
    position: 'absolute',
    right: 35,
    top: 17,
    textAlign: 'center',
  },
});

Review.propTypes = {
  type: PropTypes.oneOf(['no-attach-photo', 'attach-photo']).isRequired,
  name: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired,
  comment: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  userId: PropTypes.string.isRequired,
  commentId: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  image: PropTypes.any.isRequired,
};

export default Review;