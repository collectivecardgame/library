const React = require("react");

const icons = [
  {
    bgImg: "url(/top-bar/topbar.png)  0px 0px",
    text: "Collective",
    url: "/",
    makeLink: true
  },
  // {
  //   bgImg: 'url(/top-bar/topbar.png)  0px 0px',
  //   text: 'Gameplay',
  //   url: '/',
  // },
  // {
  //   bgImg: 'url(/top-bar/topbar.png)  0px 0px',
  //   text: 'Community',
  //   url: '/',
  // },
  {
    bgImg: "url(/top-bar/topbar.png)  0px 50px",
    text: "Cards",
    url: "/cards",
    makeLink: true
  },
  {
    bgImg: "url(/top-bar/topbar.png)  50px 50px",
    text: "Library",
    url: "/library",
    makeLink: false
  },
  {
    bgImg: "url(/top-bar/topbar.png)  100px 50px",
    text: "Discord",
    url: "https://discord.gg/C8fTNVt",
    makeLink: false
  },
  {
    bgImg: "url(/top-bar/topbar.png)  0px 100px",
    text: "Subreddit",
    url: "https://reddit.com/r/collectivecg",
    makeLink: false
  },
  {
    bgImg: "url(/top-bar/topbar.png)  50px 100px",
    text: "Creator",
    url: "/account",
    makeLink: true
  }
];

const strIcons = JSON.stringify(icons);

const scriptText = `
/* Initialization */
$ = document.querySelector.bind(document);

var icons = ${strIcons};

// Create every button
for (var i = 0; i < icons.length; i++) {
  var newButton = document.createElement("a");
  var pic = document.createElement("div");
  pic.style.background = icons[i].bgImg;
  pic.className = "top-navbar-button-sprite";
  newButton.appendChild(pic);
  var txt = document.createElement("div");
  txt.innerText = icons[i].text;
  txt.className = "top-navbar-button-text";
  newButton.appendChild(txt);
  newButton.classList.add("top-navbar-button");
  if (icons[i].text === 'Library') {
    newButton.classList.add("highlighted");
  }
  $(".top-navbar-buttons").appendChild(newButton);
  newButton.href = icons[i].url;
}
`;

class ConfiguredTopBar extends React.Component {
  render() {
    return (
      <>
        <div className="top-navbar-wrapper">
          <div className="top-navbar-buttons"></div>
        </div>

        <script dangerouslySetInnerHTML={{ __html: scriptText }} />
      </>
    );
  }
}

module.exports = ConfiguredTopBar;
