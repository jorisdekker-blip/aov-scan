// src/components/steps/StepHebAov.tsx
'use client';
// @ts-ignore
import { useWizard } from '@/context/WizardContext';
// @ts-ignore
import { RadioOption } from '@/components/ui/RadioOption';

export function StepHebAov() {
  // @ts-ignore
  const { dispatch } = useWizard();

  const handleSelect = (answer: 'ja' | 'nee') => {
    if (answer === 'ja') {
      // @ts-ignore
      dispatch({
        type: 'SET_ANSWER_AND_GO',
        payload: {
          answer: { hebAov: 'ja' },
          nextStep: 'step-eindleeftijd',
        },
      });
    } else {
      // @ts-ignore
      dispatch({
        type: 'SET_ANSWER_AND_GO',
        payload: {
          answer: { hebAov: 'nee' },
          nextStep: 'step-overweegt-type',
        },
      });
    }
  };

  const handleBack = () => {
    // @ts-ignore
    dispatch({ type: 'GO_TO_STEP', payload: { step: 'step-start' } });
  };

  return (
    <div
      id="step-heb-aov"
      className="step-card bg-white p-8 md:p-12 rounded-2xl shadow-2xl"
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Vraag 1: Heb je een AOV?
      </h2>

      <RadioOption
        id="aov-ja"
        name="heb_aov"
        value="ja"
        label="Ja, ik heb een AOV"
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
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
          </svg>
        }
      />

      <RadioOption
        id="aov-nee"
        name="heb_aov"
        value="nee"
        label="Nee, ik overweeg er een te nemen"
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
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="12" y1="18" x2="12" y2="12"></line>
            <line x1="9" y1="15" x2="15" y2="15"></line>
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