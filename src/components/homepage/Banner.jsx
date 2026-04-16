import { Users, CheckCircle, AlertCircle, Clock, UserPlus } from 'lucide-react';

const Banner = () => {
  // Stats data configuration
  const stats = [
    { id: 1, label: "Total Friends", value: 10, icon: <Users size={24} />, color: "bg-blue-100 text-blue-600" },
    { id: 2, label: "On Track", value: 3, icon: <CheckCircle size={24} />, color: "bg-green-100 text-green-600" },
    { id: 3, label: "Almost Due", value: 6, icon: <AlertCircle size={24} />, color: "bg-yellow-100 text-yellow-600" },
    { id: 4, label: "Overdue", value: 1, icon: <Clock size={24} />, color: "bg-red-100 text-red-600" },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-16 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
          Friends to keep close in your life
        </h1>
        <p className="text-gray-500 max-w-2xl text-lg mb-8">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the 
          relationships that matter most.
        </p>

        {/* Action Button */}
        <button className="flex items-center gap-2 bg-[#1A4D2E] text-white px-6 py-3 rounded-lg font-medium hover:bg-green-900 transition-all shadow-md">
          <UserPlus size={20} /> Add a Friend
        </button>
      </section>

      {/* Stats Overview Grid */}
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-16">
        {stats.map((item) => (
          <div 
            key={item.id} 
            className="flex flex-col items-center p-8 bg-gray-50 rounded-2xl border border-gray-100 transition-all hover:shadow-md"
          >
            {/* Icon Wrapper */}
            <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 ${item.color}`}>
              {item.icon}
            </div>
            {/* Stat Value */}
            <h3 className="text-3xl font-bold text-gray-900">{item.value}</h3>
            {/* Stat Label */}
            <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mt-1 text-center">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;