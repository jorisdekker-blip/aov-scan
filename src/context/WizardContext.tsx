// src/context/WizardContext.tsx
'use client'; 

import {
  createContext,
  useContext,
  useReducer,
  ReactNode,
  Dispatch,
} from 'react';

// 1. Definieer onze types
export type AovAnswers = {
  hebAov: 'ja' | 'nee' | null;
  eindleeftijd: 'ja' | 'nee' | null; 
  beperkteDekking: 'ja' | 'nee' | null;
  clausule: 'ja' | 'nee' | null; 
  tenaamstelling: 'ja' | 'nee' | null;
};
export type StepId =
  | 'step-start'
  | 'step-heb-aov'
  | 'step-eindleeftijd'
  | 'step-beperkte-dekking'
  | 'step-clausule'
  | 'step-tenaamstelling'
  | 'step-overweegt-type'
  | 'result-eerbiedigend-schoon'
  | 'result-eerbiedigend-clausule'
  | 'result-faalt-algemeen';
type WizardState = {
  currentStep: StepId;
  answers: AovAnswers;
};
type WizardAction =
  | { type: 'GO_TO_STEP'; payload: { step: StepId } }
  | {
      type: 'SET_ANSWER_AND_GO';
      payload: { answer: Partial<AovAnswers>; nextStep: StepId };
    }
  | { type: 'RESET' };

// 2. Initiële state
const initialState: WizardState = {
  currentStep: 'step-start',
  answers: {
    hebAov: null,
    eindleeftijd: null,
    beperkteDekking: null,
    clausule: null,
    tenaamstelling: null,
  },
};

// 3. De Reducer
function wizardReducer(state: WizardState, action: WizardAction): WizardState {
  switch (action.type) {
    case 'GO_TO_STEP':
      return { ...state, currentStep: action.payload.step };
    case 'SET_ANSWER_AND_GO':
      return {
        ...state,
        answers: { ...state.answers, ...action.payload.answer },
        currentStep: action.payload.nextStep,
      };
    case 'RESET':
      document
        .querySelectorAll<HTMLInputElement>('input[type="radio"]')
        .forEach((radio) => (radio.checked = false));
      return initialState;
    default:
      return state;
  }
}

// 4. De Context & Provider
const WizardContext = createContext<{
  state: WizardState;
  dispatch: Dispatch<WizardAction>;
} | null>(null);
export function WizardProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(wizardReducer, initialState);
  return (
    <WizardContext.Provider value={{ state, dispatch }}>
      {children}
    </WizardContext.Provider>
  );
}

// 5. Een custom hook
export function useWizard() {
  const context = useContext(WizardContext);
  if (!context) {
    throw new Error('useWizard must be used within a WizardProvider');
  }
  return context;
}