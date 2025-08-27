import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      q: "What if my child is shy?",
      a: "Totally fine — we keep groups small and focus on gentle encouragement so children settle at their own pace.",
    },
    {
      q: "What footwear should they wear?",
      a: "Trainers or football boots with moulded studs are ideal. Bring a water bottle and comfy sportswear.",
    },
    {
      q: "What happens in bad weather?",
      a: "We’ll message through WhatsApp/Instagram if a session needs to be postponed due to severe weather.",
    },
    {
      q: "Do parents stay?",
      a: "Yes, parents are welcome to watch from the side.",
    },
    {
      q: "How do I book after the free session?",
      a: "Just message us on WhatsApp or Instagram and we’ll sort ongoing sessions and payments.",
    },
  ];

  return (
    <section id="faqs" className="py-16 px-4 sm:px-6 lg:px-8 bg-primary/5">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary">FAQs</h2>
          <p className="text-muted-foreground mt-2">Quick answers to common questions.</p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-primary">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
