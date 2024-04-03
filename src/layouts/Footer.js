import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="main-footer">
      <span>&copy; 2024. Sharp. All Rights Reserved.</span>
      <span>Created by: <Link to="https://bhamwebdesignandseoco.com/" target="_blank">Bham Web Design & SEO Co.</Link></span>
    </div>
  )
}