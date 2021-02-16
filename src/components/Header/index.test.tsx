import { render } from '@testing-library/react-native';
import React from 'react';

import Header from '.';

describe('<Header />', () => {
    it('should be able to display the appropriate conditional sub-title', () => {
        const { rerender, queryByText } = render(<Header selected={null} />);
        expect(queryByText('Click on a number below to highlight its multiples.')).toBeTruthy();

        rerender(<Header selected={15} />);
        expect(queryByText('Highlighted below are all the numbers that are multiples of 15.')).toBeTruthy();
    });
});
