import LeftSidebar from "../core/LeftSidebar";
import OnlineContactsSidebar from "../core/OnlineContactSidebar";
import TopBar from "../core/TopBar";

interface MainLayout {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayout) => {
  return (
    <div className="flex min-h-screen flex-col bg-gray-100">
      {/* Top Navigation Bar */}
      <TopBar />

      {/* Main Content Area */}
      <div className="flex flex-1">
        {/* Left Sidebar - Navigation and Ads */}
        <LeftSidebar />

        {/* Main Content */}
        <main className="flex-1 p-4">
          <div className="mx-auto max-w-2xl">{children}</div>
        </main>

        {/* Right Sidebar - Online Contacts */}
        <OnlineContactsSidebar />
      </div>
    </div>
  );
};

export default MainLayout;
