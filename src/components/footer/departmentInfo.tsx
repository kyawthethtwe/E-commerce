import Link from "next/link"

interface Department {
    name: string;
    link: string;
}
const departments : Department[] = [
    {
        name: "ฝ่ายบริหาร",
        link: "#"
    },
    {
        name: "ฝ่ายวิชาการและวิจัย",
        link: "#"
    },
    {
        name: "ฝ่ายแผนและประกันคุณภาพการศึกษา",
        link: "#"
    },
    {
        name: "ฝ่ายพัฒนานักศึกษา",
        link: "#"
    },
    {
        name: "สำนักงานคณบดี",
        link: "#"
    }
]

export default function DepartmentInfo() {
    return (
        <div>
            <h4 className="font-medium text-primary mb-4">หน่วยงานภายใน</h4>
            <ul className="space-y-2 text-sm text-primary-light1">
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