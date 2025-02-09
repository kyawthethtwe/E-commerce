import Image from "next/image";
export default function Logo() {
  return (
    <div className="flex gap-2">
      <div className="w-16 h-16 flex-shrink-0 ">
        <Image
          src="/favicon.ico"
          alt="Faculty of Business Administration Logo"
          width={64}
          height={64}
          className="object-contain w-full h-full"
        />
      </div>
      <div className="w-[3px] h-[70px] bg-primary flex-shrink-0" />
      <div>
        <h3 className="font-medium text-lg">คณะบริหารธุรกิจ</h3>
        <p className="text-sm">Faculty of Business Administration</p>
      </div>
    </div>
  );
}
