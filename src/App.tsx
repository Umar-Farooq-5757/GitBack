import { Outlet } from "react-router-dom";
import "./App.css";
import { AppSidebar } from "./components/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";

function App() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main style={{ padding: "1rem" }}>
      <SidebarTrigger className="p-2 border rounded-md hover:bg-zinc-100" />
        <Outlet />
      </main>
    </SidebarProvider>
  );
}

export default App;
