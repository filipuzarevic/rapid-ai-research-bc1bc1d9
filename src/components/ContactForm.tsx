
import React, { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/sonner";
import { supabase } from "@/integrations/supabase/client";
import { CircleCheck, Loader2 } from "lucide-react";
import StaggeredChildren from "@/components/ui/staggered-children";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  company: z.string().min(2, {
    message: "Company must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
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
  }

  if (isSubmitted) {
    return (
      <div className="bg-white shadow-lg rounded-lg p-6 md:p-8 border border-gray-100 text-center">
        <div className="mb-6 flex justify-center">
          <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center animate-zoom-in">
            <CircleCheck className="h-8 w-8 text-green-600" />
          </div>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2 animate-fade-up">Thank You!</h3>
        <p className="text-gray-600 mb-6 animate-fade-up">
          We've received your message and will get back to you within 24 hours.
        </p>
        <Button 
          onClick={() => setIsSubmitted(false)} 
          className="bg-agency-purple hover:bg-agency-navy text-white transition-all duration-300"
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-white shadow-xl rounded-lg overflow-hidden border border-gray-100 transition-all duration-500 hover:shadow-2xl">
      <div className="p-6 md:p-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <StaggeredChildren animation="animate-fade-up" staggerDelay={100} baseDelay={100}>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Your name" 
                        {...field} 
                        className="border-gray-300 focus:border-agency-purple focus:ring-agency-purple/20 transition-all" 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Your company name" 
                        {...field} 
                        className="border-gray-300 focus:border-agency-purple focus:ring-agency-purple/20 transition-all" 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Your email address" 
                        {...field} 
                        className="border-gray-300 focus:border-agency-purple focus:ring-agency-purple/20 transition-all" 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="How can we help you?"
                        className="min-h-32 border-gray-300 focus:border-agency-purple focus:ring-agency-purple/20 transition-all" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="pt-2">
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-agency-purple to-agency-blue hover:from-agency-blue hover:to-agency-purple text-white py-6 h-auto transition-all duration-500 hover:shadow-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </div>
              
              <div className="text-center text-sm text-gray-500 mt-4">
                By submitting this form, you agree to our privacy policy and terms of service.
              </div>
            </StaggeredChildren>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ContactForm;
