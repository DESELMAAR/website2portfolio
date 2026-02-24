import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary';
};

export default function Button2({ className,variant, ...props }: ButtonProps) {
  return <button {...props} className={cn(buttonVariants({ variant }),className)}/>;
}

const buttonVariants = cva('py-2 px-4 rounded-md font-semibold hover:opacity-50', {
  variants: {
    variant: {
      primary: 'bg-red-700 text-white',
      secondary: 'bg-grayscale-700 text-black border border-4 border-black',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

// import { cva } from "class-variance-authority";

// type ButtonProps=React.HTMLAttributes<HTMLButtonElement> & {
//     variant?:'primary'| 'secondary';
// };
// export default function Button2({variant,...props}:ButtonProps){
//     return<button {...props} className={buttonVariants({variant})}/>;
// }

// const buttonVariants = cva(
//     'py-2 px-4 rounded-md font-semibold hover:opacity-50',{
//         variants:{
//             variant:{
//                 primary:'bg-gradient-to-r from-primary-500 to-primary-700 text-black',
//                 secondary:'bg-grayscale-700 text-white',
//             },
//         },
//         defaultVariants:{
//             variant:'primary'
//         }
//     },
// );