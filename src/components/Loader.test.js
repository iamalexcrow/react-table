import { render } from '@testing-library/react';
import Loader from './Loader';

describe('Loader test', () => {
    it('should render the loader', () => {
        const { getByText, getByAltText } = render(<Loader />);

        expect(getByText('Actively Hacking...')).toBeInTheDocument();
        expect(getByAltText('Loading...')).toBeInTheDocument();
    });
});



