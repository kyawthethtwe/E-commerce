import Link from "next/link";

export default function FooterBanner() {
  return (
    <div className="bg-highlight text-white py-8 px-4 xl:py-10 2xl:py-16 ">
      <div className="px-20">
        <div className="flex justify-between items-center">
          <div className="space-y-2 xl:space-y-6 2xl:space-y-8">
            <h2 className="text-2xl xl:text-3xl 2xl:text-4xl font-light">
              Ready to Start Selling?
            </h2>
            <h3 className="text-3xl xl:text-3xl 2xl:text-4xl font-medium">Join Our Marketplace Today</h3>
          </div>
          <Link
            href="#"
            className="bg-white flex-shrink-0 text-primary-light2 xl:text-text-xl 2xl:text-2xl px-3  py-2 sm:px-8 sm:py-3 xl:px-14 xl:py-5 2xl:px-16 2xl:py-6 rounded-full hover:bg-opacity-90 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}
