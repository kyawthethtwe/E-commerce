import Link from "next/link";

export default function FooterBanner() {
  return (
    <div className="bg-highlight text-white py-8 px-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="space-y-2">
            <h2 className="text-2xl font-light">
              เพราะสังคมต้องการผู้นำที่มีคุณภาพ
            </h2>
            <h3 className="text-3xl font-medium">มาร่วมเดินทางไปกับเรา</h3>
          </div>
          <Link
            href="#"
            className="bg-white flex-shrink-0 text-primary-light2 px-3 py-2 sm:px-8 sm:py-3 rounded-full hover:bg-opacity-90 transition-colors"
          >
            สมัครเรียน
          </Link>
        </div>
      </div>
    </div>
  );
}
