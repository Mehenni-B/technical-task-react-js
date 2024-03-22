import { render } from '@testing-library/react';
import { MealCard } from './_index';
import '@testing-library/jest-dom';

const mockMeal = {
    id: 500,
    name: 'Mock Meal',
    category: 'Mock Category',
    area: 'Mock Area',
    instructions: 'Mock Instructions',
    image: 'mock_image.jpg'
};

describe('Meal component', () => {
    it('renders with provided meal data', () => {
        const { getByText, getByAltText } = render(<MealCard meal={mockMeal} />);

        expect(getByText('Mock Category')).toBeInTheDocument();
        expect(getByText('Mock Area')).toBeInTheDocument();
        expect(getByText('Mock Meal')).toBeInTheDocument();
        expect(getByText('Mock Instructions')).toBeInTheDocument();
        expect(getByAltText('Mock Meal')).toBeInTheDocument();
    });
});
