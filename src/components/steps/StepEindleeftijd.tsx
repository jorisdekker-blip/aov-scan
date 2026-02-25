// src/components/steps/StepEindleeftijd.tsx
'use client';
// @ts-ignore
import { useWizard } from '@/context/WizardContext';
// @ts-ignore
import { RadioOption } from '@/components/ui/RadioOption';

export function StepEindleeftijd() {
  // @ts-ignore
  const { dispatch } = useWizard();

  const handleSelect = (answer: string) => {
    // @ts-ignore
    dispatch({
      type: 'SET_ANSWER_AND_GO',
      payload: {
        answer: { eindleeftijd: answer },
        nextStep: 'step-premie',
      },
    });
  };

  const handleBack = () => {
    // @ts-ignore
    dispatch({ type: 'GO_TO_STEP', payload: { step: 'step-heb-aov' } });
  };

  return (
    <div
      id="step-eindleeftijd"
      className="step-card bg-white p-8 md:p-12 rounded-2xl shadow-2xl"
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Vraag 2: Tot welke leeftijd loopt je AOV?
      </h2>

      <RadioOption
        id="eindleeftijd-67"
        name="eindleeftijd"
        value="67"
        label="Tot 67 jaar"
        onClick={() => handleSelect('67')}
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-8 h-8 mr-4 text-primary-blue"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
        }
      />

      <RadioOption
        id="eindleeftijd-anders"
        name="eindleeftijd"
        value="anders"
        label="Een andere leeftijd"
        onClick={() => handleSelect('anders')}
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-8 h-8 text-gray-600 mr-4"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
        }
      />

      <button
        onClick={handleBack}
        className="text-gray-600 font-bold py-3 px-6 rounded-xl hover:bg-gray-100 transition-all duration-300 flex items-center mt-10"
      >
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
          className="mr-2 w-5 h-5"
        >
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
        Terug
      </button>
    </div>
  );
}
