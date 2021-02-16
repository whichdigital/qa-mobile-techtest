import React, { ReactElement, useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';

import Canvas from './components/Canvas';
import Header from './components/Header';
import styles from './styles';

export default function App(): ReactElement {
    const [selected, setSelected] = useState<null | number>(null);

    return (
        <SafeAreaView style={StyleSheet.absoluteFill}>
            <View style={styles.container}>
                <Header selected={selected} />
                <Canvas selected={selected} onPress={setSelected} />
            </View>
        </SafeAreaView>
    );
}
