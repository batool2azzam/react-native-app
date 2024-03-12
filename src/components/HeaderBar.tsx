import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { COLORS, FONTSIZE, SPACING } from '../theme/theme';
import GradientBGIcon from './GradientBGIcon';
import ProfilePic from './ProfilePic';

interface HeaderBarProps {
    title?: string;
}

const HeaderBar: React.FC<HeaderBarProps> = ({ title }) => {
    return (
        <View style={styles.HeaderContainer}>
            <GradientBGIcon name='menu' color={COLORS.primaryLightGreyHex} size={FONTSIZE.size_16} />
            <Text style={styles.HeaderText}>{title}</Text>
            <ProfilePic />
        </View>
    );
};

const styles = StyleSheet.create({
    HeaderContainer: {
        padding: SPACING.space_10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    HeaderText: {
        fontFamily: 'IONIT AMITY, poppins_semihold', // Fixed font family
        fontSize: FONTSIZE.size_20,
        color: COLORS.primaryWhiteHex,
    },
});

export default HeaderBar;
