import { define, html } from "hybrids";
export function increaseCount(host) {
  host.count += 1;
}

export function nextBtn(host) {
  if (host.centerClass === "small") {
    host.centerClass = "medium";
  } else if (host.centerClass === "medium") {
    host.centerClass = "large";
  } else {
    host.centerClass = "small";
  }
}
export const startButton = html`
  <span>
    <button onclick="${nextBtn}">
      start
    </button>
  </span>
`;

export const circles = centerStyle => html`
  <div class="circle"></div>
  <span class=${centerStyle}>
  |
  </span>
 
  </svg>
  <div class="circle"></div>
`;

export const circleStyles = html`
  <style>
    div.container {
      display: flex;
      justify-content: center;
      height: 100vh;
      align-items: center;
    }
    div.circle {
      background-color: black;
      width: 5vw;
      height: 5vw;
      border-radius: 50%;
    }

    @keyframes smallToMedium {
      from {
        margin: 0 10vw;
      }
      to {
        margin: 0 20vw;
      }
    }

    @keyframes mediumToLarge {
      from {
        margin: 0 20vw;
      }
      to {
        margin: 0 30vw;
      }
    }
    @keyframes largeToSmall {
      from {
        margin: 0 40vw;
      }
      to {
        margin: 0 10vw;
      }
    }
    .small {
      margin: 0 10vw;
      animation-name: largeToSmall;
      animation-duration: 3s;
    }
    .medium {
      margin: 0 20vw;
      animation-name: smallToMedium;
      animation-duration: 2s;
    }
    .large {
      margin: 0 30vw;
      animation-name: mediumToLarge;
      animation-duration: 2s;
    }
  </style>
`;

export const SimpleCounter = {
  centerClass: "small",
  render: ({ centerClass }) => html`
    <div class="container">
      ${circles(centerClass)}
    </div>
    <div>
      ${startButton}
    </div>
    ${circleStyles}
  `
};

define("simple-counter", SimpleCounter);
