import React from "react";
import "./DeleteFav.css";

const DeleteFav = ({ onClick }) => {
	return <i onClick={onClick} class="ri-delete-bin-line"></i>;
};

export default DeleteFav;
