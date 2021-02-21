console.log("imported");

const pageTemplate = document.createElement("template");
pageTemplate.innerHTML = `
  <style> 
    :host {
      color: black;
    }

    :host([inverted]) {
      color: white;
    }

    #wrap {
      height: 100vh;
    }

    header {
      height: 50px;
      line-height: 50px;
      padding: 2.5vw 2.5vw;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
    
    @media (max-width: 600px) {
      header {
        flex-direction: column;
        align-items: center;
        height: 100px;
      }
    }

    .nav-item {
      display: inline-block;
      margin-left: 2vw;
    }

    .title {
      font-size: 1.75rem;
    }

    a {
      text-transform: none;
      text-decoration: none;
      color: inherit;
    }
  </style>
  <div id="wrap">
    <header>
      <a class="nav-item" href="/"><span class="title">joseph finnie</span></a>
      <nav>
        <a class="nav-item" href="art.html">art</a>
        <a class="nav-item" href="writing.html">writing</a>
        <a class="nav-item" href="about.html">about</a>
        <a class="nav-item" href="photos.html">photography</a>
      </nav>
    </header>
    <slot></slot>
  </div>
`;

class Page extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(pageTemplate.content);
  }
}

customElements.define("jwf-page", Page);
