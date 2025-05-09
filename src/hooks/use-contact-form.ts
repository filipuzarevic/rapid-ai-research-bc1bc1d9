
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "@/components/ui/sonner";
import { supabase } from "@/integrations/supabase/client";
import { contactFormSchema, ContactFormValues } from "@/components/contact/contact-form-schema";

export const useContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    setIsSubmitting(true);
    
    try {
      // Ensure all required fields are present and non-optional
      const submissionData = {
        name: values.name,
        company: values.company,
        email: values.email,
        message: values.message
      };
      
      // Step 1: Store the submission in Supabase
      const { error: dbError } = await supabase
        .from('contact_submissions')
        .insert(submissionData);
      
      if (dbError) {
        throw new Error(`Database error: ${dbError.message}`);
      }
      
      // Step 2: Send email notifications using Edge Function
      const response = await supabase.functions.invoke('send-contact-notification', {
        body: values
      });
      
      if (response.error) {
        throw new Error(`Email notification error: ${response.error.message}`);
      }

      console.log("Form submitted successfully:", { dbResult: "Success", emailResult: response.data });
      
      toast.success("Your message has been sent successfully!", {
        description: "We'll get back to you as soon as possible.",
      });
      
      setIsSubmitted(true);
      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to send message", {
        description: "Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setIsSubmitted(false);
  };

  return {
    form,
    isSubmitting,
    isSubmitted,
    onSubmit,
    resetForm
  };
};
