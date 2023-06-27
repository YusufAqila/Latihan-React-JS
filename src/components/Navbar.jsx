import Case from "./Case";

import NavLink from "./NavLink";

export default function Navbar() {
  return (
    <>
      <div className="flex border-2 border-black">
        <p className="mx-0 border-r-2 border-black px-3 text-black">Day</p>
        <Case>
          <ul className="flex">
            <NavLink href="/">1</NavLink>

            <NavLink href="/day2">2</NavLink>

            <NavLink href="/day3">3</NavLink>
          </ul>
        </Case>
      </div>
    </>
  );
}
