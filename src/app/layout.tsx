"use client"

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import './globals.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { DataProvider } from './contexts/data';
import { Viewport } from 'next';

const metaDetails: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'Bienvenue chez Le Groupe Les Petits Pieds',
    description: '',
  },
  '/lespetitspieds': {
    title: 'Bienvenue chez Les Petits Pieds',
    description: '',
  },
  '/lespetitspandas': {
    title: 'Bienvenue chez Les Petits Pandas',
    description: '',
  },
  '/lespetitschats': {
    title: 'Bienvenue chez Les Petits Chats',
    description: '',
  },
  '/mentionslegales': {
    title: 'Mentions légales du Groupe Les Petits Pieds',
    description: '',
  },
  '/contact': {
    title: 'Formulaire de contact du Groupe Les Petits Pieds',
    description: '',
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { title, description } = metaDetails[pathname] || {};
  useEffect(() => {
    document.title = title;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const newMetaDescription = document.createElement('meta');
      newMetaDescription.name = 'description';
      newMetaDescription.content = description;
      document.head.appendChild(newMetaDescription);
    }
  }, [pathname, title, description]);
  return (
    <html lang="fr">
      <body className={`antialiased text-black font-medium bg-[#FFF5E4]`}>
        <DataProvider>
          <Provider store={store}>
            <Header />
            {children}
            <Footer />
          </Provider>
        </DataProvider>
      </body>
    </html>
  );
}

export const viewport: Viewport = {
  themeColor: '#FFF5E4',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  maximumScale: 1,
  userScalable: false,
};
