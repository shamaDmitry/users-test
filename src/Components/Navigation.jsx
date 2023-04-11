import { NavLink } from "react-router-dom";

const menuItems = [
  {
    title: 'Home',
    to: '/'
  },
  {
    title: 'Users',
    to: '/users'
  }
];

const Navigation = () => {
  const isLoggedIn = localStorage.getItem("loggedin");

  return (
    <div className="container mx-auto px-4">
      <nav className="flex py-3 items-center border-b mb-4">
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
                    <span className={`${isActive ? 'bg-gray-200 font-extrabold' : null} transition uppercase block px-4 py-2 text-sm  hover:text-white focus:text-gray-900 hover:bg-gray-900 focus:bg-gray-200`}>
                      {item.title}
                    </span>
                  )
                }}
              </NavLink>
            )
          })
        }

        {!isLoggedIn && <div className="ml-auto gap-4 flex">
          <NavLink
            to="/login"
            className="capitalize bg-gray-200 hover:bg-gray-900 text-gray-900 hover:text-white font-bold py-2 px-4 transition"
          >
            login
          </NavLink>

          <NavLink
            to="/register"
            className="capitalize bg-teal-500 hover:bg-teal-900 text-white hover:text-white font-bold py-2 px-4 transition"
          >
            Sign up
          </NavLink>
        </div>}

      </nav>
    </div>

  );
}

export default Navigation;
