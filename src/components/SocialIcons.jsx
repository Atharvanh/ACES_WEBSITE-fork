import React from 'react';

export function InstagramIcon({ className = 'w-6 h-6' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="ig-radial" cx="20%" cy="105%" r="130%" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#fdf497" />
          <stop offset="10%" stopColor="#fdf497" />
          <stop offset="45%" stopColor="#fd5949" />
          <stop offset="60%" stopColor="#d6249f" />
          <stop offset="90%" stopColor="#285AEB" />
        </radialGradient>
      </defs>
      <circle cx="12" cy="12" r="11" fill="url(#ig-radial)" />
      <rect x="6" y="6" width="12" height="12" rx="3.5" stroke="#ffffff" strokeWidth="1.4" fill="none" />
      <circle cx="12" cy="12" r="3" stroke="#ffffff" strokeWidth="1.4" fill="none" />
      <circle cx="15.4" cy="8.6" r="0.8" fill="#ffffff" />
    </svg>
  );
}

export function LinkedinIcon({ className = 'w-6 h-6' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="1" y="1" width="22" height="22" rx="4" fill="#0A66C2" />
      <path
        d="M6.2 9h2.6v7.8H6.2V9zm1.3-3.8c.85 0 1.5.65 1.5 1.5s-.65 1.5-1.5 1.5c-.85 0-1.5-.65-1.5-1.5s.65-1.5 1.5-1.5zm3.7 3.8h2.5v1.1h.04c.35-.65 1.2-1.35 2.45-1.35 2.6 0 3.1 1.7 3.1 3.9v4.15h-2.6v-3.7c0-.9-.02-2.05-1.25-2.05-1.25 0-1.45.98-1.45 2v3.75h-2.6V9z"
        fill="#ffffff"
      />
    </svg>
  );
}

export function GithubIcon({ className = 'w-6 h-6' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="12" cy="12" r="11" fill="#181717" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 4a8 8 0 0 0-2.53 15.59c.4.07.55-.17.55-.38v-1.35c-2.22.48-2.69-1.07-2.69-1.07-.36-.92-.89-1.17-.89-1.17-.73-.5.05-.49.05-.49.8.06 1.23.83 1.23.83.71 1.22 1.87.87 2.33.67.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.65 7.65 0 0 1 4 0c1.53-1.03 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.74.54 1.49v2.21c0 .21.14.46.55.38A8 8 0 0 0 12 4z"
        fill="#ffffff"
      />
    </svg>
  );
}
