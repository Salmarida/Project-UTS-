function Navbar() {
  return (
    <container>
      <styledNavbar>
        <div>
          <h1>Covid ID  </h1>
        </div>
        <div>
          <ul>
            <li>
              <link to="/">Global</link>
            </li>
            <li>
            <link to="/">Indonesia</link> 
            </li>
            <li>
            <link to="/">Provinsi</link>
            </li>
            <li>
            <link to="/">About</link>
            </li>
          </ul>
        </div>
      </styledNavbar>
    </container>
  );
}

export default Navbar;
