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
    const defaultBtnClickOutline = jest.fn();
    const warningBtnClickOutline = jest.fn();
    const primaryBtnClickOutline = jest.fn();
    const dangerBtnClickOutline = jest.fn();
    const successBtnClickOutline = jest.fn();

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
        {/* OUTLINE */}
        <Button outline onClick={defaultBtnClickOutline}>
          default outline
        </Button>
        <Button outline onClick={warningBtnClickOutline} status="warning">
          warning outline
        </Button>
        <Button outline onClick={primaryBtnClickOutline} status="primary">
          primary outline
        </Button>
        <Button outline onClick={dangerBtnClickOutline} status="danger">
          danger outline
        </Button>
        <Button outline onClick={successBtnClickOutline} status="success">
          success outline
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

    const defaultBtnOutline = getByText('default outline');
    fireEvent.click(defaultBtnOutline);
    expect(defaultBtnClickOutline).toHaveBeenCalled();

    const warningBtnOutline = getByText('warning outline');
    fireEvent.click(warningBtnOutline);
    expect(warningBtnClickOutline).toHaveBeenCalled();

    const primaryBtnOutline = getByText('primary outline');
    fireEvent.click(primaryBtnOutline);
    expect(primaryBtnClickOutline).toHaveBeenCalled();

    const dangerBtnOutline = getByText('danger outline');
    fireEvent.click(dangerBtnOutline);
    expect(dangerBtnClickOutline).toHaveBeenCalled();

    const successBtnOutline = getByText('success outline');
    fireEvent.click(successBtnOutline);
    expect(successBtnClickOutline).toHaveBeenCalled();
  });
});
