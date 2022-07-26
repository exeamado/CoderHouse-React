import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <>
    <nav class="navbar navbar-default" role="navigation">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse"
            data-target=".navbar-ex1-collapse">
                <a class="navbar-brand" href="#">Tierra Santa Shop</a>
                <button type="button" class="btn btn-default navbar-btn">1</button>
                <button type="button" class="btn btn-default navbar-btn">2</button>
                <button type="button" class="btn btn-default navbar-btn">3</button>
            </button>
        </div>   
    </nav>
    </>

  );
}

export default Navbar;