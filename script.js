emailjs.init("RpdThMJoc5QtzoBZi"); // ganti dengan Public Key Anda

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Mencegah reload halaman
  const formData = new FormData(e.target);
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");
  emailjs
    .send("service_bcqxs3p", "template_slcte43", { //ganti dengan service_id dan template_id
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
      e.target.reset(); // reset form setelah pengiriman
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
