// normalizedSize.test.tsx

/* eslint-disable prettier/prettier */

import { Dimensions } from 'react-native';
import normalizedSize from '../NormalizedSize';

describe('normalizedSize', () => {
    beforeAll(() => {
        Dimensions.get = jest.fn().mockReturnValue({ width: 400 });
    });

    it('should scale size correctly with default factor', () => {
        const inputSize = 100;
        const guidelineBaseWidth = 350;
        const expectedSizeScale = (400 / guidelineBaseWidth) * 100;
        const expectedSize = 100 + (expectedSizeScale - 100) * 0.5;
        expect(normalizedSize(inputSize)).toBeCloseTo(expectedSize);
    });

    it('should scale size correctly with custom factor', () => {
        const inputSize = 100;
        const factor = 0.8;
        const guidelineBaseWidth = 350;
        const expectedSizeScale = (400 / guidelineBaseWidth) * 100;
        const expectedSize = 100 + (expectedSizeScale - 100) * factor;
        expect(normalizedSize(inputSize, factor)).toBeCloseTo(expectedSize);
    });

    afterAll(() => {
        jest.resetAllMocks();
    });
});

