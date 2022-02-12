import React from "react";

function CategoriesBar() {
  return (
    <div>
      <h1 className=" font-bold text-3xl p-4 text-gray-900">Categories</h1>
      <div className="flex justify-evenly">
        <div className="card shadow-xl image-full m-8 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 ">
          <figure>
            <img src="https://picsum.photos/id/1005/400/250" />
          </figure>
          <div className="justify-end card-body">
            <h2 className="card-title">Competetive Exams</h2>
            <p>
              Rerum reiciendis beatae tenetur excepturi aut pariatur est eos.
              Sit sit necessitatibus veritatis sed molestiae voluptates incidunt
              iure sapiente.
            </p>
            <div className="card-actions">
              <button className="btn btn-primary mx-auto">Get Started</button>
            </div>
          </div>
        </div>
        <div className="card shadow-xl image-full m-8 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">
          <figure>
            <img src="https://picsum.photos/id/1005/400/250" />
          </figure>
          <div className="justify-end card-body">
            <h2 className="card-title">School Books</h2>
            <p>
              Rerum reiciendis beatae tenetur excepturi aut pariatur est eos.
              Sit sit necessitatibus veritatis sed molestiae voluptates incidunt
              iure sapiente.
            </p>
            <div className="card-actions">
              <button className="btn btn-primary mx-auto">Get Started</button>
            </div>
          </div>
        </div>
        <div className="card shadow-xl image-full m-8 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">
          <figure>
            <img src="https://picsum.photos/id/1005/400/250" />
          </figure>
          <div className="justify-end card-body">
            <h2 className="card-title">University Books</h2>
            <p>
              Rerum reiciendis beatae tenetur excepturi aut pariatur est eos.
              Sit sit necessitatibus veritatis sed molestiae voluptates incidunt
              iure sapiente.
            </p>
            <div className="card-actions">
              <button className="btn btn-primary mx-auto">Get Started</button>
            </div>
          </div>
        </div>
        <div className="card shadow-xl image-full m-8 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">
          <figure>
            <img src="https://picsum.photos/id/1005/400/250" />
          </figure>
          <div className="justify-end card-body">
            <h2 className="card-title">Novels</h2>
            <p>
              Rerum reiciendis beatae tenetur excepturi aut pariatur est eos.
              Sit sit necessitatibus veritatis sed molestiae voluptates incidunt
              iure sapiente.
            </p>
            <div className="card-actions">
              <button className="btn btn-primary mx-auto">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoriesBar;
