<template>
  <div>
    <h1 class="text-3xl font-bold mb-4">Welcome to my blog</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div
        v-for="(post, index) in posts"
        :key="index"
        class="bg-white rounded-lg overflow-hidden shadow-lg"
      >
        <img
          :src="post.image"
          alt=""
          class="w-full h-48 object-cover object-center"
        />
        <div class="p-4">
          <h2 class="text-xl font-bold mb-2">{{ post.title }}</h2>
          <p class="post-date">{{ formatDate(post.date) }}</p>
          <p class="text-gray-700 text-base">{{ post.excerpt }}</p>
          <div class="mt-4">
            <router-link
              class="bg-gray-200 py-2 px-4 rounded-lg text-gray-800 font-bold"
              :to="'/posts/' + post.id"
              >Read more</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      posts: [
        {
          id: 1,
          title: "My First Blog Post",
          excerpt:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget sem vel sapien blandit dapibus. Duis eget odio quis sapien egestas vulputate.",
          image:
            "https://images.unsplash.com/photo-1619865559427-84e0e1c8ac9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        },
        {
          id: 2,
          title: "My Second Blog Post",
          excerpt:
            "Sed eget sem vel sapien blandit dapibus. Duis eget odio quis sapien egestas vulputate. Fusce eu elit quis elit feugiat pretium sit amet eget mauris.",
          image:
            "https://images.unsplash.com/photo-1619808022199-ba6d1540fc2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        },
        {
          id: 3,
          title: "My Third Blog Post",
          excerpt:
            "Donec bibendum rutrum tortor, quis ullamcorper velit. Etiam accumsan, sem a euismod placerat, nulla massa sodales sapien, ut convallis odio ex vel dolor.",
          image:
            "https://images.unsplash.com/photo-1619807549902-40e6633b3dd8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        },
      ],
    };
  },
};
</script>
<style scoped>
.post-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 1rem;
}

.post-card {
  background-color: white;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
}

.post-card:hover {
  transform: translateY(-0.25rem);
}

.post-image {
  height: 250px;
  object-fit: cover;
}

.post-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin: 1rem;
}

.post-date {
  font-size: 0.875rem;
  color: #718096;
  margin: 0 1rem 1rem;
}
</style>
