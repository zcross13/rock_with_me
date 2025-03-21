import { useState } from 'react';
import '../styles/faq.css';

// FAQ Item component
const FAQItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq-item">
      <div className="faq-question" onClick={toggle}>
        <h3>{question}</h3>
        <span>{isOpen ? '−' : '+'}</span>
      </div>
      {isOpen && (
        <div className="faq-answer">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const faqData = [
    {
      question: 'What is a limited diagnostic prenatal ultrasound?',
      answer:
        "A limited diagnostic prenatal ultrasound is a type of ultrasound that provides 2D, 3D, 4D, and HD images of the unborn baby, aiming to create a positive experience for the parents and family. While it offers realistic surface images to help foster a connection between the family and the baby, it does not serve as a substitute for a routine ultrasound, which is necessary for assessing the baby's gestational age, evaluating for abnormalities, and screening basic fetal anatomy.",
    },
    {
      question:
        'Does this take the place of an ultrasound at my doctor’s office?',
      answer:
        'No, a limited diagnostic prenatal ultrasound does not replace an ultrasound at your doctor’s office. It is essential that women seeking this type of ultrasound are already receiving prenatal care from a healthcare provider and have undergone a medical, diagnostic ultrasound to confirm their due date and screen for any fetal anomalies or pregnancy-related issues.',
    },
    {
      question: 'Is it safe? Are there any risks to me, or my baby?',
      answer:
        'Yes, limited diagnostic prenatal ultrasounds are considered safe. Extensive studies over the past 30 years have shown that ultrasound does not cause harm to either the mother or the baby. The technology used in 3D, 4D, and HD ultrasounds is similar to that of conventional 2D scans, utilizing sound waves to create images.',
    },
    {
      question: 'Do I need an appointment?',
      answer: 'Yes, appointments are necessary for all of our services.',
    },
    {
      question: 'How long does the 3D, 4D and HD ultrasound take?',
      answer:
        'Depending on the package you choose, the session will last between 10 and 30 minutes.',
    },
    {
      question:
        'How far along should I be before I have a 2D/3D/4D/HD ultrasound?',
      answer:
        "Gender determination via ultrasound can be performed starting at 15 weeks of pregnancy. For those planning to have only one 4D ultrasound, the ideal window is between 30 and 33 weeks. If you intend to have two 4D ultrasounds, it's recommended to schedule them between 26 and 34 weeks.",
    },
    {
      question: 'Will I always get a beautiful image of my baby?',
      answer:
        "While the goal is to capture beautiful images of your baby, there are no guarantees due to factors beyond control, such as the baby's position, the amount of amniotic fluid, and the mother's body type.",
    },
    {
      question: 'Will I have to pay if I am not satisfied with the results?',
      answer:
        "In the rare case that the baby's position prevents satisfactory pictures, arrangements will be made for you to return for another session to try again, ensuring that you have the best chance of getting the images you desire.",
    },
    {
      question: 'Are you able to tell the sex of the baby?',
      answer:
        "Yes, in most cases, we can provide an indication of the baby's sex during the ultrasound. However, we cannot guarantee that the baby will cooperate during the session.",
    },
    {
      question: 'Is the 4D ultrasound covered by Insurance?',
      answer:
        'No, this is a limited diagnostic procedure so insurance does not cover it. We accept Visa, Mastercard, Discover, American Express, and cash.',
    },
    {
      question: 'How much does it cost?',
      answer:
        'We offer a variety of packages to accommodate different budgets, continuously striving to provide high-quality products and services at affordable prices.',
    },
    {
      question: 'What is SneakPeek® Clinical?',
      answer:
        'SneakPeek Clinical is an early gender DNA detection test offered to women starting at 6 weeks into pregnancy. The genetic test is designed to work in conjunction with an ultrasound scan.',
    },
    {
      question: 'How does SneakPeek® work?',
      answer:
        'SneakPeek utilizes the natural process of shared fetal DNA circulating inside the mother’s bloodstream. Our PCR technology has the ability to detect the presence or absence of male Y chromosome.',
    },
    {
      question: 'Is there a prep for my 4D Ultrasound appointment?',
      answer:
        'To enhance the quality of the images during your ultrasound, please drink plenty of water in the days leading up to your appointment.',
    },
    {
      question:
        'Will I receive everything included in my session on the same day?',
      answer:
        'Yes, if your session includes photos, you will receive these items after your session.',
    },
    {
      question:
        'How many weeks should I be for the SneakPeek Clinical gender reveal?',
      answer: 'You must be at least 7 weeks pregnant.',
    },
    {
      question: 'When will I receive my results?',
      answer:
        'Results are available in two options: 1-2 business days for FastTrack results or 3-4 business days for Standard results.',
    },
    {
      question: 'Can I book more than once throughout my pregnancy?',
      answer:
        'There are no limitations on the amount of times you can see your bundle of joy.',
    },
    {
      question: 'Is there an additional charge for twin pregnancies?',
      answer:
        'Yes, there will be an additional charge of $20 per fetus added to your total for twin or triplet pregnancies.',
    },
  ];

  return (
    <section className="faq">
      <div className="faq-container">
        <h2>
          Frequently Asked Questions about 3D Ultrasound, 4D Ultrasound & HDLive
          Ultrasound
        </h2>
        <div className="faq-list">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
