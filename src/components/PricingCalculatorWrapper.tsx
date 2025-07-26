import React from 'react';
import { LanguageProvider } from './ThemeLanguageProvider';
import PricingCalculatorSection from './PricingCalculator';
import type { PricingPlan } from '../data/pricing';

interface PricingCalculatorWrapperProps {
  plans: PricingPlan[];
  translations: any;
}

const PricingCalculatorWrapper: React.FC<PricingCalculatorWrapperProps> = ({ plans, translations }) => {
  return (
    <LanguageProvider>
      <PricingCalculatorSection plans={plans} translations={translations} />
    </LanguageProvider>
  );
};

export default PricingCalculatorWrapper;
