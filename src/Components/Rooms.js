import "./rooms.css";

const Rooms = () => {
  return (
    <>
      <div className="main">
        <h1 className="title"></h1>
        <h2></h2>
        <h2></h2>

        <div className="container">
          <h1 className="cap">Luxurious Tranquil Retreat</h1>
          <div className="card">
            <img
              src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="sd"
            />
            <div className="content">
              <h1 className="font">Deluxe</h1>
              <h2></h2>
              <center>
                <h2 className="font">92%❤️</h2>
              </center>
              <a href="https://www.geneve.com/">BookNow</a>
            </div>
          </div>

          {/* Basel */}
          <div className="card">
            <img
              src="https://img.freepik.com/free-photo/elegant-hotel-room-with-big-bed_1203-1494.jpg?size=626&ext=jpg&uid=R100668184&ga=GA1.1.2080323913.1691289251&semt=ais"
              alt="asd"
            />
            <div className="content">
              <h1 className="font">Basic</h1>
              <h2></h2>
              <center>
                <h2 className="font">Popular📈</h2>
                {/* <h2></h2> */}
                <h2 className="font">93%❤️</h2>
              </center>
              <a href="https://www.basel.com/en">BookNow</a>
            </div>
          </div>

          {/* Zurich */}
          <div className="card">
            <img
              src="https://img.freepik.com/free-photo/modern-studio-apartment-design-with-bedroom-living-space_1262-12375.jpg?size=626&ext=jpg&ga=GA1.2.2080323913.1691289251&semt=ais"
              alt="ssd"
            />
            <div className="content">
              <h1 className="font">Brand</h1>
              <h2></h2>
              <center>
                <h2 className="font">93%❤️</h2>
              </center>
              <a href="https://www.myswitzerland.com/en-in/destinations/zurich-1/">
                BookNow
              </a>
            </div>
          </div>

          {/* Saint Moritz*/}
          <div className="card">
            <img
              src="https://img.freepik.com/premium-photo/high-end-clean-atmospheric-hotel-rooms_149197-85.jpg?size=626&ext=jpg&uid=R100668184&ga=GA1.1.2080323913.1691289251&semt=ais"
              alt="hsj"
            />
            <div className="content">
              <h1 className="font">Legend</h1>
              <h2></h2>
              <center>
                <h2 className="font">93%❤️</h2>
              </center>
              <a href="https://www.myswitzerland.com/en/destinations/st-moritz/">
                BookNow
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rooms;
