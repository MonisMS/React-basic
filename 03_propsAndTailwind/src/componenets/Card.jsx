import React from "react";

function Card({username}) {
  console.log(username);
  
    return (
        <>
        <div>Card</div>
         <div class="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl">
  <div>
    <img class="size-48 shadow-xl rounded-md" alt="" src="https://images.pexels.com/photos/32117654/pexels-photo-32117654/free-photo-of-rustic-yellow-scooter-by-riverside-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
  </div>
  <div class="flex items-center md:items-start">
    <span class="text-2xl font-medium">{username}</span>
    <span class="font-medium text-sky-500">The Anti-Patterns</span>
    <span class="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
      <span>No. 4</span>
      <span>·</span>
      <span>2025</span>
    </span>
  </div>
</div>
        </>
    )
}

export default Card