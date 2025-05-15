
import React from "react";
import { useFormContext } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import StaggeredChildren from "@/components/ui/staggered-children";

interface ContactFormFieldsProps {
  isSubmitting: boolean;
}

const ContactFormFields = ({ isSubmitting }: ContactFormFieldsProps) => {
  const form = useFormContext();
  
  return (
    <StaggeredChildren animation="animate-fade-up" staggerDelay={100} baseDelay={100}>
      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem className="mb-4">
            <FormLabel className="mb-2 block text-gray-700 font-medium">Full Name</FormLabel>
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
          <FormItem className="mb-4">
            <FormLabel className="mb-2 block text-gray-700 font-medium">Company</FormLabel>
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
          <FormItem className="mb-4">
            <FormLabel className="mb-2 block text-gray-700 font-medium">Email</FormLabel>
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
          <FormItem className="mb-4">
            <FormLabel className="mb-2 block text-gray-700 font-medium">Message</FormLabel>
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
      
      <div className="pt-4">
        <Button 
          type="submit" 
          className="w-full bg-gradient-to-r from-[#F97316] to-[#F59E0B] hover:from-[#F59E0B] hover:to-[#F97316] text-white py-6 h-auto transition-all duration-500 hover:shadow-lg"
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
  );
};

export default ContactFormFields;
