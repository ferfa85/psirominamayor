import {createRoot, hydrateRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const root = document.getElementById('root')!;

// El build deja el HTML prerenderizado dentro de #root: hidratar en vez de re-renderizar.
if (root.hasChildNodes()) {
  hydrateRoot(root, <App />);
} else {
  createRoot(root).render(<App />);
}
