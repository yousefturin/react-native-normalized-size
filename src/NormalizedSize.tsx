/* eslint-disable prettier/prettier */


import { Dimensions } from 'react-native';

// Guideline sizes are based on a standard ~5" screen mobile device
const guidelineBaseWidth = 350;

/**
 * Scale a given size based on the device's width with moderation.
 * @param {number} inputSize - The size to be scaled.
 * @param {number} [factor=0.5] - The moderation factor.
 * @returns {number} The scaled size.
 * @example
 * ```tsx
 * import normalizedSize from 'react-native-normalized-size';
 * import {Text } from 'react-native';
 *
 * const MyComponent = () => {
 *   return (
 *       <Text 
 *          style={{ width: normalizedSize(20),
 *                   height: normalizedSize(20) }}>
 *          My Component
 *      </Text>
 *   );
 * };
 * ```
 */
const normalizedSize = (inputSize: number, factor: number = 0.5): number => {
    const { width } = Dimensions.get('window');
    const scale = (size: number): number => (width / guidelineBaseWidth) * size;
    return inputSize + (scale(inputSize) - inputSize) * factor;
};

export default normalizedSize;
