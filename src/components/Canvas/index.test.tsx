import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';

import Canvas from '.';

describe('<Number />', () => {
    it('should be able to enumerate all of the numbers', () => {
        const spies = { onPress: jest.fn() };

        const { queryAllByTestId, getByTestId } = render(<Canvas selected={null} onPress={spies.onPress} />);

        expect(queryAllByTestId('number').length).toBeGreaterThan(1);
        expect(getByTestId('list').props.data.length).toEqual(Math.ceil(144 / 3));

        fireEvent.press(queryAllByTestId('number')[0]);
        expect(spies.onPress).toHaveBeenCalledTimes(1);
    });
});
