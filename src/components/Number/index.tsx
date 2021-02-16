import React from 'react';
import { ReactElement } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import { Selected, SetSelected } from '../../types';
import styles from './styles';
import { getAccessibilityState, isMultipleOf } from './utils';

type Props = {
    value: number;
    selected: Selected;
    onPress: SetSelected;
};

export default function Number({ value, selected, onPress }: Props): ReactElement {
    return (
        <TouchableOpacity
            testID="pressable"
            style={styles.container}
            onPress={() => onPress(value === selected ? null : value)}>
            <View
                testID="number"
                style={[
                    styles.number,
                    isMultipleOf(value, selected) && styles.multiple,
                    value === selected && styles.active,
                ]}>
                <Text accessibilityState={getAccessibilityState(value, selected)}>{value}</Text>
            </View>
        </TouchableOpacity>
    );
}
