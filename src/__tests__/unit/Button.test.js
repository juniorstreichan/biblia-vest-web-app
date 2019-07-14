import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from '../../theme/components/Button';

describe('Simple tests for Button Component', () => {
  it('should render and click buttons', () => {
    const defaultBtnClick = jest.fn();
    const warningBtnClick = jest.fn();
    const primaryBtnClick = jest.fn();
    const dangerBtnClick = jest.fn();
    const successBtnClick = jest.fn();

    const { getByText } = render(
      <div>
        <Button onClick={defaultBtnClick}>default</Button>
        <Button onClick={warningBtnClick} status="warning">
          warning
        </Button>
        <Button onClick={primaryBtnClick} status="primary">
          primary
        </Button>
        <Button onClick={dangerBtnClick} status="danger">
          danger
        </Button>
        <Button onClick={successBtnClick} status="success">
          success
        </Button>
      </div>,
    );

    const defaultBtn = getByText('default');
    fireEvent.click(defaultBtn);
    expect(defaultBtnClick).toHaveBeenCalled();

    const warningBtn = getByText('warning');
    fireEvent.click(warningBtn);
    expect(warningBtnClick).toHaveBeenCalled();

    const primaryBtn = getByText('primary');
    fireEvent.click(primaryBtn);
    expect(primaryBtnClick).toHaveBeenCalled();

    const dangerBtn = getByText('danger');
    fireEvent.click(dangerBtn);
    expect(dangerBtnClick).toHaveBeenCalled();

    const successBtn = getByText('success');
    fireEvent.click(successBtn);
    expect(successBtnClick).toHaveBeenCalled();
  });
});
