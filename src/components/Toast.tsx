import { ApiError as AdminApiError } from 'generated/api/admin/core/ApiError';
import { ApiError } from 'generated/api/front/core/ApiError';
import { toast } from 'react-toastify';

import { Icon } from './Icon';

export function toastError(msg: string) {
  toast.dismiss();
  toast.error(msg, {
    icon: Icon.XCircle,
    className: 'bg-[#FAF2F2] p-4',
    bodyClassName: 'text-[#EB5757] text-14 font-medium p-0 m-0',
    closeButton: ({ closeToast }) => (
      <button onClick={closeToast}>
        <Icon.X className="wh-5 text-[#EB5757]" />
      </button>
    ),
    onClose: () => toast.clearWaitingQueue(),
  });
}

export function toastApiError(e: ApiError | AdminApiError, msg: string) {
  toastError(e.body?.message || msg);
}

export function toastSuccess(msg: string) {
  toast.dismiss();
  toast.success(msg, {
    icon: <Icon.CheckCircle className="text-[#31C48D]" />,
    className: 'bg-[#F3FAF7] p-4',
    bodyClassName: 'text-[#03543F] text-14 font-medium p-0 m-0',
    closeButton: ({ closeToast }) => (
      <button onClick={closeToast}>
        <Icon.X className="wh-5 text-[#31C48D]" />
      </button>
    ),
    onClose: () => toast.clearWaitingQueue(),
  });
}

export function toastInfo(msg: string) {
  toast.dismiss();
  toast.info(msg, {
    icon: <Icon.CheckCircle className="text-blue-600" />,
    className: 'bg-[#F0F6FE] p-4',
    bodyClassName: 'text-[#2F80ED] text-14 font-medium p-0 m-0',
    closeButton: ({ closeToast }) => (
      <button onClick={closeToast}>
        <Icon.X className="wh-5 text-blue-600" />
      </button>
    ),
    onClose: () => toast.clearWaitingQueue(),
  });
}
