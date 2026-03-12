import { Outlet } from "react-router-dom";
import TutorSidebar from "@/components/layout/TutorSidebar";

const TutorLayout = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <TutorSidebar />
      <main className="flex-1 p-8 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default TutorLayout;
