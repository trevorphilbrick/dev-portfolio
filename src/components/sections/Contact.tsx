import emailjs from "@emailjs/browser";
import { FormControl, FormItem, FormLabel, Form } from "../ui/form";
import { Input } from "../ui/input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { useState } from "react";

const formSchema = z.object({
  message: z.string().min(1, {
    message: "Message is required",
  }),
  name: z.string().min(1, {
    message: "Name is required",
  }),
  email: z.string().email({
    message: "Invalid email address",
  }),
});

emailjs.init({
  publicKey: "UqpiT4pzeaHneZ_Hn",
  blockHeadless: true,
  limitRate: {
    throttle: 1500,
  },
});

function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      message: "",
      name: "",
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    await emailjs.send("service_rbienkb", "template_fp45g3b", values);
    setIsLoading(false);
  }
  return (
    <div
      className="flex flex-col gap-4  py-12 bg-secondary-background"
      id="contact"
    >
      <div className="container mx-auto px-4 md:px-0  max-w-2xl">
        <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input {...form.register("name")} />
              </FormControl>
            </FormItem>
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...form.register("email")} />
              </FormControl>
            </FormItem>
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea {...form.register("message")} />
              </FormControl>
            </FormItem>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Sending..." : "Send"}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}

export default Contact;
