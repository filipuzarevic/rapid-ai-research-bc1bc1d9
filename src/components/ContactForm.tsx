
import React from "react";
import { Form } from "@/components/ui/form";
import { useContactForm } from "@/hooks/use-contact-form";
import ContactFormFields from "@/components/contact/contact-form-fields";
import ContactFormSuccess from "@/components/contact/contact-form-success";

const ContactForm = () => {
  const { form, isSubmitting, isSubmitted, onSubmit, resetForm } = useContactForm();

  if (isSubmitted) {
    return <ContactFormSuccess onReset={resetForm} />;
  }

  return (
    <div className="rounded-lg overflow-hidden transition-all duration-500">
      <div className="p-5 md:p-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <ContactFormFields isSubmitting={isSubmitting} />
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ContactForm;
