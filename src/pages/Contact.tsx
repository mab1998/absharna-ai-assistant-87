
import React from 'react';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { ArrowRight, Mail, Phone, Building, Send } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
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
import { toast } from "@/components/ui/use-toast";

const formSchema = z.object({
  name: z.string().min(2, { message: 'الاسم مطلوب' }),
  email: z.string().email({ message: 'يرجى إدخال بريد إلكتروني صحيح' }),
  subject: z.string().min(5, { message: 'يرجى إدخال عنوان للرسالة' }),
  message: z.string().min(10, { message: 'يرجى إدخال رسالة لا تقل عن 10 أحرف' }),
});

const Contact = () => {
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real app, this would send the contact form data to a server
    console.log(values);
    
    toast({
      title: "تم إرسال رسالتك بنجاح",
      description: "سنقوم بالرد عليك في أقرب وقت ممكن.",
    });
    
    form.reset();
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      
      <main className="flex-1">
        <div className="container max-w-4xl mx-auto py-8 px-4">
          <Button 
            variant="ghost" 
            className="mb-6" 
            onClick={() => navigate('/')}
          >
            <ArrowRight className="ml-2 h-4 w-4" />
            العودة للصفحة الرئيسية
          </Button>

          <h1 className="text-3xl font-bold mb-10 text-absher">تواصل معنا</h1>
          
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-8">
              <h2 className="text-xl font-semibold mb-4">معلومات الاتصال</h2>
              
              <div className="flex items-center gap-3">
                <div className="bg-absher h-10 w-10 flex items-center justify-center rounded-full text-white">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">البريد الإلكتروني:</h3>
                  <p className="text-muted-foreground">support@absher.sa</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="bg-absher h-10 w-10 flex items-center justify-center rounded-full text-white">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">رقم الهاتف:</h3>
                  <p className="text-muted-foreground">920000000</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="bg-absher h-10 w-10 flex items-center justify-center rounded-full text-white">
                  <Building className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">العنوان:</h3>
                  <p className="text-muted-foreground">وزارة الداخلية، الرياض، المملكة العربية السعودية</p>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-6 rounded-xl">
              <h2 className="text-xl font-semibold mb-6">أرسل رسالة</h2>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>الاسم الكامل</FormLabel>
                        <FormControl>
                          <Input placeholder="أدخل اسمك الكامل" {...field} />
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
                        <FormLabel>البريد الإلكتروني</FormLabel>
                        <FormControl>
                          <Input placeholder="أدخل بريدك الإلكتروني" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>موضوع الرسالة</FormLabel>
                        <FormControl>
                          <Input placeholder="أدخل موضوع الرسالة" {...field} />
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
                        <FormLabel>الرسالة</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="اكتب رسالتك هنا..." 
                            className="min-h-[120px]" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button type="submit" className="w-full">
                    <Send className="ml-2 h-4 w-4" />
                    إرسال الرسالة
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="border-t py-4 text-center text-sm text-muted-foreground">
        <div className="container max-w-5xl mx-auto">
          <p>© وزارة الداخلية - المملكة العربية السعودية - جميع الحقوق محفوظة {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
