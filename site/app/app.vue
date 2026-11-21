<script setup lang="ts">
const identity: Readonly<{ name: string; role: string; location: string }> = {
  name: 'Soumyajit Das',
  role: 'Product Engineer — C#/.NET, Vue.js, Ad-Tech Platforms',
  location: 'Bangalore, Karnataka',
}
</script>

<template>
  <main class="shell">
    <p class="eyebrow">Mission Control</p>
    <h1>{{ identity.name }}</h1>
    <p class="role">{{ identity.role }}</p>
    <p class="meta">{{ identity.location }}</p>
  </main>
</template>

<style scoped>
.shell {
  min-height: 100vh;
  margin: 0 auto;
  padding: 4rem 1.5rem;
  max-width: 44rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.75rem;
  font-family: system-ui, -apple-system, sans-serif;
  color: #111827;
}

.eyebrow {
  margin: 0;
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #0f766e;
}

h1 {
  margin: 0;
  font-size: clamp(2rem, 5vw, 3rem);
  line-height: 1.1;
}

.role {
  margin: 0;
  font-size: 1.125rem;
  color: #374151;
}

.meta {
  margin: 0;
  font-size: 0.9375rem;
  color: #4b5563;
}
</style>
