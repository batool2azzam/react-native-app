import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';
interface CardOrderListProps {
  ItemPrice: any;
  id: any;
  imagelink_square: any;
  index: any;
  name: any;
  prices: any;
  roasted: any;
  special_ingredient: any;
  type: any;
}
const CardOrderList: React.FC<CardOrderListProps> = ({
  ItemPrice,
  id,
  imagelink_square,
  index,
  name,
  prices,
  roasted,
  special_ingredient,
  type,
}) => {
  return (
    <View>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
        style={styles.CartItemSingleLinearGradient}>
        <View style={styles.CartItemRow}>
          <Image source={imagelink_square} style={styles.CartItemImage} />
          <View style={styles.CartItemInfo}>
            <View>
              <Text style={styles.CartItemTitle}>{name}</Text>
              <Text style={styles.CartItemSubtitle}>{special_ingredient}</Text>
            </View>
            <View style={styles.TotalItemPrice}>
              <Text style={styles.SizeCurrency}>
                $<Text style={styles.SizeText}> {ItemPrice}</Text>{' '}
              </Text>
            </View>
          </View>
        </View>

        {prices.map((data: any, index: any) => (
          <View key={index.toString()} style={styles.InfoRow}>
            <View style={styles.InfoRow}>
              <View style={styles.SizeBox}>
                <Text
                  style={[
                    styles.SizeText,
                    {
                      fontSize:
                        type == 'Bean' ? FONTSIZE.size_12 : FONTSIZE.size_16,
                    },
                  ]}>
                  {data.size}
                </Text>
              </View>
              <View style={styles.PriceBox}>
                <Text style={styles.Currency}>
                  {data.currency}
                  <Text style={styles.Price}> {data.price}</Text>
                </Text>
              </View>
            </View>

            <View style={styles.InfoRow}>
              <Text style={styles.QuantityPrice}>
                X <Text style={styles.Price}>{data.quantity}</Text>
              </Text>
              <Text style={styles.QuantityPrice}>
                $ {(data.quantity * data.price).toFixed(2)}
              </Text>
            </View>
          </View>
        ))}
      </LinearGradient>
    </View>
  );
};
const styles = StyleSheet.create({
  CartItemLinearGradient: {
    flex: 1,
    gap: SPACING.space_12,
    padding: SPACING.space_12,
    borderRadius: BORDERRADIUS.radius_25,
    marginTop: SPACING.space_12,
  },
  CartItemRow: {
    flexDirection: 'row',
    gap: SPACING.space_18,
    flex: 1,
    justifyContent: 'space-around',
  },
  CartItemImage: {
    height: 80,
    width: 80,
    objectFit: 'cover',
    borderRadius: BORDERRADIUS.radius_20,
  },
  CartItemSingleLinearGradient: {
    alignItems: 'center',
    padding: SPACING.space_12,
    gap: SPACING.space_12,
    borderRadius: BORDERRADIUS.radius_25,
    marginTop: SPACING.space_12,
  },
  InfoRow: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  CartItemInfo: {
    flex: 1,
    paddingVertical: SPACING.space_4,
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingTop: SPACING.space_15,
  },
  CartItemTitle: {
    fontFamily: FONTFAMILY.poppins_light,
    fontSize: FONTSIZE.size_20,
    color: COLORS.primaryWhiteHex,
  },
  CartItemSubtitle: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_12,
    color: COLORS.primaryWhiteHex,
  },

  CartItemSizeRowContainer: {
    flex: 1,
    alignItems: 'center',
    gap: SPACING.space_20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  SizeText: {
    fontFamily: FONTFAMILY.poppins_medium,
    color: COLORS.primaryWhiteHex,
    fontSize: FONTSIZE.size_20,
  },
  SizeCurrency: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_20,
    color: COLORS.primaryOrangeHex,
  },
  TotalItemPrice: {
    marginTop: SPACING.space_12,
  },
  SizeBox: {
    backgroundColor: COLORS.primaryBlackHex,
    height: 45,
    flex: 1,
    borderTopLeftRadius: BORDERRADIUS.radius_10,
    borderBottomLeftRadius: BORDERRADIUS.radius_10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  PriceBox: {
    backgroundColor: COLORS.primaryBlackHex,
    height: 45,
    flex: 1,
    borderTopRightRadius: BORDERRADIUS.radius_10,
    borderBottomRightRadius: BORDERRADIUS.radius_10,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: SPACING.space_2,
  },
  Currency: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_18,
    color: COLORS.primaryOrangeHex,
  },
  Price: {
    color: COLORS.primaryWhiteHex,
  },
  QuantityPrice: {
    flex: 1,
    textAlign: 'center',
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_18,
    color: COLORS.primaryOrangeHex,
  },
});
export default CardOrderList;
