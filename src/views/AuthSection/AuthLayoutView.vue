<template>
  <div class="h-screen justify-center items-center">
    <div class="grid grid-cols-2">
      <div>
        <div class="bg-gray-800 h-screen p-10 text-white flex flex-col gap-60">
          <div>
            <h2 class="uppercase text-3xl"><span class="font-bold">frmn.</span>sbgj</h2>
          </div>
          <div class="space-y-5">
            <h2 class="font-bold text-5xl">WELCOME TO...</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, magni officiis
              libero fugiat itaque corporis obcaecati veritatis eaque impedit ratione aut eos
              facere, maxime minus!
            </p>
          </div>
        </div>
      </div>
      <div class="p-10">
        <router-view />
      </div>
    </div>
  </div>
</template>
