import React, { useState, useMemo } from 'react';
import type { PricingPlan } from '../data/pricing';
import { useLanguage } from './ThemeLanguageProvider';

interface PricingCalculatorSectionProps {
  plans: PricingPlan[];
  translations: any;
}

export default function PricingCalculatorSection({ plans }: PricingCalculatorSectionProps) {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'pro' | 'enterprise'>('pro');
  const [amountBandwidth, setAmountBandwidth] = useState(10);
  const [amountStorage, setAmountStorage] = useState(1024);
  const [unit, setUnit] = useState<'GB' | 'TB'>('GB');

  // Get the active plan
  const activePlan = plans.find(plan => plan.id === activeTab);
  const paidPlans = plans.filter(plan => plan.showCalculator);

  const calculations = useMemo(() => {
    if (!activePlan) return { bandwidthCost: '0', storageCost: '0', total: '0' };

    // Convert to GB for calculation
    const amountBandwidthInGB = unit === 'TB' ? amountBandwidth * 1024 : amountBandwidth;
    const bandwidthPricePerGB = (activePlan.bandwidthPrice ?? 0) / (1024 * 1024);

    const amountStorageInGB = unit === 'TB' ? amountStorage * 1024 : amountStorage;
    const storagePricePerGB = activePlan.storagePrice ? activePlan.storagePrice / 1024 : 0;

    const bandwidthCost = bandwidthPricePerGB * amountBandwidthInGB;
    const storageCost = storagePricePerGB * amountStorageInGB;
    const total = bandwidthCost + storageCost;

    function formatCost(value: number) {
      const rounded = Number(value).toFixed(2);
      return rounded.endsWith('.00') ? parseInt(rounded).toString() : rounded;
    }

    return {
      bandwidthCost: formatCost(bandwidthCost),
      storageCost: formatCost(storageCost),
      total: formatCost(total)
    };
  }, [amountBandwidth, amountStorage, unit, activePlan]);

  if (paidPlans.length === 0) return null;

  return (

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
                className={`px-3 py-3 rounded-lg font-semibold transition-all duration-300 p-2 ${plan.id === activeTab
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
        <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-4 lg:p-8 border border-gray-200 dark:border-gray-700">
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
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${unit === 'GB'
                        ? 'bg-blue-500 text-white shadow-md'
                        : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600'
                      }`}
                  >
                    {t.gb}
                  </button>
                  <button
                    onClick={() => setUnit('TB')}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${unit === 'TB'
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
                  {t.dataTransfer}
                </label>
                <div className="mb-4">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                    {amountBandwidth} {unit}
                  </div>
                  <input
                    type="range"
                    min={unit === 'GB' ? 10 : 1}
                    max={1024}
                    step={1}
                    value={amountBandwidth}
                    onChange={(e) => setAmountBandwidth(parseInt(e.target.value))}
                    className="w-full h-3 bg-gray-200 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-2">
                    <span>{unit === 'GB' ? '10 GB' : '1 TB'}</span>
                    <span>{unit === 'GB' ? '1 TB' : '1 PB'}</span>
                  </div>
                </div>
              </div>
              {/* Amount Storage slider */}
              {activeTab === 'enterprise' && <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  {t.dataStograge}
                </label>
                <div className="mb-4">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                    {amountStorage} {unit}
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={1024}
                    step={1}
                    value={amountStorage}
                    onChange={(e) => setAmountStorage(parseInt(e.target.value))}
                    className="w-full h-3 bg-gray-200 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-2">
                    <span>{unit === 'GB' ? '1 GB' : '1 TB'}</span>
                    <span>{unit === 'GB' ? '1 TB' : '1 PB'}</span>
                  </div>
                </div>
              </div>}
            </div>

            {/* Cost breakdown */}
            <div className="bg-white dark:bg-gray-700 rounded-xl p-4 lg:p-6 border border-gray-200 dark:border-gray-600">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
                {(t as any)[`${activeTab}Plan`] || `${activeTab} Plan`}
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
                  <span className="text-2xl text-blue-600 dark:text-blue-400">
                    <strong>${calculations.total}</strong>{t.perMonth}
                  </span>
                </div>

                {/* Get Started Button */}
                <div className="mt-6">
                  <a
                    href='/contact'
                    className="block w-full text-center py-3 px-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    {t.contactSales}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
