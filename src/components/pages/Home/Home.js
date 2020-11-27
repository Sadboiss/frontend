import React from 'react';

const Home = () => {

	return (
		<div className="home-container">
			<section id="top">
				<div className="photo black-box">
					<img className="photo" src={require("../../../assets/img4.jpg")} alt="This is a sample"/>
				</div>
				<div className="info black-box">
					<h4>Who are we?</h4>
					<p>
						Nulla culpa tempor elit do exercitation officia incididunt dolor consectetur labore magna. Quis velit dolor nostrud officia proident fugiat ipsum qui. Aute mollit quis minim enim excepteur magna quis aliqua laborum in ea labore.
					</p>
					<p>
						Ea aliquip magna aliquip ad tempor laboris ea. Pariatur aliqua adipisicing magna Lorem irure veniam laborum fugiat. Nostrud commodo in quis commodo consectetur commodo aliquip amet officia sint magna. Velit aute exercitation velit pariatur minim cillum.
					</p>
					<p>
						Amet enim dolore mollit ea minim ea. Aliquip consectetur tempor deserunt cillum sit reprehenderit deserunt dolor. Et et ut non dolore excepteur. Proident excepteur ad cillum aliqua exercitation irure excepteur consequat Lorem non velit.
					</p>
					<button>Contact us</button>
				</div>
			</section>
			<section id="middle">
				<div className="box"></div>
				<div className="box"></div>
			</section>
			<section id="bottom">
				<div className="box"></div>
				<div className="box"></div>
				<div className="box"></div>
			</section>
			<section id="footer">
				<div className="box"></div>
				<div className="box"></div>
				<div className="box"></div>
			</section>
		</div>
	)
}

export default Home
