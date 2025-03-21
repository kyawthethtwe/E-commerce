interface HeadingProps {
    text: string;
    className?: string;
}

export default function Heading({ text, className }: HeadingProps) {
    return (
        <h1 className={`text-2xl xl:text-3xl 2xl:text-4xl font-bold mb-8 ${className}`}>{text}</h1>
    )
}