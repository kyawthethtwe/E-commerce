
interface SubHeadingProps {
    text: string
    className?: string
}

export default function SubHeading({ text, className }: SubHeadingProps) {
    return (
        <h2 className={`text-2xl xl:text-3xl 2xl:text-4xl font-bold mb-8 ${className}`}>{text}</h2>
    )
}