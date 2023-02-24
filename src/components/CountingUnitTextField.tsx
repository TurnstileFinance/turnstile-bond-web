import { isArray } from 'lodash';
import React, { ForwardedRef, forwardRef, InputHTMLAttributes } from 'react';
import { NumericFormat } from 'react-number-format';
import { twMerge } from 'tailwind-merge';

import { Label } from './Label';

export interface CountingUnitTextFieldProps
  extends InputHTMLAttributes<HTMLInputElement> {
  compulsory?: boolean;
  countingUnit?: string;
  disabled?: boolean;
  label?: string;
  labelClassname?: string;
  helper?: string;
}

function CountingUnitTextField(
  {
    compulsory,
    countingUnit,
    className = '',
    disabled,
    label = '',
    labelClassname = '',
    helper,
    ...props
  }: CountingUnitTextFieldProps,
  ref?: ForwardedRef<HTMLInputElement>
): JSX.Element {
  return (
    <div className="label-col">
      {label && (
        <Label
          compulsory={compulsory}
          text={label}
          className={labelClassname}
        />
      )}
      <div
        className={twMerge(
          'textfield textfield-counting-unit px-0',
          className,
          `${disabled && 'bg-gray-100 text-gray-400 '}`,
          `${helper && 'border-red-400'}`
        )}
      >
        <NumericFormat
          className={`peer flex-1 border-0 bg-black text-end text-brand-1 ring-0
         ${disabled && 'placeholder:text-gray-400'}`}
          value={
            isArray(props.value)
              ? undefined
              : (props.value as string | number | null | undefined)
          }
          onChange={props.onChange}
          allowLeadingZeros
          thousandSeparator=","
          disabled={disabled}
          onWheel={(e: React.WheelEvent<HTMLInputElement>) =>
            e.currentTarget.blur()
          }
        />

        <span className="pr-4 text-15">{countingUnit}</span>
      </div>
      {helper && <p className="text-end text-sm text-red-400">{helper}</p>}
    </div>
  );
}

export default forwardRef(CountingUnitTextField);
