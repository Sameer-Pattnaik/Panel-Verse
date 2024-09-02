import React from 'react'

function Cards({ item }) {
    console.log(item)
  return (
    <>
    <div className="mt-4 my-3 p-3">
    <div className="card bg-base-100 w-92 shadow-xl hover:scale-110 duration-200">
  <figure>
    <img
      src={item.image}
      alt={item.id} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.title}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>{item.description}</p>
    <div className="card-actions justify-between">
      <div className="cursor-pointer px-1 py-1 rounded-lg border-[2px] hover:bg-pink-500 hover:text-white duration-200">{item.price}</div>
      <div className="cursor-pointer px-2 py-1 rounded-lg border-[2px] hover:bg-pink-500 hover:text-white duration-200">Buy Now</div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Cards
