import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffes }) => {
  const { _id, name, quantity, supplier, taste, category, details, photo } =
    coffee;
  const handelDelet = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't  delet  this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("delet confirm ");

        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your coffee has been deleted.",
                icon: "success",
              });

              const reaminig = coffees.filter((cof) => cof._id !== _id);
              setCoffes(reaminig);
            }
          });
      }
    });
  };
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img src={photo} alt="Movie" />
      </figure>
      <div className="card-body flex  justify-between w-full">
        <div>
          <h2 className="card-title ">Name:{coffee.name}</h2>
          <p>{coffee.supplier}</p>
          <p>{coffee.quantity}</p>
          <p>{coffee.taste}</p>
        </div>

        <div className="join join-vertical mb-2">
         <Link to={'addCoffee'}> <button className="btn mb-2 btn-primary join-item">Create</button></Link>
          <button className="btn mb-2 btn-info join-item">Read</button>
          <Link to={`updateCoffee/${_id}`}>
            <button className="btn mb-2  btn-warning join-item">Update</button>
          </Link>
          <button
            onClick={() => handelDelet(_id)}
            className="btn  btn-error join-item"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
