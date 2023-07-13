import Feed from "@/components/Feed";
import Sidebar from "@/components/Sidebar";
import Widgets from "./Widgets";

export default function Home() {
  return (
    <main className="flex min-h-screen mx-auto">
      {/* Sidebar */}
      <Sidebar />

      {/* Feed */}
      <Feed />
      {/* Widgets */}
      <Widgets />
      {/* Modal */}
    </main>
  );
}
