import * as R from 'ramda';

import { numberList } from './utils';

describe('numberList', () => {
    it('should be able to enumerate the numbers from 1 to 144', () => {
        expect(R.head(numberList)).toEqual(1);
        expect(R.last(numberList)).toEqual(144);
        expect(numberList).toMatchSnapshot();
    });
});
