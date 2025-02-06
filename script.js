emailjs.init("your_public_key_here"); // Ganti dengan Public Key Anda

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Mencegah reload halaman
  const formData = new FormData(e.target);
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");
  emailjs
    .send("your_service_id_here", "your_template_id_here", { // Ganti dengan Service ID dan Template ID Anda
      from_name: name,
      reply_to: email,
      message: message,
    })
    .then((response) => {
      Swal.fire({
        icon: "success",
        title: "Pesan Terkirim!",
        text: "Pesan Anda telah berhasil dikirim. Kami akan segera menghubungi Anda.",
      });
      e.target.reset(); // Reset form setelah pengiriman
    })
    .catch((error) => {
      Swal.fire({
        icon: "error",
        title: "Gagal Mengirim Pesan",
        text: "Silakan coba lagi nanti.",
      });
      console.error("Error:", error);
    });
});
