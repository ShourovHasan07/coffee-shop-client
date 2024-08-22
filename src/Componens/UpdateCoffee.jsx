import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
// update value here 
    const updatedCoffee = {
      name: form.name.value,
      quantity: form.quantity.value,
      supplier: form.supplier.value,
      taste: form.taste.value,
      category: form.category.value,
      details: form.details.value,
      photo: form.photo.value,
    };

    console.log(updatedCoffee);

    // Send data to the server
    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Server Response:", data);

        if (data.modifiedCount) {
          Swal.fire({
            title: "Success!",
            text: "Coffee updated successfully!",
            icon: "success",
            confirmButtonText: "Cool",
          });
        } else {
          Swal.fire({
            title: "Error!",
            text: "There was an issue updating the coffee.",
            icon: "error",
            confirmButtonText: "Try Again",
          });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        Swal.fire({
          title: "Error!",
          text: "There was an issue connecting to the server.",
          icon: "error",
          confirmButtonText: "Try Again",
        });
      });
  };

  return (
    <div className="bg-[#F4F3F0] p-6">
      <h3 className="text-3xl font-extrabold mb-6">Update Coffee</h3>

      <form onSubmit={handleUpdate}>
        {/* Form Name and Quantity Row */}
        <div className="md:flex md:gap-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Coffee Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Coffee Name"
                defaultValue={name}
                name="name"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>

          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="quantity"
                placeholder="Available Quantity"
                defaultValue={quantity}
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
        </div>

        {/* Form Supplier and Taste Row */}
        <div className="md:flex md:gap-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Supplier</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Supplier"
                defaultValue={supplier}
                name="supplier"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>

          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="taste"
                placeholder="Taste"
                defaultValue={taste}
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
        </div>

        {/* Form Category and Details Row */}
        <div className="md:flex md:gap-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Category"
                defaultValue={category}
                name="category"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>

          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="details"
                placeholder="Details"
                defaultValue={details}
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
        </div>

        {/* Photo URL Row */}
        <div className="form-control md:w-1/2 mb-8">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <label className="input-group">
            <input
              type="text"
              placeholder="Photo URL"
              defaultValue={photo}
              name="photo"
              className="input input-bordered w-full"
              required
            />
          </label>
        </div>

        {/* Submit Button */}
        <input type="submit" value="Update Coffee" className="btn btn-block" />
      </form>
    </div>
  );
};

export default UpdateCoffee;
