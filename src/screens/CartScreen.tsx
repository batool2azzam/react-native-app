import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useStore} from '../store/store';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {COLORS, SPACING} from '../theme/theme';
import HeaderBar from '../components/HeaderBar';
import EmptyListAnimation from '../components/EmptyListAnimation';
import PaymentFooter from '../components/PaymentFooter';
import CartItem from '../components/CartItem';

const CartScreen = ({navigation, route}: any) => {
  const CartList = useStore((state: any) => state.CartList);
  const CartPrice = useStore((state: any) => state.CartPrice);
  const incrementCartItemQuantity = useStore(
    (state: any) => state.incrementCartItemQuantity,
  );
  const decrementCartItemQuantity = useStore(
    (state: any) => state.decrementCartItemQuantity,
  );
  const calculateCartPrice = useStore((state: any) => state.calculateCartPrice);

  const tabBarHight = useBottomTabBarHeight();

  const incrementCartItemQuantityHandler = (id: any, size: any) => {
    incrementCartItemQuantity(id, size);
    calculateCartPrice();
  };
  const decrementCartItemQuantityHandler = (id: any, size: any) => {
    decrementCartItemQuantity(id, size);
    calculateCartPrice();
  };

  const buttonPressHandler = () => {
    navigation.push('Payment',{amount:CartPrice});
  };
  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollviewFlex}>
        <View style={styles.ScrollViewInnerView}>
          <View style={styles.ItemContainer}>
            <HeaderBar title="Cart" />
            {CartList.length === 0 ? (
              <EmptyListAnimation title={'Cart is Empty'} />
            ) : (
              <View>
                {CartList.map((data: any) => (
                  <TouchableOpacity
                    onPress={() => {
                      navigation.push('Details', {
                        index: data.index,
                        id: data.id,
                        type: data.type,
                      });
                    }}
                    key={data.id}>
                    <CartItem
                      id={data.id}
                      name={data.name}
                      imagelink_square={data.imagelink_square}
                      special_ingredient={data.special_ingredient}
                      roasted={data.roasted}
                      prices={data.prices}
                      type={data.type}
                      incrementCartItemQuantityHandler={
                        incrementCartItemQuantityHandler
                      }
                      decrementCartItemQuantityHandler={
                        decrementCartItemQuantityHandler
                      }
                    />
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>
        </View>
        {CartList.length != 0 ? (
          <PaymentFooter
            price={{price: CartPrice, currency: '$'}}
            buttonPressHandler={buttonPressHandler}
            buttonTitle={'Pay'}></PaymentFooter>
        ) : (
          <></>
        )}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
    paddingBottom: SPACING.space_32 * 2,
  },
  ScrollviewFlex: {
    flexGrow: 1,
  },
  ScrollViewInnerView: {
    flex: 1,
    justifyContent: 'space-between',
  },
  ItemContainer: {
    flex: 1,
  },
});
export default CartScreen;
