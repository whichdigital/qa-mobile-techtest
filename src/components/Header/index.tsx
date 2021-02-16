import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

type Props = { selected: null | number };

export default function Header({ selected }: Props) {
    return (
        <>
            <View style={styles.container}>
                <Text style={[styles.title, styles.logo]}>W?</Text>
                <Text style={[styles.title]}> Multipliers</Text>
            </View>

            {!selected && <Text style={styles.subTitle}>Click on a number below to highlight its multiples.</Text>}

            {selected && (
                <Text style={styles.subTitle}>
                    Highlighted below are all the numbers that are multiples of {selected}.
                </Text>
            )}
        </>
    );
}
