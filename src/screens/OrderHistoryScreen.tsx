import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import HeaderBar from '../components/HeaderBar';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';
import {useStore} from '../store/store';
import CardOrder from '../components/CardOrder';
import EmptyListAnimation from '../components/EmptyListAnimation';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';

const OrderHistory = () => {
  const CartListPrice = useStore((state: any) => state.CartPrice);
  const OrderHistoryList = useStore((state: any) => state.OrderHistoryList);
  const [showAnimation, setShowAnimation] = useState(false);
  const tabBarHeight = useBottomTabBarHeight();
  // console.log(CartListPrice);
  // console.log(OrderHistoryList[1].CartList);

  const buttonPressHandler = () => {
    setShowAnimation(true);
    setTimeout(() => {
      setShowAnimation(false);
    }, 2000);
  };
  return (
    <View style={styles.Container}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.ScrollStyle}>
        <View style={styles.ItemContainer}>
          <HeaderBar title="Order History" />
          <View style={styles.ItemContainer}>
            {OrderHistoryList != 0 ? (
              <View>
                {OrderHistoryList.map((data: any) => (
                  <CardOrder
                    CartList={data.CartList}
                    CartListPrice={data.CartListPrice}
                    OrderDate={data.OrderDate}
                  />
                ))}
              </View>
            ) : (
              <EmptyListAnimation title="No Order History" />
            )}
          </View>
          {OrderHistoryList.length > 0 ? (
            <TouchableOpacity
              style={styles.DownloadButton}
              onPress={() => {
                buttonPressHandler();
              }}>
              <Text style={styles.ButtonText}>Download</Text>
            </TouchableOpacity>
          ) : (
            <></>
          )}
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  Container: {
    backgroundColor: COLORS.primaryBlackHex,
    flex: 1,
    paddingBottom: SPACING.space_32 * 2,
  },
  ScrollStyle: {
    flexGrow: 1,
  },
  ItemContainer: {
    flex: 1,
  },
  DownloadButton: {
    margin: SPACING.space_20,
    backgroundColor: COLORS.primaryOrangeHex,
    alignItems: 'center',
    justifyContent: 'center',
    height: SPACING.space_36 * 2,
    borderRadius: BORDERRADIUS.radius_20,
  },
  ButtonText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_18,
    color: COLORS.primaryWhiteHex,
  },
});
export default OrderHistory;
