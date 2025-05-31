import Swal from "sweetalert2";

const infoAlert = (msg) => {
  Swal.fire({
    icon: "info",
    title: "Important!",
    text: msg,
    confirmButtonText: "Got it!",
    allowOutsideClick: false,
  });
};
export default infoAlert;
