import ContactForm from "@/components/ContactForm";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ContactMe`.
 */
export type ContactMeProps = SliceComponentProps<Content.ContactMeSlice>;

/**
 * Component for "ContactMe" Slices.
 */
const ContactMe = ({ slice }: ContactMeProps): JSX.Element => {
  return (
    <section
      id="contact"
      className=" bg-slate-800 py-20"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="container">
        <h2 className="text-slate-100 text-4xl pb-7 text-center font-lexend">
          Contact Me
        </h2>
        <div className="flex justify-center items-center mb-20 md:mb-0">
          <ContactForm className="w-full lg:w-1/2 font-lexend" />
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
