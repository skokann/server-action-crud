"use client";

import React, { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

function SubmitButton() {
  const [token, setToken] = useState<string | null>("");
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  return (
    <>
      <ReCAPTCHA
        sitekey={process.env.NEXT_PUBLIC_GOOGLE_SITE_KEY || ""}
        ref={recaptchaRef}
        onChange={(token) => setToken(token)}
      />
      <button type="submit" disabled={!token} className="p-2 bg-blue-400 block">
        Submit
      </button>
    </>
  );
}

export default SubmitButton;
