import React from 'react';;
import { LuGraduationCap } from 'react-icons/lu';

const AmountPart = () => {
  const amountData = [
    {
      id: 1,
      title: "Total Fees Collected",
      amount: "₹ 25,000.00",
      percentage: "1.2%",
      isPositive: true
    },
    {
      id: 2,
      title: "Fine Collected till Date",
      amount: "₹ 4,56,450",
      percentage: "1.2%",
      isPositive: false
    },
    {
      id: 3,
      title: "Student Not Paid",
      amount: "₹ 545",
      percentage: "1.2%",
      isPositive: true
    },
    {
      id: 4,
      title: "Total Outstanding",
      amount: "₹ 4,56,640",
      percentage: "1.2%",
      isPositive: false
    }
  ];

  return (
    <div className="flex flex-col justify-between gap-y-4 h-[388px]">
      {amountData.map((item) => (
        <div 
          key={item.id} 
          className="bg-white rounded p-4 h-[84px] border-[1px] border-[#f2f2f2] shadow-md"
        >
          <div className="flex justify-between items-end ">
            <div className="">
              <h3 className="text-gray-600 text-sm font-medium mb-2">
                {item.title}
              </h3>
              <div className="text-2xl font-semibold text-gray-900">
                {item.amount}
              </div>
            </div>
            
            <div className="">
              <div className={`flex items-center gap-x-1 px-2 py-1 rounded text-xs font-medium ${
                item.isPositive 
                  ? 'bg-green-50 text-green-700 ' 
                  : 'bg-red-50 text-red-700 '
              }`}>
                <LuGraduationCap />
                {item.percentage}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AmountPart;