import React, { useEffect, useState } from "react";
import { X, Github, Linkedin, Mail, Phone } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("http://localhost:3001/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setTimeout(() => {
          onClose();
          setStatus("idle");
          setFormData({ name: "", email: "", message: "" });
        }, 2000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 animate-fade-in"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl p-8 w-full max-w-md relative shadow-2xl animate-slide-up"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-primary-400 hover:text-primary-600 transition-colors"
        >
          <X size={24} />
        </button>

        <h2 className="text-2xl font-bold text-primary-800 mb-6">
          Get in Touch
        </h2>

        <div className="flex justify-center space-x-6 mb-8">
          <a
            href="#"
            className="text-primary-500 hover:text-primary-800 transition-colors transform hover:scale-110"
          >
            <Github size={28} />
          </a>
          <a
            href="#"
            className="text-primary-500 hover:text-primary-800 transition-colors transform hover:scale-110"
          >
            <Linkedin size={28} />
          </a>
          <a
            href="mailto:email@example.com"
            className="text-primary-500 hover:text-primary-800 transition-colors transform hover:scale-110"
          >
            <Mail size={28} />
          </a>
          <a
            href="#"
            className="text-primary-500 hover:text-primary-800 transition-colors transform hover:scale-110"
          >
            <Phone size={28} />
          </a>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-primary-600 mb-1">
              Name
            </label>
            <input
              type="text"
              required
              className="w-full px-4 py-2 rounded-lg border border-primary-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-primary-600 mb-1">
              Email
            </label>
            <input
              type="email"
              required
              className="w-full px-4 py-2 rounded-lg border border-primary-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-primary-600 mb-1">
              Message
            </label>
            <textarea
              required
              rows={4}
              className="w-full px-4 py-2 rounded-lg border border-primary-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending" || status === "success"}
            className={`w-full py-3 rounded-lg font-semibold text-white transition-all transform hover:scale-[1.02] ${
              status === "success"
                ? "bg-green-500"
                : status === "error"
                ? "bg-red-500"
                : "bg-gray-800 hover:bg-gray-900"
            }`}
          >
            {status === "sending"
              ? "Sending..."
              : status === "success"
              ? "Sent Successfully!"
              : status === "error"
              ? "Failed to Send"
              : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
};
