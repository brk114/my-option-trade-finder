import Swal from "sweetalert2";

// TODO: Should be used only inside of this service
const swalAlert = (title = "", message: string, alertIcon: any) => {
  return Swal.fire({
    title: title,
    allowOutsideClick: false,
    icon: alertIcon,
    html: message
  });
}

const swalAlertWithTitle = (title: string, message: string, alertType: any) => {
  return Swal.fire({
    title: title,
    allowOutsideClick: false,
    icon: alertType,
    html: message
  });
}

const confirm = (title: string, message: string) => swalConfirmWithTitle(title, message);
const success = (message: string, title = "",) => swalAlert(title, message, 'success');
const warning = (message: string, title = "",) => swalAlert(title, message, 'warning');
const info = (message: string, title = "",) => swalAlert(title, message, 'info');
const error = (message: string, title = "",) => swalAlert(title, message, 'error');

const swalConfirm = (message: any) => {
  return Swal.fire({
    text: message,
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    cancelButtonText: 'No',
    confirmButtonText: 'Yes',
    allowOutsideClick: false
  });
}

const swalConfirmWithTitle = (title: string, message: string) => {
  return Swal.fire({
    title: title,
    text: message,
    allowOutsideClick: false,
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    cancelButtonText: 'No',
    confirmButtonText: 'Yes'
  });
}

const swalConfirmWithCustomInputs = (title: string, message: any, icon: any, showCancelButton: boolean,
  cancelButtonText: string, confirmButtonText: string, cancelButtonColor = '#d33',
  showDenyButton = false, denyButtonText = "", denyButtonColor="#d33") => {
  return Swal.fire({
    title: title,
    text: message,
    icon: icon,
    showCancelButton: showCancelButton,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: cancelButtonColor,
    cancelButtonText: cancelButtonText,
    confirmButtonText: confirmButtonText,
    showDenyButton: showDenyButton,
    denyButtonText: denyButtonText,
    denyButtonColor:denyButtonColor,
    allowOutsideClick: false
  });
}

const swalToast = Swal.mixin({
  toast: true,
  position: "bottom-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
});

const swalToastSuccess = (message: string) => {
  return swalToast.fire({
    icon: 'success',
    title: message
  });
}

const swalToastError = (message: string) => {
  return swalToast.fire({
    icon: 'error',
    title: message,
    timer: 5000
  });
}


export const alertServices = {
  success,
  warning,
  error,
  info,
  confirm,
  // TODO: Discuss and remove usage outside of service
  swalAlert,
  swalConfirm,
  swalToastSuccess,
  // TODO: Discuss and remove usage outside of service
  swalToastError,
  swalAlertWithTitle,
  swalConfirmWithCustomInputs,
  swalConfirmWithTitle
};