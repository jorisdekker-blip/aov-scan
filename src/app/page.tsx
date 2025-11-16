// src/app/page.tsx
'use client'; 
// We gebruiken @ts-ignore omdat we de componenten zo gaan toevoegen
// @ts-ignore 
import { WizardProvider, useWizard } from '@/context/WizardContext';
// @ts-ignore
import { StepStart } from '@/components/steps/StepStart';
// @ts-ignore
import { StepHebAov } from '@/components/steps/StepHebAov';

function Wizard() {
  // @ts-ignore
  const { state } = useWizard();
  
  // @ts-ignore
  const getProgress = (): number => {
    // @ts-ignore
    switch (state.currentStep) {
      case 'step-start': return 0;
      case 'step-heb-aov': return 16;
      default: return 0;
    }
  };
  
  const progress = getProgress();
  // @ts-ignore
  const showProgress = progress > 0 && !state.currentStep.startsWith('result-');

  const renderStep = () => {
    // @ts-ignore
    switch (state.currentStep) {
      case 'step-start':
        // @ts-ignore
        return <StepStart />;
      case 'step-heb-aov':
        // @ts-ignore
        return <StepHebAov />;
      default:
        // @ts-ignore
        return <StepStart />; 
    }
  };

  return (
    <>
      <div 
        id="progressContainer" 
        className={`w-full bg-gray-200 rounded-full h-2.5 my-6 ${showProgress ? 'block' : 'hidden'}`}
      >
        <div 
          id="progressBar" 
          className="h-2.5 rounded-full" 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      
      {renderStep()}
    </>
  );
}

export default function Home() {
  return (
    // @ts-ignore
    <WizardProvider>
      <Wizard />
    </WizardProvider>
  );
}
