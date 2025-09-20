'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Send, MapPin, Mail, Phone } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

const ContactSection = () => {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you shortly.",
    });
    form.reset();
  }

  return (
    <section id="contact" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <h2 className="font-headline text-4xl font-bold text-center tracking-tighter sm:text-5xl">
          Contact Us
        </h2>
        <p className="mt-4 text-center text-lg text-foreground/80 text-balance">
          Have a project in mind or want to learn more? We&apos;d love to hear from you.
        </p>
        
        <div className="mt-12 grid md:grid-cols-2 gap-12">
          {/* Left Column: Contact Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 mt-1 text-primary" />
              <div>
                <h3 className="font-semibold text-lg">Address</h3>
                <p className="text-foreground/80">Shariati Street (Qeytarieh neighborhood), at the beginning of Sadr Bridge, Simiyari Alley, No. 2, Tehran, Iran</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 mt-1 text-primary" />
              <div>
                <h3 className="font-semibold text-lg">Email</h3>
                <a href="mailto:Aerovision.su.2018@gmail.com" className="text-foreground/80 hover:text-primary transition-colors">Aerovision.su.2018@gmail.com</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 mt-1 text-primary" />
              <div>
                <h3 className="font-semibold text-lg">Phone</h3>
                <p className="text-foreground/80">+98 912 500 2361</p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Name" {...field} />
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
                        <Input placeholder="your.email@example.com" {...field} />
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
                        <Textarea placeholder="Tell us about your project or inquiry..." {...field} rows={5} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </Form>
          </div>
        </div>

        <div className="mt-20">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6482.02235940983!2d51.41562407738006!3d35.75112111893322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e05d938b7c9a1%3A0x3a72a1b1323942ee!2sShariati%20St%2C%20Tehran%2C%20Tehran%20Province%2C%20Iran!5e0!3m2!1sen!2sus!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Aerovision Location"
              className="rounded-lg shadow-lg filter grayscale invert-[95%] contrast-90"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
