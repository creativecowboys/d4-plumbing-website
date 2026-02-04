import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#F7F7F7]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Open+Sans:wght@400;500;600&display=swap');
        
        :root {
          --primary: #B08C47;
          --secondary: #252525;
          --background: #F7F7F7;
          --accent: #F1EADA;
        }
        
        body {
          font-family: 'Open Sans', sans-serif;
        }
        
        h1, h2, h3, h4, h5, h6 {
          font-family: 'Montserrat', sans-serif;
        }
        
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #F7F7F7;
        }
        
        ::-webkit-scrollbar-thumb {
          background: #B08C47;
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: #9a7a3d;
        }
      `}</style>
      
      <Header />
      <main className="pb-16 md:pb-0">
        {children}
      </main>
      <Footer />
    </div>
  );
}