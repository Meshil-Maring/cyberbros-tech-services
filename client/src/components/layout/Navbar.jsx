import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-black/50 w-full fixed flex justify-center top-0 backdrop-blur-sm">
      <div className="w-270 text-white/90 flex justify-between py-8">
        <h1 className="text-2xl font-bold">Cyber Bros</h1>

        <ul className="flex gap-6 items-center">
          {["", "Service", "Process", "Work", "About", "Contact"].map(
            (path, index) => (
              <NavLink
                key={index}
                to={`/${path}`}
                className={({ isActive }) =>
                  `text-[18px] cursor-pointer transition hover:scale-110 transform
                   ${
                     isActive
                       ? "text-white/90"
                       : "text-white/60 hover:text-white"
                   }`
                }
                end={path === ""}
              >
                {path === "" ? "Home" : path}
              </NavLink>
            ),
          )}
          
        </ul>
        <NavLink
            to="Login"
            className={({ isActive }) =>
              isActive
                ? "text-white/90 text-[18px] border border-white/60 px-6 py-1"
                : "text-white/60 text-[18px] hover:text-white/90 border border-white/40 px-6 py-1"
            }
          >
            Login
          </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
