import React from 'react';
import { Card, CardContent } from './Card';

const DashboardCard = ({ title, value, icon, className = '' }) => {
  return (
    <Card className={`overflow-hidden ${className}`}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between space-x-4">
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-500 truncate mb-1">{title}</p>
            <h3 className="text-2xl font-bold text-gray-900">{value}</h3>
          </div>
          <div className="w-12 h-12 rounded-xl bg-eco-100 text-eco-600 flex items-center justify-center shrink-0 shadow-sm">
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DashboardCard;
