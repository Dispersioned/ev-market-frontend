import { Navigate, Route, Routes } from 'react-router-dom';

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<div>home page</div>} />
      <Route path="second" element={<div>second page</div>} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
}
