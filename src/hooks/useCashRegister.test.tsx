import { act, renderHook } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { useCashRegister } from './useCashRegister';

describe('useCashRegister', () => {
  it('should return the correct initial state', () => {
    const { result } = renderHook(() => useCashRegister());
    expect(result.current.desiredAmount).toBe(0);
    expect(result.current.denominations).toEqual({
      20: 0,
      10: 0,
      5: 0,
      2: 0,
      1: 0,
    });
    expect(result.current.error).toBe(null);
  });

  it('should update desiredAmount', () => {
    const { result } = renderHook(() => useCashRegister());

    act(() => {
      result.current.setDesiredAmount(100);
    });

    expect(result.current.desiredAmount).toBe(100);
  });

  it('should update denominations', () => {
    const { result } = renderHook(() => useCashRegister());

    act(() => {
      result.current.setDenomAmount(20, 1);
    });

    expect(result.current.denominations).toEqual({
      20: 1,
      10: 0,
      5: 0,
      2: 0,
      1: 0,
    });
  });

  it('should calculate totalAmount correctly', () => {
    const { result } = renderHook(() => useCashRegister());

    act(() => {
      result.current.setDenomAmount(20, 3);
      result.current.setDenomAmount(10, 4);
      result.current.setDenomAmount(5, 5);
      result.current.setDenomAmount(1, 6);
    });

    expect(result.current.totalAmount).toBe(20 * 3 + 10 * 4 + 5 * 5 + 1 * 6);
  });

  it('should dispense change correctly', () => {
    const { result } = renderHook(() => useCashRegister());

    act(() => {
      result.current.setDenomAmount(20, 3);
      result.current.setDenomAmount(10, 4);
      result.current.setDenomAmount(2, 5);
      result.current.setDenomAmount(1, 6);
    });

    act(() => {
      result.current.setDesiredAmount(40);
    });

    act(() => {
      result.current.dispenseChange();
    })

    expect(result.current.denominations).toEqual({
      20: 1,
      10: 4,
      5: 0,
      2: 5,
      1: 6,
    });
  });

  it('should error correctly if the amount is nout enough', () => {
    const { result } = renderHook(() => useCashRegister());

    act(() => {
      result.current.setDenomAmount(20, 0);
      result.current.setDenomAmount(10, 1);
      result.current.setDenomAmount(5, 0);
      result.current.setDenomAmount(1, 2);
    });

    act(() => {
      result.current.setDesiredAmount(40);
    });

    act(() => {
      result.current.dispenseChange();
    })

    expect(result.current.error).toEqual("There is not enough money in the register, try a lower amount.");
  });

  it('should error correctly if the denomination is not available', () => {
    const { result } = renderHook(() => useCashRegister());

    act(() => {
      result.current.setDenomAmount(20, 2);
      result.current.setDenomAmount(10, 1);
      result.current.setDenomAmount(5, 0);
      result.current.setDenomAmount(1, 2);
    });

    act(() => {
      result.current.setDesiredAmount(23);
    });

    act(() => {
      result.current.dispenseChange();
    })

    expect(result.current.error).toEqual("Cannot dispense the exact change with the available denominations. Try a different amount.");
  });
});
