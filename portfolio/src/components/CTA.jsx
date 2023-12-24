import Link from "next/link";
import Button from "./Button";

const CTA = () => {
  return (
    <section className='cta'>
      <p className='cta-text'>
        Have a project in mind? <br className='sm:block hidden' />
        Let’s build something together!
      </p>
      <Button label="Contact" link={'/contact'} />
    </section>
  );
};

export default CTA;
