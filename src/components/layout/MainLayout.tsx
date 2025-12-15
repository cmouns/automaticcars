import type { PropsWithChildren } from 'react';
import type { Session } from '@supabase/supabase-js';

// Importez vos composants de layout
import Navbar from './Navbar';
import Footer from './Footer'; 

interface MainLayoutProps {
    session: Session | null;
    onLogout: () => void;
    onOpenAuth: () => void;
    currentPage: string;
    onNavigate: (page: string) => void;
}

const MainLayout: React.FC<PropsWithChildren<MainLayoutProps>> = ({
    children,
    session,
    onLogout,
    onOpenAuth,
    currentPage,
    onNavigate,
}) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar
                session={session}
                onLogout={onLogout}
                onOpenAuth={onOpenAuth}
                currentPage={currentPage}
                onNavigate={onNavigate}
            />

            <main className="flex-grow pt-20"> 
                {children}
            </main>

            <Footer />
        </div>
    );
};

export default MainLayout;