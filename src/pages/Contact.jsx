import { useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // handle perubahan input
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data terkirim:", formData);
    alert("Pesan berhasil dikirim!");
    setFormData({ name: "", email: "", message: "" }); // reset form
  };

  return (
    <div id="contack">
      <div className="flex justify-center items-center gap-64 pb-60">
        <div className="text-white">
          <h1>Let's Work Together</h1>
          <h2>Email : martstepen03@gmail.com</h2>
        </div>
        <div className="w-[34em] p-6 bg-white shadow-lg rounded-2xl">
          <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Input Nama */}
            <div>
              <label className="block font-medium">Nama</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Masukkan nama kamu"
                required
              />
            </div>

            {/* Input Email */}
            <div>
              <label className="block font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Masukkan email kamu"
                required
              />
            </div>

            {/* Pesan */}
            <div>
              <label className="block font-medium">Pesan</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Tulis pesan kamu..."
                rows="4"
                required
              />
            </div>

            {/* Tombol Submit */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition"
            >
              Kirim
            </button>
          </form>
        </div>
      </div>
      <div className="flex justify-center gap-14 pb-20 text-white">
        <div>
          <HiOutlineMail className="text-6xl text-blue-300 cursor-pointer"></HiOutlineMail>
        </div>
        <div>
          <FaGithub className="text-6xl text-blue-300 cursor-pointer"></FaGithub>
        </div>
        <div>
          <FaTwitter className="text-6xl text-blue-300 cursor-pointer"></FaTwitter>
        </div>
      </div>
    </div>
  );
};

export default Contact;
