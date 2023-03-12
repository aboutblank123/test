<template>
  <div class="bg-gray-100">
    <div class="container mx-auto">
      <header class="flex items-center justify-between py-4">
        <div class="text-xl font-bold text-gray-800">
          <router-link to="/">My Blog</router-link>
        </div>
        <nav>
          <ul class="flex items-center space-x-4">
            <li>
              <router-link to="/">Home</router-link>
            </li>
            <li>
              <router-link to="/about">About</router-link>
            </li>
          </ul>
        </nav>
      </header>
      <main class="py-6">
        <slot></slot>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: "LayoutView",
};
</script>
