import { useState } from "react";
import phone from "../images/phone.png";
import mail from "../images/mail.png";

function Contact() {
  const [copiedMail, setCopiedMail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  return (
    <div className="border border-gray-500 p-5">
      <div className="pb-1">Contact</div>
      <div className="flex flex-col">
        <div
          className="relative flex flex-row gap-3 items-center cursor-pointer group w-[300px]"
          onClick={() => {
            navigator.clipboard.writeText("simo.sopenlehto@gmail.com");
            setCopiedMail(true);
            setTimeout(() => setCopiedMail(false), 1000);
          }}
        >
          <img src={mail} className="ml-1 h-10 w-10"></img>
          simo.sopenlehto@gmail.com
          <span
            className="absolute -top-4 left-1/2 transform -translate-x-1/2
            bg-black text-white text-sm rounded
            opacity-0 group-hover:opacity-100
            transition-opacity duration-200
            whitespace-nowrap"
          >
            Copy Email to Clipboard
          </span>
          {copiedMail && (
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 text-sm">
              Copied!
            </span>
          )}
        </div>

        <div
          className="relative flex flex-row gap-2 items-center cursor-pointer group w-[300px]"
          onClick={() => {
            navigator.clipboard.writeText("+358 505546277");
            setCopiedPhone(true);
            setTimeout(() => setCopiedPhone(false), 1000);
          }}
        >
          <img src={phone} className="h-12 w-12"></img>
          +358 505546277
          <span
            className="absolute -bottom-3 left-1/2 transform -translate-x-1/2
            bg-black text-white text-sm rounded
            opacity-0 group-hover:opacity-100
            transition-opacity duration-200
            whitespace-nowrap"
          >
            Copy Phone Number to Clipboard
          </span>
          {copiedPhone && (
            <span className="absolute -top-20 left-1/2 -translate-x-1/2 text-sm">
              Copied!
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contact;
