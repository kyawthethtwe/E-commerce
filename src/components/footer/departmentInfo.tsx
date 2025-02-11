import Link from "next/link"

interface Department {
    name: string;
    link: string;
}
const departments : Department[] = [
    {
        name: "Electronics & Gadgets",
        link: "/category/electronics"
    },
    {
        name: "Fashion & Accessories",
        link: "/category/fashion"
    },
    {
        name: "Home & Living",
        link: "/category/home"
    },
    {
        name: "Sports & Outdoor",
        link: "/category/sports"
    },
    {
        name: "Books & Media",
        link: "/category/books"
    }
]

export default function DepartmentInfo() {
    return (
        <div>
            <h4 className="font-medium text-primary mb-4 xl:text-xl 2xl:text-xl">Categories</h4>
            <ul className="space-y-2 text-sm  xl:text-xl 2xl:text-2xl text-primary-light1">
                {departments.map((department) => (
                    <li key={department.name}>
                        <Link href={department.link} className="hover:text-highlight">
                            {department.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}