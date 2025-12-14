import React from 'react';
import { LayoutDashboard, House, HousePlus, FilePenLine, CreditCard, MessageSquareMore, Settings, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navItems = [
    { name: 'Dashboard', icon: <LayoutDashboard />, active: false },
    { name: 'My Properties', icon: <House />, active: true },
    { name: 'Add Property', icon: <HousePlus />, active: false },
    { name: 'Rent Requests', icon: <FilePenLine />, active: false },
    { name: 'Payments', icon: <CreditCard />, active: false },
    { name: 'Messages', icon: <MessageSquareMore />, active: false },
    { name: 'Settings', icon: <Settings />, active: false },
    { name: 'Logout', icon: <LogOut />, active: false },
  ];

  const navigate = useNavigate();
  const handleLogout = () => {
    navigate('/');
  };

  const baseItemClass =
    "w-full block text-left flex items-center gap-4 px-5 py-4 text-white no-underline rounded-xl transition-all duration-300 text-[1.05rem] cursor-pointer";

  return (
    <aside
      className="
      w-full md:w-[280px]
      bg-gradient-to-b from-[#667eea] to-[#764ba2]
      min-h-screen md:h-screen md:max-h-screen md:overflow-y-auto md:overscroll-contain
      p-8 md:px-6 md:py-8
      text-white
      md:fixed top-0 left-0 z-10
      flex flex-col
    "
    >
      <div>
        <img
          src="/images/RentEase_Logo2.png"
          alt="RentEase Logo"
          className="w-60 h-14 filter brightness-50"
        />
      </div>

     
      <ul className="list-none mt-8 md:mt-10 w-full">
        {navItems.map((item, index) => (
          <li key={index} className="mb-2 w-full">
            {item.name === 'Logout' ? (
              <button
                type="button"
                onClick={handleLogout}
                className={`${baseItemClass} ${
                  item.active
                    ? 'bg-white/20 translate-x-[5px]'
                    : 'hover:bg-white/20 hover:translate-x-[5px]'
                } bg-transparent border-0 appearance-none`}
              >
                <span className="text-[1.3rem]">{item.icon}</span>
                {item.name}
              </button>
            ) : (
              <a
                href={`#${item.name.toLowerCase().replace(' ', '-')}`}
                className={`${baseItemClass} ${
                  item.active
                    ? 'bg-white/20 translate-x-[5px]'
                    : 'hover:bg-white/20 hover:translate-x-[5px]'
                }`}
              >
                <span className="text-[1.3rem]">{item.icon}</span>
                {item.name}
              </a>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;