import * as R from 'ramda';
import React from 'react';
import { FlatList, View } from 'react-native';

import { Selected, SetSelected } from '../../types';
import Number from '../Number';
import styles from './styles';
import { numberList } from './utils';

type Props = {
    selected: Selected;
    onPress: SetSelected;
};

export default function Canvas({ selected, onPress }: Props) {
    return (
        <FlatList
            data={R.splitEvery(3, numberList)}
            keyExtractor={(item) => item.join('')}
            testID="list"
            renderItem={({ item: [a, b, c] }) => (
                <View style={styles.row}>
                    <Number value={a} selected={selected} onPress={onPress} />
                    <Number value={b} selected={selected} onPress={onPress} />
                    <Number value={c} selected={selected} onPress={onPress} />
                </View>
            )}
        />
    );
}
