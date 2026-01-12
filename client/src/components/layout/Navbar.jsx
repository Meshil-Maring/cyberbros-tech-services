import Button from "../common/Button";

function Navbar() {
  const list = ["Home", "Services", "Process", "Work", "About", "Contact"];

  return (
    <div
      id="navBar"
      className="bg-black/90 text-white flex w-full justify-between px-10 fixed top-0 py-8"
    >
      <h1 className="text-2xl font-bold">Cyber Bros</h1>

      <ul className="flex gap-4">
        {list.map((i) => {
          return <Button key={i} title={i} />;
        })}
      </ul>
    </div>
  );
}

export default Navbar;
