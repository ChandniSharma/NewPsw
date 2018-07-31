import React, { Component } from 'react';

import {View, Text, StyleSheet, TextInput,TouchableOpacity,Platform} from 'react-native';

import Carousel, { getInputRangeFromIndexes } from 'react-native-snap-carousel';

function stackScrollInterpolator (index, carouselProps) {
    const range = [1, 0, -1, -2, -3];
    const inputRange = getInputRangeFromIndexes(range, index, carouselProps);
    const outputRange = range;
    return { inputRange, outputRange };
}

function stackAnimatedStyles (index, animatedValue, carouselProps) {
    const sizeRef = carouselProps.vertical ? carouselProps.itemHeight : carouselProps.itemWidth;
    const mainTranslateProp = carouselProps.vertical ? 'translateY' : 'translateX';
    const secondaryTranslateProp = carouselProps.vertical ? 'translateX' : 'translateY';

    const cardOffset = 9;
    const card1Scale = 0.96;
    const card2Scale = 0.92;
    const card3Scale = 0.88;
    const peekingCardsOpacity = Platform.OS === 'android' ? 0.92 : 1;

    const getMainTranslateFromScale = (cardIndex, scale) => {
        const centerFactor = 1 / scale * cardIndex;
        return -Math.round(sizeRef * centerFactor);
    };

    const getSecondaryTranslateFromScale = (cardIndex, scale) => {
        return Math.round(cardOffset * Math.abs(cardIndex) / scale);
    };

    return {
        opacity: animatedValue.interpolate({
            inputRange: [-3, -2, -1, 0, 1],
            outputRange: [0, peekingCardsOpacity, peekingCardsOpacity, 1, 0],
            extrapolate: 'clamp'
        }),
        transform: [{
            scale: animatedValue.interpolate({
                inputRange: [-3, -2, -1, 0],
                outputRange: [card3Scale, card2Scale, card1Scale, 1],
                extrapolate: 'clamp'
            })
        }, {
            rotate: animatedValue.interpolate({
                inputRange: [0, 1],
                outputRange: ['0deg', '22deg'],
                extrapolate: 'clamp'
            })
        }, {
            [mainTranslateProp]: animatedValue.interpolate({
                inputRange: [-3, -2, -1, 0, 1],
                outputRange: [
                    getMainTranslateFromScale(-3, card3Scale),
                    getMainTranslateFromScale(-2, card2Scale),
                    getMainTranslateFromScale(-1, card1Scale),
                    0,
                    sizeRef * 1.1
                ],
                extrapolate: 'clamp'
            })
        }, {
            [secondaryTranslateProp]: animatedValue.interpolate({
                inputRange: [-3, -2, -1, 0],
                outputRange: [
                    getSecondaryTranslateFromScale(-3, card3Scale),
                    getSecondaryTranslateFromScale(-2, card2Scale),
                    getSecondaryTranslateFromScale(-1, card1Scale),
                    0
                ],
                extrapolate: 'clamp'
            })
        }]
    };
}

const myCarousel = (
    <Carousel
      scrollInterpolator={stackScrollInterpolator}
      slideInterpolatedStyle={stackAnimatedStyles}
      useScrollView={true} // <--- Use this for a better effect or disable it to get performance optimizations
    />
);