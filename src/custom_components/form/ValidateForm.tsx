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
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

// Define the validation schema
const validateSchema = z.object({
  code: z
    .string()
    .min(6, { message: "Code must be 6 digits" })
    .max(6, { message: "Code must be 6 digits" })
    .regex(/^\d{6}$/, { message: "Code must contain only digits" }),
});

type FormValues = z.infer<typeof validateSchema>;

const ValidateForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Initialize the form
  const form = useForm<FormValues>({
    resolver: zodResolver(validateSchema),
    defaultValues: {
      code: "",
    },
  });

  // Handle form submission
  const onSubmit = async (data: FormValues) => {
    setIsLoading(true);
    console.log(data);
    try {
      // Simulate API call
      // Reset form after successful submission
      form.reset();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="code"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Verification Code</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter 6-digit code"
                  {...field}
                  maxLength={6}
                  className="text-center text-lg tracking-widest"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  autoComplete="one-time-code"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Verifying...
            </>
          ) : (
            "Verify Code"
          )}
        </Button>
      </form>
    </Form>
  );
};

export default ValidateForm;
