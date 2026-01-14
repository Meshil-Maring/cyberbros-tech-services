import Button from "../common/Button";

function Navbar() {
  const list = ["Home", "Services", "Process", "Work", "About", "Contact"];

  return (
    <div className=" bg-black/80 w-full fixed flex justify-center top-0">
      <div
        id="navBar"
        className=" w-270 text-white/90 flex  justify-between  py-8"
      >
        <h1 className="text-2xl font-bold">Cyber Bros</h1>

        <ul className="flex gap-6 ">
          {list.map((i) => {
            return <Button key={i} title={i} />;
          })}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
