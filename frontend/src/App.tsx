import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

function HomePage() {
  return <div className="p-6 text-2xl font-bold">PNCP Licitações - Em construção 🚧</div>;
}

function NotFoundPage() {
  return <div className="p-6 text-lg">404 - Página não encontrada</div>;
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
