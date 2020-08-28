<template>
  <div id="app">
    <header id="logo-container">
      <img id="logo" alt="page logo" src="./assets/logo.png" />
    </header>

    <div id="page-content">
      <router-view />
    </div>

    <footer id="footer-container">
      Agile engine test, made by <a href="">Enzo Luis Strongoli</a>
    </footer>
  </div>
</template>

<style>
#app > * {
  padding: 10px;
  flex: 1 100%;
}

body {
  margin: 0;
}

html,
body,
#app {
  height: 100%;
}

#logo {
  width: 25vh;
  margin: 8px;
}

#logo-container {
  box-shadow: 0 8px 6px -6px rgba(0, 0, 0, 0.15);
  background-color: #3a1839;
  flex-basis: min-content;
  flex-grow: 0;
}

#page-content {
  flex-basis: auto;
  overflow: hidden;
  padding: 0;
  overflow-y: scroll;
}

#footer-container {
  flex-basis: min-content;
  background-color: #3a1839;
  color: whitesmoke;
  flex-grow: 0;
}

#app {
  display: flex;
  flex-direction: column;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.45)), #3a1839;
  align-items: stretch;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
