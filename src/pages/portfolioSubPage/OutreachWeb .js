import React from "react";
import Header from "../../component/Header";

const LearnEarn = () => {
  return (
    
    <div>
      <Header />
      <section id="home" className="intro-section">
        <div className="container">
          <h1 className="heading">Our Portfolio</h1>
          <p className="subheading">
            We offer a wide range of professional services tailored to your
            needs. Explore what we can do for you!
          </p>
        </div>
      </section>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 border8">
            <div className="card shadow-sm hover-shadow-lg border-0 rounded-lg overflow-hidden w-75">
              <img
                alt="A placeholder image with dimensions 500x500 pixels"
                className="card-img-top img-fluid"
                src="./assets/img/buy1.jpg"
              />
            </div>
          </div>

          <div className="col-md-6">
            <h2>Website Description</h2>
            <p>
            The **Outreach App** is a revolutionary crypto trading platform
            developed by the FirstMiner team, utilizing cutting-edge
            technologies such as **Node.js**, **React Native**, **Firebase**,
            and **Web3** to provide users with a seamless, secure, and efficient
            experience in trading USDT (Tether). Designed with user convenience
            in mind, the app offers a transparent platform where users can buy
            and sell USDT with real-time exchange rates, minimal fees, and
            unparalleled ease of use. Leveraging the power of **Web3**, the
            Outreach App integrates blockchain technology to ensure
            decentralized and secure transactions, allowing users to connect
            their wallets and execute trades with full transparency and
            confidence. The app’s cross-platform compatibility, powered by
            **React Native**, delivers a responsive and intuitive interface that
            works seamlessly across Android and iOS devices, providing users
            with a modern and interactive trading experience. At its core, the
            backend is powered by **Node.js**, which ensures high-performance
            API handling, transaction processing, and secure user
            authentication, creating a robust foundation for the platform’s
            operations. Furthermore, **Firebase** adds real-time functionality
            to the app, offering secure data storage, user authentication, and
            instant push notifications that keep users informed about their
            transactions and market updates. The app’s design prioritizes
            simplicity and accessibility, making it a perfect solution for both
            seasoned traders and newcomers to the world of cryptocurrencies. Its
            sleek interface allows users to enter trade amounts, view
            transaction breakdowns, and execute payments effortlessly, while the
            integration of **Web3** opens up opportunities for decentralized
            trading, ensuring that all transactions are secure, transparent, and
            traceable on the blockchain. 
            </p>
          </div>
        </div>
        <div className="row mt-5 ">
          <div className="col-md-6">
          <h3>Key Features</h3>
            <ul>
              <li>
                <strong>Seamless USDT Transactions</strong>
                <ul>
                  <li>
                    Empowering users to trade USDT (Tether) with transparency
                    and flexibility.
                  </li>
                  <li>
                    Real-time exchange rates (e.g., 1 USDT = 93 ₹) and minimal
                    transaction fees.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Blockchain Integration with Web3</strong>
                <ul>
                  <li>
                    Incorporates Web3 to connect with blockchain networks for
                    secure and transparent transactions.
                  </li>
                  <li>
                    Enables wallet integration for sending and receiving USDT
                    directly from decentralized wallets.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Cross-Platform</strong>
                <ul>
                  <li>
                    Built with React for smooth performance
                  </li>
                  <li>
                    Features an interactive UI for entering amounts, viewing
                    breakdowns, and processing payments.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Backend and API Development</strong>
                <ul>
                  <li>
                    Powered by Node.js, ensuring efficient API handling,
                    transaction management, and user authentication.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Firebase for Real-Time Functionality</strong>
                <ul>
                  <li>
                    <strong>Authentication:</strong> User sign-up and login with
                    secure methods.
                  </li>
                  <li>
                    <strong>Firestore:</strong> Real-time database for storing
                    transaction and user data.
                  </li>
                  <li>
                    <strong>Cloud Messaging:</strong> Push notifications for
                    instant transaction updates and alerts.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Security and Decentralization</strong>
                <ul>
                  <li>
                    Blockchain technology enhances transparency and trust in
                    transactions.
                  </li>
                  <li>
                    Firebase and Web3 ensure secure handling of user data and
                    decentralized operations.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Global Accessibility</strong>
                <ul>
                  <li>
                    Designed for users worldwide to engage in crypto trading
                    with ease, regardless of location.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="col-md-6 border8 d-flex justify-content-center">
            <div className="card shadow-sm hover-shadow-lg border-0 rounded-lg overflow-hidden w-75">
              <img
                alt="A placeholder image with dimensions 500x500 pixels"
                className="card-img-top img-fluid"
                src="./assets/img/sell1.jpg"
              />
            </div>
            {/* <div className="card shadow-sm hover-shadow-lg border-0 rounded-lg overflow-hidden mt-5">
              <img
                alt="A placeholder image with dimensions 500x500 pixels"
                className="card-img-top img-fluid"
                src="./assets/img/learn1.png"
              />
            </div> */}
          </div>
        </div>
        <div className="row mt-5 mb-5 border8">
          <div className="col-12 d-flex justify-content-center">
          <div id="carouselExampleIndicators" className="carousel slide w-75" data-bs-ride="carousel">
      <ol className="carousel-indicators">
        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
      </ol>
      <div className="carousel-inner slider-center10">
        <div className="carousel-item active">
          <img className="d-block w-50" src="./assets/img/buy1.jpg" alt="First slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-50" src="./assets/img/buy1.jpg" alt="Second slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-50" src="./assets/img/buy1.jpg" alt="Third slide" />
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </a>
    </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnEarn;
