import { forwardRef, TextareaHTMLAttributes } from 'react';
import { useId } from 'react-id-generator';

import { Label } from './Label';

export interface TextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  labelClassname?: string;
  helper?: string;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className = '', label, labelClassname = '', helper, ...props }, ref) => {
    const [id] = useId(1, 'textarea');

    return (
      <div className="label-col">
        {label && (
          <Label htmlFor={id} text={label} className={labelClassname} />
        )}
        <textarea
          ref={ref}
          id={id}
          className={`textarea ${helper ? 'border-error' : ''} ${className}`}
          {...props}
        />
        {helper && <p className="text-error text-sm">{helper}</p>}
      </div>
    );
  }
);

TextArea.displayName = 'TextArea';
