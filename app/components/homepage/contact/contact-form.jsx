"use client";
// @flow strict
import { isValidEmail } from "@/utils/check-email";
import axios from "axios";
import { useState } from "react";
import { TbMailForward } from "react-icons/tb";
import { toast } from "react-toastify";

function ContactForm() {
  const [error, setError] = useState({ email: false, required: false });
  const [isLoading, setIsLoading] = useState(false);
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  const checkRequired = () => {
    if (userInput.email && userInput.message && userInput.name) {
      setError({ ...error, required: false });
    }
  };

  const handleSendMail = async (e) => {
    e.preventDefault();

    if (!userInput.email || !userInput.message || !userInput.name) {
      setError({ ...error, required: true });
      return;
    } else if (error.email) {
      return;
    } else {
      setError({ ...error, required: false });
    };

    try {
      setIsLoading(true);
      const apiUrl = process.env.NEXT_PUBLIC_APP_URL
        ? `${process.env.NEXT_PUBLIC_APP_URL.replace(/\/$/, "")}/api/contact`
        : "/api/contact";

      await axios.post(apiUrl, userInput);

      toast.success("Message sent successfully!");
      setUserInput({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      toast.error(error?.response?.data?.message);
    } finally {
      setIsLoading(false);
    };
  };

  return (
    <div>
      <div className="border border-term-border bg-term-panel rounded-md">
        <div className="flex items-center justify-between px-4 py-3 border-b border-term-border">
          <div className="term-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <span className="text-term-dim text-xs">message.sh</span>
        </div>
        <div className="p-4 lg:p-5">
          <p className="text-sm text-term-dim mb-5">{"# If you have any questions or concerns, please don't hesitate to contact me. I am open to any work opportunities that align with my skills and interests."}</p>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-xs text-term-green">--name</label>
              <input
                className="bg-term-panel-alt w-full border rounded-sm border-term-border focus:border-term-green ring-0 outline-0 transition-all duration-300 px-3 py-2 text-term-text font-mono text-sm"
                type="text"
                maxLength="100"
                required={true}
                onChange={(e) => setUserInput({ ...userInput, name: e.target.value })}
                onBlur={checkRequired}
                value={userInput.name}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs text-term-green">--email</label>
              <input
                className="bg-term-panel-alt w-full border rounded-sm border-term-border focus:border-term-green ring-0 outline-0 transition-all duration-300 px-3 py-2 text-term-text font-mono text-sm"
                type="email"
                maxLength="100"
                required={true}
                value={userInput.email}
                onChange={(e) => setUserInput({ ...userInput, email: e.target.value })}
                onBlur={() => {
                  checkRequired();
                  setError({ ...error, email: !isValidEmail(userInput.email) });
                }}
              />
              {error.email && <p className="text-sm text-term-red">// Please provide a valid email!</p>}
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs text-term-green">--message</label>
              <textarea
                className="bg-term-panel-alt w-full border rounded-sm border-term-border focus:border-term-green ring-0 outline-0 transition-all duration-300 px-3 py-2 text-term-text font-mono text-sm"
                maxLength="500"
                name="message"
                required={true}
                onChange={(e) => setUserInput({ ...userInput, message: e.target.value })}
                onBlur={checkRequired}
                rows="4"
                value={userInput.message}
              />
            </div>
            <div className="flex flex-col items-start gap-3">
              {error.required && <p className="text-sm text-term-red">
                // All fields are required!
              </p>}
              <button
                className="term-btn w-full justify-center"
                role="button"
                onClick={handleSendMail}
                disabled={isLoading}
              >
                {
                  isLoading ?
                  <span>sending...</span>:
                  <span className="flex items-center gap-2">
                    ./send_message
                    <TbMailForward size={18} />
                  </span>
                }
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;