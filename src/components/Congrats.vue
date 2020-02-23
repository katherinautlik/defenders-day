<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <p>{{ wishes }}</p>
    <h2>
      <router-link to="/gift">Here is your gift :)</router-link>
    </h2>
    <p>{{ signature }}</p>
  </div>
</template>

<script>
  export default {
    name: 'Congrats',
    props: {
      title: String,
      wishes: String,
      signature: String
    }
  }
</script>
