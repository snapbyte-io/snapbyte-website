import React, { useState, useMemo } from 'react';
import type { PricingPlan } from '../data/pricing';
import { useLanguage } from './ThemeLanguageProvider';

interface PricingCalculatorSectionProps {
  plans: PricingPlan[];
  translations: any; // Keep for compatibility but we'll use useLanguage instead
}

export default function PricingCalculatorSection({ plans }: PricingCalculatorSectionProps) {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'pro' | 'enterprise'>('pro');
  const [amount, setAmount] = useState(10);
  const [unit, setUnit] = useState<'GB' | 'TB'>('GB');

  // Get the active plan
  const activePlan = plans.find(plan => plan.id === activeTab);
  const paidPlans = plans.filter(plan => plan.showCalculator);

  const calculations = useMemo(() => {
    if (!activePlan) return { bandwidthCost: '0', storageCost: '0', total: '0' };
    
    // Convert to GB for calculation
    const amountInGB = unit === 'TB' ? amount * 1024 : amount;
    
    const bandwidthCost = (activePlan.bandwidthPrice || 0) * amountInGB;
    const storageCost = activePlan.storagePrice ? activePlan.storagePrice * amountInGB : 0;
    const total = bandwidthCost + storageCost;

    return {
      bandwidthCost: bandwidthCost.toFixed(2),
      storageCost: storageCost.toFixed(2),
      total: total.toFixed(2)
    };
  }, [amount, unit, activePlan]);

  if (paidPlans.length === 0) return null;

  return (
    <section id="pricing-calculator" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              {t.calculator}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {t.calculatorDescription}
            </p>
          </div>

          {/* Plan Tabs */}
          <div className="flex justify-center mb-8">
            <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg gap-2 flex">
              {paidPlans.map((plan) => (
                <button
                  key={plan.id}
                  onClick={() => setActiveTab(plan.id as 'pro' | 'enterprise')}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 p-2 ${
                    plan.id === activeTab
                      ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  {plan.icon} {(t as any)[`${plan.id}Plan`] || plan.name}
                </button>
              ))}
            </div>
          </div>

          {/* Calculator */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Controls */}
              <div className="space-y-6">
                {/* Unit selector */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                    {t.selectUnit}
                  </label>
                  <div className="flex space-x-4">
                    <button
                      onClick={() => setUnit('GB')}
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                        unit === 'GB'
                          ? 'bg-blue-500 text-white shadow-md'
                          : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600'
                      }`}
                    >
                      {t.gb}
                    </button>
                    <button
                      onClick={() => setUnit('TB')}
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                        unit === 'TB'
                          ? 'bg-blue-500 text-white shadow-md'
                          : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600'
                      }`}
                    >
                      {t.tb}
                    </button>
                  </div>
                </div>

                {/* Amount slider */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                    {t.dataAmount}
                  </label>
                  <div className="mb-4">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                      {amount} {unit}
                    </div>
                    <input
                      type="range"
                      min={unit === 'GB' ? 10 : 1}
                      max={1000}
                      step={unit === 'GB' ? 10 : 1}
                      value={amount}
                      onChange={(e) => setAmount(parseInt(e.target.value))}
                      className="w-full h-3 bg-gray-200 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer slider"
                    />
                    <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-2">
                      <span>{unit === 'GB' ? '10 GB' : '1 TB'}</span>
                      <span>{unit === 'GB' ? '1000 GB' : '1000 TB'}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cost breakdown */}
              <div className="bg-white dark:bg-gray-700 rounded-xl p-6 border border-gray-200 dark:border-gray-600">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
                  {(t as any)[`${activeTab}Plan`] || `${activeTab} Plan`} - Monthly Cost
                </h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-600">
                    <span className="text-gray-600 dark:text-gray-300">
                      {t.monthlyBandwidthCost}
                    </span>
                    <span className="font-semibold text-gray-900 dark:text-white text-lg">
                      ${calculations.bandwidthCost}
                    </span>
                  </div>
                  
                  {activePlan?.storagePrice && (
                    <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-600">
                      <span className="text-gray-600 dark:text-gray-300">
                        {t.monthlyStorageCost}
                      </span>
                      <span className="font-semibold text-gray-900 dark:text-white text-lg">
                        ${calculations.storageCost}
                      </span>
                    </div>
                  )}
                  
                  <div className="flex justify-between items-center py-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg px-4 mt-4">
                    <span className="text-lg font-semibold text-gray-900 dark:text-white">
                      {t.totalMonthlyCost}
                    </span>
                    <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      ${calculations.total}
                    </span>
                  </div>

                  {/* Get Started Button */}
                  <div className="mt-6">
                    <a 
                      href={activeTab === 'enterprise' ? '/contact' : 'https://app.snapbyte.io/auth/register'}
                      className="block w-full text-center py-3 px-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      {activeTab === 'enterprise' ? t.contactSales : t.getStartedFree}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
