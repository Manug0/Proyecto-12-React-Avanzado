import React from "react";
import "./HomePicks.css";

const HomePicks = () => {
	return (
		<div className="typethreeTallCards">
			<div className="content">
				<div className="headingContainer">
					<b className="heading">Top Picks for You</b>
				</div>
				<div className="cardsGrid">
					<div className="cards">
						<img className="imageLummi" alt="GamingLaptop" src="/src/assets/GamingLaptop.png" />
						<div className="content1">
							<div className="copy">
								<div className="cardTitle">Gaming Laptop</div>
								<div className="cardDescription">High-performance for gaming and work.</div>
								<div className="readMore">Read More</div>
							</div>
						</div>
					</div>
					<div className="cards">
						<img className="imageLummi" alt="BusinessLaptop" src="/src/assets/BusinessLaptop.png" />
						<div className="content1">
							<div className="copy">
								<div className="cardTitle">Business Laptop</div>
								<div className="cardDescription">Efficient and reliable for all tasks.</div>
								<div className="readMore">Read More</div>
							</div>
						</div>
					</div>
					<div className="cards">
						<img className="imageLummi" alt="StudentLaptop" src="/src/assets/StudentLaptop.png" />
						<div className="content1">
							<div className="copy">
								<div className="cardTitle">Student Laptop</div>
								<div className="cardDescription">Affordable and durable for learning.</div>
								<div className="readMore">Read More</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomePicks;
