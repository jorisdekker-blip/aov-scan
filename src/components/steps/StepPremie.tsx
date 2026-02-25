// src/components/steps/StepPremie.tsx
'use client';
// @ts-ignore
import { useWizard } from '@/context/WizardContext';
// @ts-ignore
import { RadioOption } from '@/components/ui/RadioOption';

export function StepPremie() {
  // @ts-ignore
  const { dispatch } = useWizard();

  const handleSelect = (answer: string) => {
    // @ts-ignore
    dispatch({
      type: 'SET_ANSWER_AND_GO',
      payload: {
        answer: { premie: answer },
        nextStep: 'result-scan-complete',
      },
    });
  };

  const handleBack = () => {
    // @ts-ignore
    dispatch({ type: 'GO_TO_STEP', payload: { step: 'step-eindleeftijd' } });
  };

  return (
    <div
      id="step-premie"
      className="step-card bg-white p-8 md:p-12 rounded-2xl shadow-2xl"
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Vraag 3: Betaal je meer dan €100 per maand aan premie?
      </h2>

      <RadioOption
        id="premie-ja"
        name="premie"
        value="ja"
        label="Ja, meer dan €100 per maand"
        onClick={() => handleSelect('ja')}
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
            <line x1="12" y1="1" x2="12" y2="23"></line>
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
          </svg>
        }
      />

      <RadioOption
        id="premie-nee"
        name="premie"
        value="nee"
        label="Nee, minder dan €100 per maand"
        onClick={() => handleSelect('nee')}
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
