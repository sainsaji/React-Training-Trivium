function Header() {
  const menuItem = ["Home", "Features", "Pricing", "Diabled"];

  const handleMenuClick = (index: number) => {
    if (index === 0) {
      window.location.href = "home.html";
    } else if (index === 1) {
      window.location.href = "features.html";
    } else {
      window.location.href = "pricing.html";
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {menuItem.length === 0 ? (
              <li className="nav-item">
                <a className="nav-link active" aria-current="page">
                  No items
                </a>
              </li>
            ) : (
              menuItem.map((item, index) => (
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    key={index}
                    onClick={() => handleMenuClick(index)}
                  >
                    {item}
                  </a>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
