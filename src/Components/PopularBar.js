import React from "react";

function PopularBar() {
  return (
    <div>
      <h1 className=" font-bold text-3xl p-4 text-gray-900">Popular Books</h1>
      <div className="flex justify-evenly px-10">
        <div className="card w-[20rem] card-bordered mx-4 bg-white transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">
          <figure>
            <img src="https://picsum.photos/id/1005/400/250" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Top image
              <div className="badge mx-2 badge-secondary">NEW</div>
            </h2>
            <p>Rerum reiciendis beatae</p>
            <div className="justify-end card-actions">
              <button className="btn btn-secondary btn-sm mx-auto transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">
                Rent / Buy
              </button>
            </div>
          </div>
        </div>

        <div className="card w-[20rem] shadow-lg bg-white card-bordered mx-4 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">
          <figure>
            <img src="https://picsum.photos/id/1005/400/250" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Top image
              <div className="badge mx-2 badge-secondary">NEW</div>
            </h2>
            <p>Rerum reiciendis beatae</p>
            <div className="justify-end card-actions">
              <button className="btn btn-secondary btn-sm mx-auto transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">
                Rent / Buy
              </button>
            </div>
          </div>
        </div>
        <div className="card w-[20rem] shadow-lg bg-white card-bordered mx-4 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">
          <figure>
            <img src="https://picsum.photos/id/1005/400/250" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Top image
              <div className="badge mx-2 badge-secondary">NEW</div>
            </h2>
            <p>Rerum reiciendis beatae</p>
            <div className="justify-end card-actions">
              <button className="btn btn-secondary btn-sm mx-auto transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">
                Rent / Buy
              </button>
            </div>
          </div>
        </div>
        <div className="card w-[20rem] shadow-lg bg-white card-bordered mx-4 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">
          <figure>
            <img src="https://picsum.photos/id/1005/400/250" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Top image
              <div className="badge mx-2 badge-secondary">NEW</div>
            </h2>
            <p>Rerum reiciendis beatae</p>
            <div className="justify-end card-actions">
              <button className="btn btn-secondary btn-sm mx-auto transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">
                Rent / Buy
              </button>
            </div>
          </div>
        </div>
        <div className="card w-[20rem] shadow-lg bg-white card-bordered mx-4 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">
          <figure>
            <img src="https://picsum.photos/id/1005/400/250" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Top image
              <div className="badge mx-2 badge-secondary">NEW</div>
            </h2>
            <p>Rerum reiciendis beatae</p>
            <div className="justify-end card-actions">
              <button className="btn btn-secondary btn-sm mx-auto transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">
                Rent / Buy
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopularBar;
