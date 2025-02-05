"use client"
import { Button } from "@/components/ui/button"
import { ChevronUp } from "lucide-react"
import Image from "next/image"

export default function Test() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Image
                src="/placeholder.svg?height=60&width=60"
                alt="Faculty Logo"
                width={60}
                height={60}
                className="h-12 w-auto"
              />
              <div className="flex flex-col">
                <span className="text-lg font-semibold">คณะบริหารธุรกิจ</span>
                <span className="text-sm text-gray-600">Faculty of Business Administration</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" className="text-red-600">
                สมัครเรียน
              </Button>
              <Button variant="ghost" className="text-gray-600">
                สายตรงคณบดี
              </Button>
              <div className="flex items-center gap-2">
                <Image
                  src="/placeholder.svg?height=16&width=24"
                  alt="Thai flag"
                  width={24}
                  height={16}
                  className="rounded"
                />
                <span className="text-gray-600">▼</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Navigation display at the end of the header  */}
      <nav className="border-b bg-white ">
        <div className="container mx-auto px-4">
          <ul className="flex items-center justify-end space-x-8">
            <li className="py-4">
              <a href="#" className="text-gray-700 hover:text-gray-900">
                รู้จักคณะ
              </a>
            </li>
            <li className="py-4">
              <a href="#" className="text-gray-700 hover:text-gray-900">
                หลักสูตรการศึกษา
              </a>
            </li>
            <li className="py-4">
              <a href="#" className="text-gray-700 hover:text-gray-900">
                ข่าวสารคณะ
              </a>
            </li>
            <li className="py-4">
              <a href="#" className="text-gray-700 hover:text-gray-900">
                สื่อสารกับคณะ
              </a>
            </li>
            <li className="py-4">
              <a href="#" className="text-gray-700 hover:text-gray-900">
                เอกสาร
              </a>
            </li>
            <li className="py-4">
              <a href="#" className="text-gray-700 hover:text-gray-900">
                ติดต่อคณะ
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section with text above image */}
      <section className="container mx-auto px-4 py-8">
        {/* Text Content */}
        <div className="mb-8 flex flex-row justify-between">
          <h1 className="text-5xl font-bold text-gray-900">
            คณะบริหารธุรกิจ
            <span className="mt-2 block text-4xl font-normal">มหาวิทยาลัยเทคโนโลยีราชมงคลอีสาน</span>
          </h1>
          <div className="max-w-md bg-white p-4 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900">
              เราสร้างผู้นำที่ก้าว
              <br />
              ทันเทคโนโลยีและ
              <br />
              ให้คุณค่าแก่สังคม
            </h2>
          </div>
        </div>

        {/* Image Container */}
        <div className="relative h-[300px] max-sm:h-[300px] w-full rounded-lg overflow-hidden">
          <Image 
            src="/placeholder.svg?height=600&width=1920" 
            alt="University Building" 
            fill 
            className="object-cover"
          />
        </div>
      </section>

      {/* Bottom Navigation */}
      <nav className="bg-[#1e3a8a] text-white">
        <div className="container mx-auto px-4">
          <ul className="flex items-center justify-between">
            {["หลักสูตรการสอน", "ค่าเรียน", "การกู้ยืม", "ปฏิทินการศึกษา", "ทุนการศึกษา", "ข่าวสารคณะ", "จากรุ่นพี่"].map((item) => (
              <li key={item} className="py-4">
                <a href="#" className="hover:text-gray-200">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Scroll to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 rounded-full bg-white p-2 shadow-lg"
      >
        <ChevronUp className="h-6 w-6" />
      </button>
    </div>
  )
}

