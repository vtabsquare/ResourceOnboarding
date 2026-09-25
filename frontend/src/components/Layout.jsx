import React from 'react';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
    return (
        <div className="flex min-h-screen bg-slate-50">
            <Sidebar />
            {/* Main content: adds top padding on mobile for hamburger button */}
            <div className="flex-1 flex flex-col min-w-0 pt-14 lg:pt-0">
                <div className="flex justify-end border-b border-slate-200 bg-white px-4 py-3">
                    <a href="https://www.vtabsquare.com/?demo=1&product=resource-onboarding&source=resource-onboarding-app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700 transition-colors">Contact for Demo ↗</a>
                </div>
                {children}
            </div>
        </div>
    );
};

export default Layout;
