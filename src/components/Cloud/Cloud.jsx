// App.jsx
import React from 'react';
import { FaFileInvoice, FaCalendarCheck, FaUsers } from 'react-icons/fa'; 

const FeatureCard = ({ title, description, icon, backgroundColor }) => {
  return (
    <div className="relative flex flex-col items-center bg-white p-6 rounded-lg shadow-lg text-center">
      <div
        className={`top-[-25px] left-1/2 transform -translate-x-1/2 p-3 rounded-full text-white ${backgroundColor}`}
      >
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-indigo-900">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
};

const Cloud = () => {
  return (
    <div className=" py-12">
      <div className="max-w-screen-xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-extrabold text-indigo-900">All-In-One Cloud Software</h2>
        <p className="text-lg text-gray-600 mt-4">
          TOTC is one powerful online software suite that combines all the tools needed to run a successful school or office.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        <FeatureCard
          title="Online Billing, Invoicing, & Contracts"
          description="Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts."
          icon={<FaFileInvoice />}
          backgroundColor="bg-[#5B72EE]"

        />
        <FeatureCard
          title="Easy Scheduling & Attendance Tracking"
          description="Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance."
          icon={<FaCalendarCheck />}
          backgroundColor="bg-[#00CBB8]"
        />
        <FeatureCard
          title="Customer Tracking"
          description="Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization."
          icon={<FaUsers />}
          backgroundColor="bg-[#29B9E7]"
        />
      </div>
    </div>
  );
};

export default Cloud;
