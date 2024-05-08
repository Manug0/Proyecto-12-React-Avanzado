import React from "react";
import "./DeleteFav.css";

const DeleteFav = ({ onClick }) => {
	return <i onClick={onClick} class="ri-close-circle-fill"></i>;
};

export default DeleteFav;
