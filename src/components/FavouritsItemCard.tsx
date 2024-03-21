import {
  ImageProps,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';
import LinearGradient from 'react-native-linear-gradient';
import ImageBGInfo from './ImageBGInfo';

interface FavouritsItemCardProps {
  id: string;
  imagelink_portrait: ImageProps;
  name: string;
  special_ingredient: string;
  type: string;
  ingredients: string;
  average_rating: number;
  ratings_count: string;
  roasted: string;
  description: string;
  favourite: boolean;
  ToggleFavouriteItem: any;
}
const FavouritsItemCard: React.FC<FavouritsItemCardProps> = ({
  id,
  imagelink_portrait,
  name,
  special_ingredient,
  type,
  ingredients,
  average_rating,
  ratings_count,
  roasted,
  description,
  favourite,
  ToggleFavouriteItem,
}) => {
  const [fullDesc, setFullDesc] = useState(false);
  return (
    <View style={styles.CardContainer}>
      <ImageBGInfo
        EnableBackHandler={false}
        imagelink_portrait={imagelink_portrait}
        type={type}
        id={id}
        favourite={favourite}
        name={name}
        special_ingredient={special_ingredient}
        ingredients={ingredients}
        average_rating={average_rating}
        ratings_count={ratings_count}
        roasted={roasted}
        ToggleFavourite={ToggleFavouriteItem}
      />

      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
        style={styles.ContainerLinearGradient}>
        <Text style={styles.DescriptionTitle}>Description</Text>
        {fullDesc ? (
          <TouchableWithoutFeedback
            onPress={() => {
              setFullDesc(prev => !prev);
            }}>
            <Text style={styles.DescriptionText}>{description}</Text>
          </TouchableWithoutFeedback>
        ) : (
          <TouchableWithoutFeedback
            onPress={() => {
              setFullDesc(prev => !prev);
            }}>
            <Text numberOfLines={3} style={styles.DescriptionText}>
              {description}
            </Text>
          </TouchableWithoutFeedback>
        )}
      </LinearGradient>
    </View>
  );
};

export default FavouritsItemCard;

const styles = StyleSheet.create({
  CardContainer: {
    borderRadius: BORDERRADIUS.radius_15 * 2,
    overflow: 'hidden',
    marginTop: SPACING.space_8,
    marginBottom: SPACING.space_8,
  },
  ContainerLinearGradient: {
    gap: SPACING.space_10,
    padding: SPACING.space_20,
  },
  DescriptionTitle: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_16,
    color: COLORS.secondaryLightGreyHex,
  },
  DescriptionText: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryWhiteHex,
  },
});
