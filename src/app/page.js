import Header from "@/components/header";
import LeftColumn from "@/components/left-column";
import RightColumn from "@/components/right-column";
import SideNavbar from "@/components/side-navbar";

export default function Home() {
  return (
    <div className="flex">
      <SideNavbar />
      <div className="flex-1 md:flex h-screen relative">
        <Header />
        <LeftColumn />
        <RightColumn />
      </div>
    </div>
  );
}
