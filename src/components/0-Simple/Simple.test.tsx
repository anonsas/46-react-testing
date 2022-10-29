import { render, screen } from '@testing-library/react';
import Simple from './Simple';

describe('Application', () => {
  test('component renders correctly', () => {
    render(<Simple />);
    const mainElement = screen.getByRole('main');
    expect(mainElement).toBeInTheDocument();
  });

  test('renders h1 heading', () => {
    render(<Simple />);
    const heading1 = screen.getByRole('heading', {
      level: 1,
    });
    expect(heading1).toBeInTheDocument();
  });

  test('renders h2 heading', () => {
    render(<Simple />);
    const heading2 = screen.getByRole('heading', {
      level: 2,
    });
    expect(heading2).toBeInTheDocument();
  });

  test('renders label for Name input', () => {
    render(<Simple />);
    const label = screen.getByRole('textbox', {
      name: 'Name',
    });
    expect(label).toBeInTheDocument();
  });

  test('renders label for Bio input', () => {
    render(<Simple />);
    const label = screen.getByRole('textbox', {
      name: 'Bio',
    });
    expect(label).toBeInTheDocument();
  });

  test('renders label for Job select input', () => {
    render(<Simple />);
    const label = screen.getByRole('combobox');
    expect(label).toBeInTheDocument();
  });

  test('renders label for terms checkbox', () => {
    render(<Simple />);
    const label = screen.getByRole('checkbox');
    expect(label).toBeInTheDocument();
  });

  test('renders disabled submit button', () => {
    render(<Simple />);
    const submitBtn = screen.getByRole('button');
    expect(submitBtn).toBeInTheDocument();
    expect(submitBtn).toBeDisabled();
  });

  // /** getByLabelText */
  test('renders disabled submit button', () => {
    render(<Simple />);
    const nameElement2 = screen.getByLabelText('Name', { selector: 'input' });
    expect(nameElement2).toBeInTheDocument();
  });

  test('renders terms checkbox label', () => {
    render(<Simple />);
    const termsLabel = screen.getByLabelText(
      'I agree to the terms and conditions'
    );
    expect(termsLabel).toBeInTheDocument();
  });

  // /** getByPlaceholderText */
  test('renders Name input placeholder text', () => {
    render(<Simple />);
    const namePlaceholder = screen.getByPlaceholderText('Fullname');
    expect(namePlaceholder).toBeInTheDocument();
  });

  // /** getByText */
  test('renders paragraph', () => {
    render(<Simple />);
    const paragraph = screen.getByText('All fields are mandatory');
    expect(paragraph).toBeInTheDocument();
  });

  // /** getByDisplayValue */
  test('renders Name input value', () => {
    render(<Simple />);
    const nameInputValue = screen.getByDisplayValue('Igor');
    expect(nameInputValue).toBeInTheDocument();
  });

  // /** getByAltText */
  test('renders altText for the image', () => {
    render(<Simple />);
    const altText = screen.getByAltText('a person with a laptop');
    expect(altText).toBeInTheDocument();
  });

  // /** getByTitle */
  test('renders close icon', () => {
    render(<Simple />);
    const closeIcon = screen.getByTitle('close');
    expect(closeIcon).toBeInTheDocument();
  });

  // /** getByTestId */
  test('renders custom div element', () => {
    render(<Simple />);
    const customElement = screen.getByTestId('custom-element');
    expect(customElement).toBeInTheDocument();
  });
});
