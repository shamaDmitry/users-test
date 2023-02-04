import { NavLink } from "react-router-dom";

const Navigation = () => {
  const menuItems = [
    {
      title: 'Home',
      to: '/home'
    },
    {
      title: 'Users',
      to: '/users'
    }
  ];

  return (
    <div className="container mx-auto">
      <nav className="flex py-4 items-center border-b mb-4">
        {
          menuItems.map((item, index) => {
            return (
              <NavLink
                key={index}
                to={item.to}
                className={`block mr-2 last:m-0`}
              >
                {({ isActive }) => {
                  return (
                    <span className={`${isActive ? 'bg-gray-200 font-extrabold' : null} uppercase block px-4 py-2 text-sm rounded-lg hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200`}>
                      {item.title}
                    </span>
                  )
                }}
              </NavLink>
            )
          })
        }
      </nav>
    </div>

  );
}

export default Navigation;
