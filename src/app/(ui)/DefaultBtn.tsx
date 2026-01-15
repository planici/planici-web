import clsx from "clsx";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface DButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    icon?: ReactNode
}

export default function DButton({text, icon, className, ...props}: Readonly<DButtonProps>) {
    return (
        <button
              type='submit'
              className={clsx('flex justify-center items-center gap-4 w-full h-12 rounded-lg border border-neutral-700 bg-foreground text-[#090909] hover:bg-foreground/90 transition-all duration-150 text-sm', className)}
              {...props}
            >
            {icon && (
                <span className="flex item-center justify-center">{icon}</span>
            )}
              {text}
            </button>
    )
}