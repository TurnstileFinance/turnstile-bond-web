import React, {
  ForwardedRef,
  forwardRef,
  InputHTMLAttributes,
  useRef,
} from 'react';

import { Label } from './Label';

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  labelClassname?: string;
  helper?: string;
  compulsory?: boolean;
}

function TextField(
  {
    compulsory,
    className = '',
    label = '',
    labelClassname = '',
    helper,
    ...props
  }: TextFieldProps,
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
      <input
        ref={ref || inputRef}
        className={`textfield peer ${
          helper ? 'border border-red-400' : ''
        } ${className}`}
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
      {helper && <p className="text-sm text-red-400">{helper}</p>}
    </div>
  );
}

export default forwardRef(TextField);
