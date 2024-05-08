import React from "react";
import "./Cats.css";
import PcsCards from "./PcsCards";

// usememo?

const Pcs = () => {
	return (
		<div className="pcsPage">
			{/* Aqui el aside con filtros de busqueda */}
			<div className="info">
				<h3>Encuentra aquí nuestros portátiles de las mejores marcas</h3>
				<h3>
					Ya sea para jugar o para trabajar, dispondrás de la máxima calidad y rendimiento a un
					precio competitivo
				</h3>
			</div>
			<PcsCards />
		</div>
	);
};

export default Pcs;

// const CatImg = () => {
// 	const [cat, setCat] = useState([]);
// 	const divRefs = useRef([]);

// 	useEffect(() => {
// 		const fetchImage = async () => {
// 			try {
// 				const res = await axios.get(`https://api.thecatapi.com/v1/images/search?limit=6`);
// 				const catImages = res.data.map((catObject) => catObject.url);
// 				setCat(catImages);
// 			} catch (error) {
// 				console.log(error);
// 			}
// 		};

// 		const handleMouse = (e) => {
// 			const xAxis = (window.innerWidth / 2 - e.pageX) / 100;
// 			const yAxis = (window.innerHeight / 2 - e.pageY) / 100;

// 			divRefs.current.forEach((divRef) => {
// 				divRef.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
// 			});
// 		};

// 		document.addEventListener("mousemove", handleMouse);

// 		fetchImage();

// 		return () => {
// 			document.removeEventListener("mousemove", handleMouse);
// 		};
// 	}, []);

// 	return (
// 		<>
// 			{cat.map((cat, index) => (
// 				<div ref={(ref) => (divRefs.current[index] = ref)} key={index}>
// 					<img src={cat} alt="cat"></img>
// 					<h2>Imagen {index + 1}</h2>
// 					<Heart cat={cat} />
// 					<Stars id={index} />
// 				</div>
// 			))}
// 		</>
// 	);
// };

// export { Cats, CatImg };
