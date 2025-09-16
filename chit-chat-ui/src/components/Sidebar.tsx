// src/components/Sidebar.tsx
import { Link, useLocation } from "react-router-dom";
import { Cpu, Users, Menu, X } from "lucide-react";
import { useState } from "react";
import ChitChatLogo from "../assets/chit_chat_logo.svg";

export default function Sidebar({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: "/ai", label: "AI", icon: <Cpu className="h-5 w-5" /> },
    { to: "/community", label: "Community", icon: <Users className="h-5 w-5" /> },
  ];

  return (
    <div className="flex h-screen bg-gray-100 relative overflow-hidden">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex w-64 bg-gray-900 text-gray-100 flex-col">
        <div className="flex items-center gap-2 p-4 text-lg font-bold border-b border-gray-800">
          <img src={ChitChatLogo} alt="ChitChat logo" className="h-6 w-6" />
          <span>ChitChat</span>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          {navLinks.map(({ to, label, icon }) => (
            <Link
              key={to}
              to={to}
              className={`flex items-center gap-3 px-3 py-2 rounded-md transition ${
                location.pathname === to
                  ? "bg-gray-700 text-white"
                  : "hover:bg-gray-800"
              }`}
            >
              {icon}
              <span>{label}</span>
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t border-gray-800 text-sm text-gray-400">
          Built by Team 1 © 2025
        </div>
      </aside>

      {/* Mobile Hamburger Button */}
      <button
        className="absolute top-4 left-4 z-40 p-2 rounded-md bg-gray-800 text-white md:hidden"
        onClick={() => setIsOpen(true)}
      >
        <Menu className="h-6 w-6" />
      </button>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-opacity-50 transition-opacity backdrop-blur-xs"
            onClick={() => setIsOpen(false)}
          ></div>

          {/* Drawer Sidebar */}
          <aside
            className={`relative w-64 bg-gray-900 text-gray-100 flex flex-col transform transition-transform duration-300 ease-in-out ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="flex items-center justify-between px-4 border-b border-gray-800">
              <div className="flex items-center gap-2 text-lg font-bold">
                <img src={ChitChatLogo} alt="ChitChat logo" className="h-24 w-24" />
              </div>
              <button onClick={() => setIsOpen(false)}>
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="flex-1 p-4 space-y-2">
              {navLinks.map(({ to, label, icon }) => (
                <Link
                  key={to}
                  to={to}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-3 py-2 rounded-md transition ${
                    location.pathname === to
                      ? "bg-gray-700 text-white"
                      : "hover:bg-gray-800"
                  }`}
                >
                  {icon}
                  <span>{label}</span>
                </Link>
              ))}
            </nav>
          </aside>
        </div>
      )}

      {/* Main content */}
      <main className="flex-1 flex flex-col">{children}</main>
    </div>
  );
}
