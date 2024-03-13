import React from 'react';
import {View, ScrollView, StyleSheet, StatusBar} from 'react-native';
import {useStore} from '../store/store'; // Replace 'your-store-library' with the actual library you are using
import {COLORS} from '../theme/theme'; // Replace 'your-colors-file' with the actual file containing your color constants
import ImageBGInfo from '../components/ImageBGInfo';

const DetailsScreen = ({navigation, route}: any) => {
  const ItemofIndex = useStore((state: any) =>
    route.params.type === 'Coffee' ? state.CoffeeList : state.BeanList,
  )[route.params.index];

  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollviewFlex}>
        <ImageBGInfo
          EnableBackHandler={true}
          imagelink_portrait={ItemofIndex.imagelink_portrait}
          type={ItemofIndex.type}
          id={ItemofIndex.id}
          favourite={ItemofIndex.favourite}
          name={ItemofIndex.name}
          special_ingredient={ItemofIndex.special_ingredient}
          ingredients={ItemofIndex.ingredients}
          average_rating={ItemofIndex.average_rating}
          ratings_count={ItemofIndex.ratings_count}
          roasted={ItemofIndex.roasted}
          BackHandler={() => {}}
          ToggleFavourite={() => {}}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },
  ScrollviewFlex: {
    flexGrow: 1,
  },
});

export default DetailsScreen;
