import {StyleSheet, Text, View, ImageProps, ImageBackground} from 'react-native';
import React from 'react';

interface ImageBGInfoProps {
  EnableBackHandler: boolean;
  imagelink_portrait: ImageProps;
  type: string;
  id: string;
  favourite: boolean;
  name: string;
  special_ingredient: string;
  ingredients: string;
  average_rating: number;
  ratings_count: string;
  roasted: string;
  BackHandler?: any;
  ToggleFavourite: any;
}

const ImageBGInfo: React.FC<ImageBGInfoProps> = ({
  EnableBackHandler,
  imagelink_portrait,
  type,
  id,
  favourite,
  name,
  special_ingredient,
  ingredients,
  average_rating,
  ratings_count,
  roasted,
  BackHandler,
  ToggleFavourite,
}) => {
  return (
    <View>
      <ImageBackground source={imagelink_portrait}></ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({});
export default ImageBGInfo;
