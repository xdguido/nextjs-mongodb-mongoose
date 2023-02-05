import { cva, VariantProps } from 'class-variance-authority';
import Link from 'next/link';

const buttonStyles = cva(
    [
        'flex items-center justify-center gap-2 px-6 py-2.5 font-medium leading-tight rounded-md lg:text-lg',
        'focus:outline-none focus-visible:ring-offset-2 focus-visible:ring-2',
        'transition duration-150 ease-in-out'
    ],
    {
        variants: {
            colorScheme: {
                blue: [''],
                gray: [''],
                black: ['']
            },
            style: {
                solid: ['shadow-md text-slate-50', 'hover:shadow-lg', 'focus-visible:shadow-lg'],
                outline: ['py-2 border bg-inherit']
            },
            fullWidth: { true: 'w-full' },
            uppercase: { true: 'uppercase' },
            square: { true: 'px-2.5' }
        },
        defaultVariants: {
            colorScheme: 'blue',
            style: 'solid'
        },
        compoundVariants: [
            // Applied via:
            //   `button({ colorScheme: "blue", size: "medium" })`
            {
                colorScheme: 'blue',
                style: 'solid',
                class: ['bg-blue-600', 'hover:bg-blue-500 ', 'focus-visible:bg-blue-500']
            },
            {
                colorScheme: 'blue',
                style: 'outline',
                class: [
                    'border-blue-600 text-blue-600',
                    'hover:border-blue-500 hover:text-blue-500',
                    'focus-visible:border-blue-500 focus-visible:text-blue-500'
                ]
            },
            {
                colorScheme: 'gray',
                style: 'solid',
                class: ['bg-gray-600', 'hover:bg-gray-500 ', 'focus-visible:bg-gray-500']
            },
            {
                colorScheme: 'gray',
                style: 'outline',
                class: [
                    'border-gray-600 text-gray-600',
                    'hover:border-gray-500 hover:text-gray-500',
                    'focus-visible:border-gray-500 focus-visible:text-gray-500'
                ]
            },
            {
                colorScheme: 'black',
                style: 'solid',
                class: ['bg-black', 'hover:bg-blue-600 ', 'focus-visible:bg-blue-600']
            },
            {
                colorScheme: 'black',
                style: 'outline',
                class: [
                    'border-black text-black',
                    'hover:border-blue-600 hover:text-blue-600',
                    'focus-visible:border-blue-600 focus-visible:text-blue-600'
                ]
            }
        ]
    }
);

interface ButtonProps {
    href?: string;
    children: React.ReactNode;
    onClick?: () => void;
}

export interface Props extends ButtonProps, VariantProps<typeof buttonStyles> {}

export default function Button({
    colorScheme,
    style,
    fullWidth,
    uppercase,
    square,
    children,
    onClick,
    href,
    ...props
}: Props) {
    return href ? (
        <Link
            href={href}
            className={buttonStyles({ colorScheme, style, fullWidth, uppercase, square })}
            {...props}
        >
            {children}
        </Link>
    ) : (
        <button
            onClick={onClick}
            className={buttonStyles({ colorScheme, style, fullWidth, uppercase, square })}
            {...props}
        >
            {children}
        </button>
    );
}
