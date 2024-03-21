import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../theme/theme';
import CardOrderList from './CardOrderList';

interface CardOrderProps {
  CartList: any;
  CartListPrice: any;
  OrderDate: any;
}
const CardOrder: React.FC<CardOrderProps> = ({
  CartList,
  CartListPrice,
  OrderDate,
}) => {
  return (
    <View style={styles.Card}>
      <View style={styles.CardContent}>
        <View style={styles.CardHeader}>
          <View>
            <Text style={styles.CardText}>Order Date</Text>
            <Text style={styles.CardDate}>{OrderDate}</Text>
          </View>
          <View style={styles.total}>
            <Text style={styles.CardText}>Total Amount</Text>
            <Text style={styles.CardPrice}>$ {CartListPrice}</Text>
          </View>
        </View>
        {CartList.map((data: any) => (
          <CardOrderList
            ItemPrice={data.ItemPrice}
            id={data.id}
            imagelink_square={data.imagelink_square}
            index={data.index}
            name={data.name}
            prices={data.prices}
            roasted={data.roasted}
            special_ingredient={data.special_ingredient}
            type={data.type}
          />
        ))}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  Card: {
    flex: 1,
  },
  CardContent: {
    padding: SPACING.space_24,
  },
  CardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  CardText: {
    color: COLORS.primaryWhiteHex,
    fontSize: FONTSIZE.size_18,
    fontFamily: FONTFAMILY.poppins_medium,
  },
  CardDate: {
    color: COLORS.primaryWhiteHex,
    fontSize: FONTSIZE.size_16,
    fontFamily: FONTFAMILY.poppins_light,
  },
  total: {
    alignItems: 'flex-end',
  },
  CardPrice: {
    color: COLORS.primaryOrangeHex,
    fontSize: FONTSIZE.size_16,
    fontFamily: FONTFAMILY.poppins_medium,
  },
});
export default CardOrder;
