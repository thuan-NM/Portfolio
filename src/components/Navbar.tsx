import { Navbar, NavbarItem } from '@heroui/react';

function NavbarComponent() {
  return (
    <Navbar className="bg-gray-800 text-white">
      <NavbarItem>Home</NavbarItem>
      <NavbarItem>About</NavbarItem>
      <NavbarItem>Projects</NavbarItem>
      <NavbarItem>Contact</NavbarItem>
    </Navbar>
  );
}
export default NavbarComponent;