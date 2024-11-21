import FAQ from "../components/Faq/Faq";

// Define the structure of each FAQ item
interface FAQItem {
  question: string;
  answer: string;
}

const FaqPage: React.FC = () => {
  // List of FAQs
  const faqs: FAQItem[] = [
    {
      question: "What's the best thing about Switzerland?",
      answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
      question: "Why do we tell actors to 'break a leg'?",
      answer:
        "Because every play has a cast. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
      question: "How do you drown a hipster?",
      answer:
        "Throw them in the mainstream. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
      question: "What do you call a belt made out of watches?",
      answer:
        "A waist of time. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
      question: "Why can't you hear a pterodactyl go to the bathroom?",
      answer:
        "Because the 'P' is silent. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
  ];
  return (
    <div className="bg-[#f5f5f5]">
      <div className="py-32">
        <FAQ faqs={faqs} />
      </div>
    </div>
  );
};

export default FaqPage;
