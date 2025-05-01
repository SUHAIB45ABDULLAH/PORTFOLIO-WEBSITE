import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef(null); // Defining the form ref
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs
      .sendForm(
        'service_uxbdy5x  ',     // Replace with your EmailJS Service ID
        'template_r1dxj8k ',    // Replace with your EmailJS Template ID
        form.current,          // Your form reference
        'g_NsBfbl0caVRFsRx '      // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Message sent successfully!");
          form.current.reset(); // Optional: reset the form
        },
        (error) => {
          console.error(error.text);
          setStatus("Failed to send message. Try again.");
        }
      );
  };
  

  return (
    <section id="contact" className="py-16 px-6 text-gray-900 bg-black">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6 text-white">Contact Me</h2>
        <p className="text-center text-white mb-8">
          Interested in working together? Fill out the form below.
        </p>

        <form ref={form} onSubmit={sendEmail} className="space-y-4" autoComplete="on">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            aria-label="Your Name"
            autoComplete="name"
            className="cursor-pointer  w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 text-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            aria-label="Your Email"
            autoComplete="email"
            className="cursor-pointer  w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 text-white"
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            required
            aria-label="Your Message"
            className="cursor-pointer  w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 text-white"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition"
          >
            Send Message
          </button>
          {status && <p className="text-green-600 text-center mt-3">{status}</p>}
        </form>

        {/* Optional: Socials */}
        <div className="flex justify-center gap-6 mt-6 text-blue-600">
          <a href="https://www.linkedin.com/in/suhaib-abdullah-9b2147338/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">LinkedIn</a>
          <a href="mailto:suhaibabdullah69@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">Email</a>
          <a href="https://github.com/SUHAIB45ABDULLAH" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">GitHub</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

