"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

/**
 * Newsletter signup. Submits via a noop handler on the placeholder launch —
 * swap out `handleSubmit` to point at a Mailchimp / ConvertKit / Workers
 * endpoint when the list is ready.
 */
export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) return;
    // Replace with real submission endpoint when ready.
    setSent(true);
  };

  if (sent) {
    return (
      <div>
        <h3 className="heading-display mb-2 text-xl md:text-2xl">
          You&apos;re on the list
        </h3>
        <p className="text-ink/70">
          We&apos;ll drop you a line the moment POP opens its doors.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3 className="heading-display mb-2 text-xl md:text-2xl">
        {siteConfig.footer.newsletter.title}
      </h3>
      <div className="mt-5 flex w-full max-w-md flex-col gap-3 sm:flex-row">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={siteConfig.footer.newsletter.placeholder}
          className="flex-1 border-b border-ink/30 bg-transparent px-1 py-3 text-ink placeholder:text-ink/40 focus:border-terracotta focus:outline-none"
          aria-label="Email address"
        />
        <button type="submit" className="btn-primary">
          {siteConfig.footer.newsletter.cta}
          <ArrowRight className="ml-2 h-4 w-4" />
        </button>
      </div>
    </form>
  );
}
