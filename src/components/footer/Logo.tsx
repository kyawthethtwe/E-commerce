import Image from "next/image";
export default function Logo() {
  return (
    <div className="flex gap-2">
      <div className="w-16 h-16 flex-shrink-0 xl:w-24 xl:h-24 2xl:w-24 2xl:h-24">
        <Image
          src="/favicon.ico"
          alt="Faculty of Business Administration Logo"
          width={64}
          height={64}
          className="object-contain w-full h-full"
        />
      </div>
      <div className="w-[3px] h-[70px] xl:h-[105px] 2xl:h-[105px] bg-primary flex-shrink-0" />
      <div className="space-y-1">
        <h3 className="font-medium text-lg xl:text-2xl 2xl:text-[26px]">คณะบริหารธุรกิจ</h3>
        <p className="text-sm font-medium  xl:text-base 2xl:text-[16px] ">Faculty of Business Administration</p>
      </div>
    </div>
  );
}
