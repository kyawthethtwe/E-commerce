
import FooterBanner from "./footer-banner";
import Info from "./Info";
import DepartmentInfo from "./departmentInfo";
import SocialMedia from "./social-media";
import MainPadding from "../ui/MainPadding";
import Logo from "./Logo";
export default function Footer() {
  return (
    <div className="w-full">
      <FooterBanner />
      <MainPadding className="py-12 max-sm:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-8">
           <Logo />
           <Info />
           <DepartmentInfo />
           <SocialMedia />
          </div>
      </MainPadding>
    </div>
  );
}
