import Swal from "sweetalert2";

const infoAlert = (msg, isDark = false) => {
  Swal.fire({
    icon: "info",
    title: "Important!",
    text: msg,
    confirmButtonText: "Got it!",
    allowOutsideClick: false,

    background: isDark ? "#1f2937" : "#f0fdf4", // Dark gray or light green
    color: isDark ? "#f9fafb" : "#065f46", // Light or dark text

    customClass: {
      popup: "swal-popup",
      title: "swal-title",
      htmlContainer: "swal-text",
      confirmButton: "swal-confirm",
    },
  });
};

export default infoAlert;
