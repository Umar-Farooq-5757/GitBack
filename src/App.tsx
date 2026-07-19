import { Outlet } from "react-router-dom";
import "./App.css";
import { AppSidebar } from "./components/AppSidebar";
import { SidebarProvider } from "./components/ui/sidebar";
import Header from "./components/Header";

function App() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="flex flex-col flex-1 min-h-screen">
        <Header />
        <main className="p-4 flex-1">
          <Outlet />
        </main>
      </div>
    </SidebarProvider>
  );
}

export default App;