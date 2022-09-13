import React from "react";

//include images into your bundle
import { Jumbotron } from "./Jumbotron.jsx";
import { Card } from "./Card.jsx";
import { Navbar } from "./Navbar.jsx";
//create your first component
let year = new Date ().getFullYear();
const Home = () => {
	return(
	<div className="container-fluid p-0">
			<Navbar />
			<div className="container">
				<div className="row">
					<div className="col-12">
						<Jumbotron />
					</div>
				</div>
				<div className="row pb-5">
					<div className="col-xl-3 col-md-4 col-lg-3">
						<Card
							imageUrl="https://ep01.epimg.net/elpais/imagenes/2020/01/26/album/1580068864_817645_1580119956_noticia_normal.jpg"
							cardTitle="Kobe Bryant"
							cardDescription="fue un baloncestista estadounidense que jugaba en la posición de escolta. Disputó veinte temporadas en la National Basketball Association (NBA), todas ellas en Los Angeles Lakers."
							buttonUrl="https://es.wikipedia.org/wiki/Kobe_Bryant"
							buttonLabel="Go to Wikipedia"
						/>
					</div>
					<div className="col-xl-3 col-md-4 col-lg-3">
						<Card
							imageUrl="https://i.pinimg.com/564x/09/b6/30/09b630613812979e40182bee9b0b4aa8.jpg"
							cardTitle="Kyrie Irving"
							cardDescription="es un jugador de baloncesto estadounidense que pertenece a la plantilla de Brooklyn Nets de la NBA. Con 1,88 metros de estatura, juega en la posición de base."
							buttonUrl="https://es.wikipedia.org/wiki/Kyrie_Irving"
							buttonLabel="Go to Wikipedia"
						/>
					</div>
					<div className="col-xl-3 col-md-4 col-lg-3">
						<Card
							imageUrl="http://2.bp.blogspot.com/-A7X7Cp6HlIg/U7-VK6phA7I/AAAAAAAAI7Y/0a3Z-ODZu_o/s1600/magic-johnson.jpg"
							cardTitle="Magic Johnson"
							cardDescription="is an American former professional basketball player. Often regarded as the greatest point guard of all time,[3][4][5] Johnson played 13 seasons in the National Basketball Association (NBA). "
							buttonUrl="https://en.wikipedia.org/wiki/Magic_Johnson"
							buttonLabel="Go to Wikipedia"
						/>
					</div>
					<div className="col-xl-3 col-md-4 col-lg-3">
						<Card
							imageUrl="https://i0.wp.com/naciondeportes.com/wp-content/uploads/2020/01/LeBron-supero%CC%81-a-Kobe-Bryant.jpg?fit=1000%2C600&ssl=1"
							cardTitle="Lebron James"
							cardDescription=" is an American professional basketball player for the Los Angeles Lakers of the National Basketball Association (NBA). Nicknamed King James, he is widely considered one of the greatest players of all time and is often compared to Michael Jordan "
							buttonUrl="https://en.wikipedia.org/wiki/LeBron_James"
							buttonLabel="Go to Wikipedia"
					/>
				</div>
			</div>
		</div>
			<footer className="footer py-3 bg-dark">
				<div className="container">
			<p className= "text-light text-center">
				Made by Kevin, using React.js - {year}
			</p>
			</div>

			</footer>
		</div>
	);
};

export default Home;
