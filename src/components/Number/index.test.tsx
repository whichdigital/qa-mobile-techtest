import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';

import Number from '.';

describe('<Number />', () => {
    it('should be able to invoke the `onPress` handler when clicking on a number', () => {
        const spies = { onPress: jest.fn() };

        const { getByTestId } = render(<Number value={5} selected={null} onPress={spies.onPress} />);

        fireEvent.press(getByTestId('pressable'));
        expect(spies.onPress).toHaveBeenCalledTimes(1);
    });

    it('should be able to supply the appropriate styles', () => {
        const { rerender, getByTestId } = render(<Number value={5} selected={null} onPress={() => {}} />);

        expect(getByTestId('number').props.style).toMatchSnapshot();

        rerender(<Number value={20} selected={5} onPress={() => {}} />);
        expect(getByTestId('number').props.style).toMatchSnapshot();

        rerender(<Number value={5} selected={5} onPress={() => {}} />);
        expect(getByTestId('number').props.style).toMatchSnapshot();
    });
});
