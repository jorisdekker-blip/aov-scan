// src/components/steps/StepStart.tsx
'use client';
import { useWizard } from '@/context/WizardContext';

export function StepStart() {
  // @ts-ignore (Omdat de context nu bestaat, zal dit werken)
  const { dispatch } = useWizard();

  const handleStart = () => {
    // @ts-ignore
    dispatch({ type: 'GO_TO_STEP', payload: { step: 'step-heb-aov' } });
  };

  return (
    <div
      id="step-start"
      className="step-card bg-white p-8 md:p-12 rounded-2xl shadow-2xl text-center"
    >
      <svg
        id="Laag_1"
        data-name="Laag 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 230.09 226.85"
        className="w-20 h-20 mx-auto mb-6"
        style={{
          filter:
            'drop-shadow(0 10px 8px rgba(0, 0, 0, 0.04)) drop-shadow(0 4px 3px rgba(0, 0, 0, 0.1))',
        }}
      >
        <defs>
          <style>
            {`.cls-1 { fill: #ea640e; } .cls-2 { fill: #272554; }`}
          </style>
        </defs>
        <path
          className="cls-1"
          d="M16.27,108.67c1.63-35.48,19.83-65.79,56.37-84.33,16.16-8.2,33.55-10.87,51.59-9.24,15.73,1.42,30.24,6.39,43.57,14.85,3.68,2.33,3.92,5.38.76,8.41-1.54,1.48-3.01,3.03-4.59,4.46-3.77,3.43-6.77,3.86-11.29,1.45-6.94-3.69-14.19-6.56-21.93-7.96-28.17-5.09-52.46,2.5-72.52,22.89-11.87,12.07-18.96,26.77-21.05,43.55-3.27,26.27,4.66,48.9,23.58,67.44,12.14,11.89,26.85,19.06,43.7,21.16,26.27,3.27,48.9-4.67,67.43-23.59,11.89-12.14,18.8-26.89,21.21-43.7,1.19-8.32.93-16.64-.58-24.9-.6-3.27.09-6.12,2.37-8.6,2.32-2.52,4.48-5.19,6.83-7.68,2.79-2.94,5.93-2.54,7.47,1.24,1.3,3.2,2.12,6.64,2.77,10.05,8.67,44.76-13.5,88.79-54.57,108.51-44.29,21.27-98.59,5.82-125.15-35.56-10.43-16.25-15.71-34-15.97-58.46Z"
        />
        <path
          className="cls-2"
          d="M115.48,226.85h-.56C51.55,226.85,0,175.97,0,113.43S51.55,0,114.92,0c2.22,0,1.27.01,1.47.01,26.99.13,53.11,9.71,73.53,26.95.65.55.72,1.5.17,2.14-.55.64-1.52.71-2.17.17C168.06,12.49,142.65,3.18,116.38,3.05c-.61,0,.71-.01-1.46-.01C53.25,3.04,3.08,52.56,3.08,113.43s50.17,110.39,111.85,110.39h.56c61.5-.16,111.54-49.68,111.54-110.39,0-18.69-4.76-37.14-13.76-53.35-.41-.74-.14-1.66.61-2.06.74-.4,1.68-.13,2.09.6,9.25,16.66,14.13,35.62,14.13,54.81,0,62.38-51.41,113.26-114.61,113.43Z"
        />
        <path
          className="cls-2"
          d="M117.78,136.29c3.27-5.25,6.43-10.4,9.67-15.49,11.59-18.2,41.18-58.53,55.03-74.71,3.78-4.42,7.81-8.52,13.11-10.67,6.78-2.74,13.19-1.49,19.36,2.22.24.15.46.35.69.53,3.69,2.94,3.91,5.97.71,9.5-4.43,4.89-8.92,9.72-13.25,14.71-15.94,18.39-46.65,61.73-59.45,82.84-3.76,6.2-7.47,12.44-11.25,18.63-2.07,3.39-4.95,5.72-8.45,6.98-2.54.91-5.15,1.71-7.78,2.2-4.69.88-8.35-1.22-10.91-5.51-2.89-4.84-5.51-9.87-8.45-14.67-7.46-12.15-25.98-47.33-35.62-57.46-1.54-1.61-3.05-3.28-4.37-5.11-2.26-3.11-1.96-6.15,1.18-8.13,10.37-6.57,20.1-6.67,28.68,2.74,7.19,7.89,23.88,40.28,29.76,49.41.42.65.86,1.28,1.35,2.01Z"
        />
      </svg>
      <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
        AOV-Scan
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Valt jouw AOV onder de vrijstelling voor de verplichte AOV (BAZ)?
      </p>
      <p className="text-sm text-gray-500 mb-8">
        Dit is een indicatie o.b.v. de huidige voorstellen (nov 2025) en geen
        financieel advies.
      </p>
      <button
        onClick={handleStart}
        className="w-full text-white font-bold py-4 px-8 rounded-xl shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center text-lg bg-primary-blue hover:opacity-90"
      >
        Start de Scan
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="ml-2 w-5 h-5"
        >
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </button>
    </div>
  );
}