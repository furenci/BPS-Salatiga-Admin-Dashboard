import React from 'react';
import { Check } from 'lucide-react';
interface Step {
  id: number;
  title: string;
}
interface StepperProps {
  steps: Step[];
  currentStep: number;
}
export function Stepper({
  steps,
  currentStep
}: StepperProps) {
  return <div className="w-full py-6">
      <div className="flex items-center justify-between relative">
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-0.5 bg-gray-200 -z-10" />

        {steps.map((step, index) => {
        const isCompleted = currentStep > step.id;
        const isCurrent = currentStep === step.id;
        return <div key={step.id} className="flex flex-col items-center bg-white px-2">
              <div className={`
                  w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300
                  ${isCompleted ? 'bg-[#00509E] border-[#00509E] text-white' : isCurrent ? 'bg-white border-[#00509E] text-[#00509E]' : 'bg-white border-gray-300 text-gray-400'}
                `}>
                {isCompleted ? <Check className="w-6 h-6" /> : <span className="font-bold">{step.id}</span>}
              </div>
              <span className={`
                  mt-2 text-xs font-medium uppercase tracking-wider transition-colors duration-300
                  ${isCurrent ? 'text-[#00509E]' : 'text-gray-500'}
                `}>
                {step.title}
              </span>
            </div>;
      })}
      </div>
    </div>;
}