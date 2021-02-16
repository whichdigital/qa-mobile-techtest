import { isMultipleOf, getAccessibilityState } from './utils';

describe('isMultipleOf()', () => {
    it('should be able to compute multiples', () => {
        expect(isMultipleOf(0, null)).toBeFalsy();
        expect(isMultipleOf(19, 5)).toBeFalsy();
        expect(isMultipleOf(20, 5)).toBeTruthy();
    });
});

describe('getAccessibilityState()', () => {
    it('should be able to determine the accessibility state', () => {
        expect(getAccessibilityState(0, null)).toEqual({});
        expect(getAccessibilityState(19, 5)).toEqual({});
        expect(getAccessibilityState(20, 5)).toEqual({ checked: true });
        expect(getAccessibilityState(5, 5)).toEqual({
            selected: true,
            checked: true,
        });
    });
});
