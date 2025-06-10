"use client";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa";

export default function Contact() {
  //state for form values
  const[name, setName] = useState("");
  const[email, setEmail] = useState("");
  const[message, setMessage] = useState("");
  const[website, setWebsite] = useState("");

  //state for error msg
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  //and the state for success feedback
  const [success, setSuccess] = useState("");
  //state for loading
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const cleaned = {
    name: name.trim(),
    email: email.trim(),
    message: message.trim(),
    website: website.trim(),
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess("");
    const newErrors: { name?: string; email?: string; message?: string } = {};

    // **Always use cleaned values**
    if (!cleaned.name) newErrors.name = "Name is required.";
    if (!cleaned.email) {
      newErrors.email = "Email is required.";
    } else if (!validateEmail(cleaned.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!cleaned.message) newErrors.message = "Message is required.";

    setErrors(newErrors);

    // **Do not proceed if errors exist!**
    if (Object.keys(newErrors).length > 0) return;

    setIsLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cleaned),
      });

      if (res.ok) {
        setSuccess("Thank you for your message! I'll get back to you soon.");
        setName("");
        setEmail("");
        setMessage("");
        setErrors({});
      } else {
        const data = await res.json();
        setErrors({ message: data.error || "Failed to send message." });
      }
    } catch (err) {
      console.error("Error sending contact form:", err);
      setErrors({ message: "Network error. Please try again later." });
    }
    setIsLoading(false);
  };


  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-900 text-white p-4">
      <div className="max-w-md w-full">
        <h1 className="text-4xl font-bold">Contact Me</h1>
        <p className="text-center text-gray-400 mb-6">
          I'd love to hear from you! Fill out the form below to get in touch.
        </p>
        {success && <p className="mb-4 text-green-500 text-center">{success}</p>}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input aria-hidden="true" type="text" name="website" style={{ display: "none" }} tabIndex={-1} autoComplete="off" value={website} onChange={e => setWebsite(e.target.value)}/>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              value={name || ""}
              onChange={(e) => setName(e.target.value)}
              className={`mt-1 w-full p-2 rounded bg-gray-800 border border-gray-700 text-white focus:outline-none input-gradient ${errors.name ? "input-error" : ""}`}
            />
            {errors.name && <p className="text-red-500 text-sm" aria-live="polite">{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="youremail@example.com"
              value={email || ""}
              onChange={(e) => setEmail(e.target.value)}
              className={`mt-1 w-full p-2 rounded bg-gray-800 border border-gray-700 text-white focus:outline-none input-gradient ${errors.email ? "input-error" : ""}`}
            />
            {errors.email && <p className="mt-1 text-sm text-red-500" aria-live="polite">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              rows={5}
              value={message || ""}
              onChange={(e) => setMessage(e.target.value)}
              className={`mt-1 w-full p-2 rounded bg-gray-800 border border-gray-700 text-white focus:outline-none input-gradient ${errors.message ? "input-error" : ""}`}
            />
            {errors.message && <p className="mt-1 text-sm text-red-500" aria-live="polite">{errors.message}</p>}
          </div>
          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="
                relative 
                inline-flex 
                w-full 
                items-center 
                justify-center 
                px-4 
                py-2 
                rounded-full 
                bg-gradient-to-r 
                from-blue-500 
                to-purple-500 
                text-white 
                font-bold 
                shadow-lg 
                transition-transform 
                transform 
                duration-150
                hover:scale-105 
                hover:shadow-[0_0_10px_3px_rgba(138,43,226,0.8)] 
                active:translate-y-1 
                active:scale-95
              "
            >
              {isLoading ? (
                <div className="flex items-center space-x-2">
                  <FaSpinner className="animate-spin" />
                  <span>Sending...</span>
                </div>
              ) : (
                "Send Message"
              )}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
