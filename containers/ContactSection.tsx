import React, { useState, useEffect } from "react";
import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import PersonalCard from "../components/PersonalCard";
import Input from "../components/Input";
import { Button } from "../components/Button";
import { validateEmail } from "../utils/validateEmail";
import { AnimatePresence, motion } from "framer-motion";
import classNames from "classnames";

interface FormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
  honeypot?: string;
  replyTo: string;
  accessKey: string;
}

interface FormTouched {
  name: boolean;
  email: boolean;
  subject: boolean;
  message: boolean;
}

interface FormResponse {
  type?: "success" | "error" | "";
  message?: string;
}

interface AlertProps {
  type?: "success" | "error" | "";
  message?: string;
}

const INITIAL_STATE = {
  name: "",
  email: "",
  subject: "",
  message: "",
  replyTo: "@",
  accessKey: "66146563-e610-4bb3-a275-f4d9f2b1bc1f",
};

const Alert: React.FC<AlertProps> = ({ message, type }) => {
  return (
    <div className="container" id="alertbox">
      <div
        className={classNames(
          "container flex items-center text-white text-sm font-bold px-4 py-3 relative",
          {
            "bg-green-500": type === "success",
            "bg-red-500": type === "error",
          }
        )}
        role="alert"
      >
        <svg
          className="fill-current w-4 h-4 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" />
        </svg>
        <p>{message}</p>
      </div>
    </div>
  );
};

const ContactSection: React.FC = () => {
  const [contact, setContact] = useState<FormValues>({ ...INITIAL_STATE });

  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<FormResponse>({
    type: "",
    message: "",
  });
  const [touched, setTouched] = useState<FormTouched>({
    name: false,
    email: false,
    subject: false,
    message: false,
  });

  const [errors, setErrors] = useState<
    Pick<Partial<FormValues>, "name" | "email" | "subject" | "message">
  >({
    name: null,
    email: null,
    subject: null,
    message: null,
  });

  const validate = (values: FormValues) => {
    let errorObj = {} as Pick<
      Partial<FormValues>,
      "name" | "email" | "subject" | "message"
    >;
    if (!values.name) errorObj.name = "You must specify your name";
    else errorObj.name = null;
    if (!values.email) errorObj.email = "Email is required";
    else if (values.email && !validateEmail(values.email))
      errorObj.email = "This email is invalid";
    else errorObj.email = null;
    if (!values.subject) errorObj.subject = "You must specify a subject";
    else errorObj.subject = null;
    if (!values.message) errorObj.message = "Please, leave a message.";
    else errorObj.message = null;
    return errorObj;
  };

  const handleChange = (e) => {
    const newForm = { ...contact, [e.target.name]: e.target.value };
    setContact(newForm);
    setErrors(validate(newForm));
  };

  const handleBlur = (e) => {
    e.persist();
    setTouched((old) => ({ ...old, [e?.target?.name]: true }));
  };

  const handleSetAllTouched = (value: boolean) => {
    const allTouched = {
      name: value,
      email: value,
      subject: value,
      message: value,
    };
    setTouched(allTouched);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      handleSetAllTouched(true);

      const validation = validate(contact);
      if (Object.values(validation).some((a) => !!a)) {
        setErrors(validation);
        setIsLoading(false);
        setResponse({
          type: "",
          message: "",
        });
        return;
      }

      const res = await fetch("https://api.staticforms.xyz/submit", {
        method: "POST",
        body: JSON.stringify(contact),
        headers: { "Content-Type": "application/json" },
      });

      const json = await res.json();

      if (json.success) {
        setContact({ ...INITIAL_STATE });

        handleSetAllTouched(false);
        setResponse({
          type: "success",
          message: "Thank you for reaching out. I'll get back ASAP.",
        });
      } else {
        setResponse({
          type: "error",
          message: json.message,
        });
        handleSetAllTouched(false);
      }
      setIsLoading(false);
    } catch (e) {
      handleSetAllTouched(false);
      setResponse({
        type: "error",
        message: "An error occured while submitting the form",
      });
      setIsLoading(false);
    }
  };

  return (
    <div className="py-10 bg-accent">
      <Container as="section" id="contact">
        <SectionTitle title="Reach out" subtitle="Contact" />
        <form
          action="https://api.staticforms.xyz/submit"
          method="post"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-12 py-10">
            <div className="hidden sm:flex col-span-12 sm:col-span-4 lg:col-span-3 w-full">
              <PersonalCard showButton={false} />
            </div>
            <div className="col-span-12 sm:col-span-8 lg:col-span-9 w-full pl-0 sm:pl-20 pt-10 sm:pt-0">
              <Input
                appearance="default"
                label="Name"
                name="name"
                error={touched.name && errors.name}
                onChange={handleChange}
                onBlur={handleBlur}
                value={contact.name}
                placeholder="Your name"
              ></Input>
              <Input
                appearance="default"
                className="bg-default"
                type="email"
                label="Email"
                name="email"
                error={touched.email && errors.email}
                onChange={handleChange}
                onBlur={handleBlur}
                value={contact.email}
                placeholder="Your email"
              ></Input>
              <Input
                appearance="default"
                label="Subject"
                name="subject"
                error={touched.subject && errors.subject}
                onChange={handleChange}
                onBlur={handleBlur}
                value={contact.subject}
                placeholder="What is it about?"
              ></Input>
              <Input
                appearance="default"
                as="textarea"
                rows={4}
                label="Message"
                name="message"
                error={touched.message && errors.message}
                onChange={handleChange}
                onBlur={handleBlur}
                value={contact.message}
                placeholder="Leave a message"
              ></Input>
              <input type="hidden" name="replyTo" value="@"></input>
              <input type="text" name="honeypot" style={{ display: "none" }} />
              <div className="flex items-center justify-end">
                <Button
                  size="small"
                  variant="secondary"
                  type="submit"
                  disabled={isLoading}
                >
                  Send message
                </Button>
              </div>

              <AnimatePresence>
                {response && response.message && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-4"
                  >
                    <div className="py-4">
                      <Alert
                        type={response.type}
                        message={response.message}
                      ></Alert>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default ContactSection;
