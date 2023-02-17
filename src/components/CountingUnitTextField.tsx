import React, {
  ForwardedRef,
  forwardRef,
  InputHTMLAttributes,
  useRef,
} from 'react';
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
  const inputRef = useRef<HTMLInputElement>(null);
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
        <input
          disabled={disabled}
          ref={ref || inputRef}
          type="number"
          className={`peer flex-1 bg-black text-end text-brand-1
          ${disabled && 'placeholder:text-gray-400'}`}
          {...props}
          {...(props?.type === 'number' && {
            onWheel: (e: React.WheelEvent<HTMLInputElement>) =>
              e.currentTarget.blur(),
            onKeyPress: (e) => {
              if (isNaN(Number(e.currentTarget.value + e.key))) {
                e.preventDefault();
              }
            },
          })}
        />
        <span className="pr-4 text-15">{countingUnit}</span>
      </div>
      {helper && <p className="text-end text-sm text-red-400">{helper}</p>}
    </div>
  );
}

export default forwardRef(CountingUnitTextField);
