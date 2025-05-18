// components/Sidebar.tsx
import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-gray-800 text-white p-4">
      <h2 className="text-xl font-bold mb-4">Menu</h2>
      <ul className="space-y-2">
        <li>
          <Link href="/" className="block hover:bg-gray-700 p-2 rounded">Home</Link>
        </li>
        <li>
          <Link href="/produtos" className="block hover:bg-gray-700 p-2 rounded">Produtos</Link>
        </li>
        <li>
          <Link href="/contato" className="block hover:bg-gray-700 p-2 rounded">Contato</Link>
        </li>
      </ul>
    </aside>
  );
}
