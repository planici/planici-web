import { ReactNode, ButtonHTMLAttributes } from "react";
import clsx from "clsx";

interface AuthBtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  icon?: ReactNode;
}

export default function AuthButton({
  text,
  icon,
  className,
  ...props
}: Readonly<AuthBtnProps>) {
  return (
    <button
      className={clsx(
        "flex justify-center items-center gap-3 w-full h-12 rounded-lg border border-neutral-700",
        "bg-[#090909] hover:bg-neutral-900 transition-all duration-150",
        "disabled:opacity-50 disabled:pointer-events-none",
        className
      )}
      {...props}
    >
      {icon && (
        <span className='flex size-7 items-center justify-center'>{icon}</span>
      )}
      <span className='font-semibold'>{text}</span>
    </button>
  );
}
