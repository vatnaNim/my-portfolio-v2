<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-gray-900 px-4">
    <div class="cube-loader">
      <div class="cube cube1"></div>
      <div class="cube cube2"></div>
      <div class="cube cube3"></div>
      <div class="cube cube4"></div>
    </div>
    <p
      class="loading-text mt-6 text-base sm:text-lg md:text-xl font-semibold text-gray-700 dark:text-gray-300 text-center">
      Loading...
    </p>
  </div>
</template>

<style scoped>
.cube-loader {
  position: relative;
  width: 50px;
  height: 50px;
  margin: auto;
}

@media (max-width: 640px) {
  .cube-loader {
    width: 35px;
    height: 35px;
  }
}

@media (min-width: 1024px) {
  .cube-loader {
    width: 70px;
    height: 70px;
  }
}

.cube {
  position: absolute;
  width: 50%;
  height: 50%;
  background-color: #333;
  border: 2px solid #fff;
  animation: foldCube 2.4s infinite linear;
  border-radius: 4px;
}

.cube1 {
  top: 0;
  left: 0;
  transform-origin: 100% 100%;
  animation-delay: 0.3s;
}
.cube2 {
  top: 0;
  right: 0;
  transform-origin: 0 100%;
  animation-delay: 0.6s;
}
.cube3 {
  bottom: 0;
  right: 0;
  transform-origin: 0 0;
  animation-delay: 0.9s;
}
.cube4 {
  bottom: 0;
  left: 0;
  transform-origin: 100% 0;
  animation-delay: 1.2s;
}

@keyframes foldCube {
  0%,
  10% {
    transform: perspective(140px) rotateX(-180deg);
    opacity: 0;
  }
  25%,
  75% {
    transform: perspective(140px) rotateX(0deg);
    opacity: 1;
  }
  90%,
  100% {
    transform: perspective(140px) rotateY(180deg);
    opacity: 0;
  }
}

.loading-text {
  letter-spacing: 2px;
  animation: pulse 1.5s infinite ease-in-out;
}

@keyframes pulse {
  0% {
    opacity: 0.3;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.3;
  }
}
</style>
