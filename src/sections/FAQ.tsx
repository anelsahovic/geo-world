import FaqCard from '@/components/FaqCard';

const questions = [
  {
    question: 'What is Geo World?',
    answer:
      'Geo World is an app designed to help you explore and learn about countries around the world, with features like saving your favorite destinations and tracking visited places.',
  },
  {
    question: 'How do I save a country to my wishlist?',
    answer:
      'You can add a country to your wishlist by visiting its page and clicking the "Add to Wishlist" button.',
  },
  {
    question: 'Can I track the countries I have visited?',
    answer:
      'Yes! You can mark countries as visited and see a list of all the places you’ve explored in the Visited section.',
  },
  {
    question: 'Is Geo World free to use?',
    answer:
      'Yes, Geo World is completely free to use with all features available to everyone.',
  },
  {
    question: 'Can I access Geo World on my phone?',
    answer:
      'Absolutely! Geo World is mobile-friendly and works seamlessly on any device with a web browser.',
  },
  {
    question: 'How accurate is the information about the countries?',
    answer:
      'We source our data from reliable and up-to-date resources to ensure the information provided is accurate and trustworthy.',
  },
  {
    question: 'Do I need an account to use Geo World?',
    answer:
      'No, you can explore most features without an account. However, signing up allows you to save your wishlist and track visited countries.',
  },
  {
    question: 'Can I share my wishlist with friends?',
    answer:
      'Currently, wishlist sharing is not available, but we are working on adding this feature in future updates.',
  },
  {
    question: 'Is there a way to see trending destinations?',
    answer:
      'Yes, Geo World highlights popular destinations on the homepage to inspire your next adventure!',
  },
];

export default function FAQ() {
  return (
    <div
      id="faq"
      className="flex flex-col items-center w-full h-full px-6 py-10 gap-10"
    >
      {/* Heading */}
      <div className="flex flex-col items-start justify-start w-full">
        <h2 className="text-5xl md:text-6xl font-bold text-slate-800">FAQ</h2>
      </div>

      {/* Questions */}

      <div className="flex flex-col items-center justify-center w-full gap-4">
        {questions.map((question, index) => (
          <FaqCard key={index} questionData={question} />
        ))}
      </div>
    </div>
  );
}
