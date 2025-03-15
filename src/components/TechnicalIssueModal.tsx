
import React from 'react';
import { X } from 'lucide-react';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle 
} from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
import { useChat } from '@/hooks/useChat';
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

interface TechnicalIssueModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const formSchema = z.object({
  issueDescription: z.string().min(10, { message: 'يرجى وصف المشكلة بشكل أكثر تفصيلاً (10 أحرف على الأقل)' }),
});

const TechnicalIssueModal: React.FC<TechnicalIssueModalProps> = ({ isOpen, onClose }) => {
  const { sendMessage } = useChat();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      issueDescription: '',
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    sendMessage(`بلاغ عن مشكلة تقنية: ${values.issueDescription}`);
    form.reset();
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl">الإبلاغ عن مشكلة تقنية</DialogTitle>
          <DialogDescription>
            يرجى وصف المشكلة التقنية التي تواجهها بالتفصيل، وسنقوم بمساعدتك في أقرب وقت ممكن.
          </DialogDescription>
        </DialogHeader>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="issueDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>وصف المشكلة</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="اشرح المشكلة التي تواجهها بالتفصيل..." 
                      className="min-h-[120px]" 
                      {...field} 
                    />
                  </FormControl>
                  <FormDescription>
                    كلما كان وصفك للمشكلة أكثر تفصيلاً، كلما كان بإمكاننا مساعدتك بشكل أفضل.
                  </FormDescription>
                </FormItem>
              )}
            />

            <div className="flex justify-between mt-4">
              <Button variant="ghost" type="button" onClick={onClose}>
                <X className="ml-2 h-4 w-4" />
                إلغاء
              </Button>
              <Button type="submit">
                إرسال البلاغ
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default TechnicalIssueModal;
