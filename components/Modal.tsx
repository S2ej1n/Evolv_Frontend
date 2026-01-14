// [공통 컴포넌트] 모달창

import { ReactNode } from 'react';
import { Dialog, DialogTrigger, DialogContent, DialogHeader,
  DialogTitle, DialogDescription } from "@/components/ui/dialog"

type ModalProps = {
  trigger: ReactNode;
  title?: string;
  description?: string;
  children: ReactNode;
};

export function Modal({trigger, title, description, children} : ModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>
            {description}
          </DialogDescription>
        </DialogHeader>

        {children}
        
      </DialogContent>
    </Dialog>
  )
}
