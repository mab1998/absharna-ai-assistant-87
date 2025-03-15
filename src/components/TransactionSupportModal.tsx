
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
import { Form, FormField, FormItem, FormLabel, FormControl } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

interface TransactionSupportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const formSchema = z.object({
  transactionType: z.string().min(2, { message: 'يرجى تحديد نوع المعاملة' }),
  requestDetails: z.string().min(10, { message: 'يرجى وصف طلبك بشكل أكثر تفصيلاً (10 أحرف على الأقل)' }),
});

const TransactionSupportModal: React.FC<TransactionSupportModalProps> = ({ isOpen, onClose }) => {
  const { sendMessage } = useChat();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      transactionType: '',
      requestDetails: '',
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    sendMessage(`طلب مساعدة في معاملة: ${values.transactionType}\n\nالتفاصيل: ${values.requestDetails}`);
    form.reset();
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl">طلب المساعدة في إجراء معاملة</DialogTitle>
          <DialogDescription>
            يمكنك طلب المساعدة في إجراء معاملة من خلال تعبئة النموذج التالي.
          </DialogDescription>
        </DialogHeader>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="transactionType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>نوع المعاملة</FormLabel>
                  <FormControl>
                    <Input placeholder="مثال: تجديد هوية، رخصة قيادة، جواز سفر..." {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="requestDetails"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>تفاصيل الطلب</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="اشرح ما تحتاج المساعدة فيه بالتفصيل..." 
                      className="min-h-[120px]" 
                      {...field} 
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <div className="flex justify-between mt-4">
              <Button variant="ghost" type="button" onClick={onClose}>
                <X className="ml-2 h-4 w-4" />
                إلغاء
              </Button>
              <Button type="submit">
                إرسال الطلب
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default TransactionSupportModal;
