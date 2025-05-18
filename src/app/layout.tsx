// app/layout.tsx
import Sidebar from '../components/sideBar/Sidebar';
import './globals.css'; // se tiver estilos globais
import Header from '@/components/header/Header';
export const metadata = {
  title: 'Minha App',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Header/>
        <div className="flex">
          <Sidebar />
          <main className="flex-1 p-6">{children}</main>
        </div>
      </body>
    </html>
  );
}
