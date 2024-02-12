import * as React from 'react';
import * as SheetPrimitive from '@radix-ui/react-dialog';

declare const Sheet: React.FC<SheetPrimitive.DialogProps>;
declare const SheetTrigger: React.ForwardRefExoticComponent<SheetPrimitive.DialogTriggerProps & React.RefAttributes<HTMLButtonElement>>;
declare const SheetClose: React.ForwardRefExoticComponent<SheetPrimitive.DialogCloseProps & React.RefAttributes<HTMLButtonElement>>;
declare const SheetContent: React.ForwardRefExoticComponent<Omit<any, "ref"> & React.RefAttributes<unknown>>;
declare const SheetHeader: {
    ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element;
    displayName: string;
};
declare const SheetFooter: {
    ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element;
    displayName: string;
};
declare const SheetTitle: React.ForwardRefExoticComponent<Omit<any, "ref"> & React.RefAttributes<unknown>>;
declare const SheetDescription: React.ForwardRefExoticComponent<Omit<any, "ref"> & React.RefAttributes<unknown>>;

export { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger };
