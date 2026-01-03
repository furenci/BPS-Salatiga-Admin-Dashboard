import React from 'react';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';
import { FileText, Clock, CheckCircle } from 'lucide-react';
interface SummaryCardProps {
  title: string;
  count: number;
  type: 'draft' | 'pending' | 'completed';
}
export function SummaryCard({
  title,
  count,
  type
}: SummaryCardProps) {
  const config = {
    draft: {
      icon: FileText,
      color: 'bg-yellow-100 text-yellow-700',
      badge: 'warning' as const,
      border: 'border-l-4 border-l-yellow-400'
    },
    pending: {
      icon: Clock,
      color: 'bg-blue-100 text-blue-700',
      badge: 'primary' as const,
      border: 'border-l-4 border-l-blue-500'
    },
    completed: {
      icon: CheckCircle,
      color: 'bg-green-100 text-green-700',
      badge: 'success' as const,
      border: 'border-l-4 border-l-green-500'
    }
  };
  const style = config[type];
  const Icon = style.icon;
  return <Card className={`relative overflow-hidden transition-all duration-200 hover:shadow-md ${style.border}`}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500 mb-1">{title}</p>
          <h3 className="text-3xl font-bold text-gray-900">{count}</h3>
        </div>
        <div className={`p-3 rounded-lg ${style.color}`}>
          <Icon className="w-6 h-6" />
        </div>
      </div>
      <div className="mt-4 flex items-center text-xs text-gray-500">
        <span className="font-medium text-gray-900 mr-1">Updated just now</span>
      </div>
    </Card>;
}