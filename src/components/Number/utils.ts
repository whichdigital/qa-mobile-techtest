import { AccessibilityState } from 'react-native';

export function isMultipleOf(a: number, b: null | number): boolean {
    if (!b) {
        return false;
    }

    return a % b === 0;
}

export function getAccessibilityState(a: number, b: null | number): AccessibilityState {
    if (a === b) {
        return { selected: true, checked: true };
    }

    if (isMultipleOf(a, b)) {
        return { checked: true };
    }

    return {};
}
