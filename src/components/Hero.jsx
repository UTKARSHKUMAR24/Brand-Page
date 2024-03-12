const HeroSection = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          This is my first Shoe Shop Wev Page. You can buy any type of Shoes
          from here whether it's sports shoes, school and office formal shoes or
          Informal Marrage Shoes.
        </p>
        <div className="hero-btn">
          <butoon>Shop Now</butoon>
          <butoon className="secondary-btn">Category</butoon>
        </div>

        <div className="shopping">
          <p>Also Available On</p>

          <div className="brand-icons">
            <img src="/images/amazon.png" alt="amazon-logo" />
            <img src="/images/flipkart.png" alt="flipkart-logo" />
          </div>
        </div>
    </div>

    <div className="hero-image">
        <img src="../../public/images/shoe_image.png" alt="hero-image"></img>
    </div>
    </main>
  );
};
export default HeroSection;
