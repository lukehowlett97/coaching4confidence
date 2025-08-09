import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PHONE_E164 } from "@/lib/contacts";
import { buildWhatsAppUrl } from "@/utils/wa";

export default function QuickEnquiryForm() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [notes, setNotes] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg =
      `Hi — I'd like to book a FREE taster for my child.\n` +
      `Name: ${name || "—"}\n` +
      `Age: ${age || "—"}\n` +
      `Special requirements: ${notes || "—"}`;
    const url = buildWhatsAppUrl(PHONE_E164, msg);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="enquiry" className="mx-auto max-w-screen-sm px-4 py-6">
      {/* Title & concise instructions */}
      <h2 className="text-2xl font-bold mb-3 text-slate-900">
        Booking is easy
      </h2>
      <ul className="list-disc list-inside text-slate-700 mb-6 space-y-1">
        <li>Fill in your child’s details below.</li>
        <li>Click <strong>Send via WhatsApp</strong>.</li>
        <li>WhatsApp will open with your message ready to send.</li>
        <li>We’ll reply quickly to confirm your place.</li>
      </ul>

      {/* Form */}
      <form
        onSubmit={onSubmit}
        className="rounded-2xl border border-primary/10 bg-white/70 p-4 shadow-sm space-y-3"
      >
        <div className="grid gap-3">
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Child's name"
            aria-label="Child's name"
          />
          <Input
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Age (e.g., 5)"
            aria-label="Child's age"
            inputMode="numeric"
          />
          <Textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Special requirements (allergies, SEN, etc.)"
            aria-label="Special requirements"
            rows={3}
          />
        </div>
        <Button
          type="submit"
          variant="cta"
          size="lg"
          className="w-full rounded-full"
        >
          Send via WhatsApp
        </Button>
        <p className="text-xs text-slate-600">
          We only use this info to arrange your taster session.
        </p>
      </form>
    </section>
  );
}
