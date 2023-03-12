<template>
  <div>
    <div class="bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        class="w-full h-64 object-cover object-center"
        :src="post.image"
        :alt="post.title"
      />
      <div class="p-4">
        <h1 class="text-3xl font-bold mb-4">{{ post.title }}</h1>
        <div class="text-gray-700 text-base mb-4">{{ post.date }}</div>
        <div class="prose" v-html="post.content"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostPage",
  data() {
    return {
      post: {
        id: 1,
        title: "My First Blog Post",
        date: "March 1, 2023",
        content:
          "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget sem vel sapien blandit dapibus. Duis eget odio quis sapien egestas vulputate. Fusce eu elit quis elit feugiat pretium sit amet eget mauris. Donec bibendum rutrum tortor, quis ullamcorper velit. Etiam accumsan, sem a euismod placerat, nulla massa sodales sapien, ut convallis odio ex vel dolor. Praesent vel mauris eget libero lacinia hendrerit.</p><p>Quisque convallis mi a orci fringilla, sed vestibulum libero consectetur. In hac habitasse platea dictumst. Pellentesque vel felis id urna bibendum consectetur a id augue. Proin placerat diam et orci finibus, vel dictum nulla efficitur. Nullam fermentum massa eu urna dictum, ac tristique felis bibendum. Integer laoreet, est vel varius interdum, mi quam efficitur leo, vitae dictum erat tellus a ipsum.</p>",
        image:
          "https://images.unsplash.com/photo-1619865559427-84e0e1c8ac9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      },
    };
  },
};
</script>
