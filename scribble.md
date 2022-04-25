# 20.1.3

Installed react. This is a great page to show the step by step process of how to install react for a project.

# 20.1.4

Set up the GitHub issues.

# 20.1.5

Added the the About section to the react and got our first taste at having things show up. First we went into the src/App.js replaced the App() with an empty div that looked like this.

function App() {
return (

<div>
</div>
);
}

Then we created a compnents folder in src and then nested an About folder. In src/components/About we created an index.js where created our first words like this.

import React from 'react';

function About() {
return (

<section>
<h1 id="about">Who am I?</h1>
</section>
);
}

export default About;

Then we had to slide back into our App.js and require the new file up top and reference it in the code like this.

import React from 'react';
import About from './components/About';

function App() {

return (

<div>
<main>
<About></About>
</main>
</div>
);
}

export default App;

With all of this is the screen showed the text Who am I?. We reandomly added a div to the end of the section in About/index.js and it created an error. They used this as an oppurtunity to teach us how React shows us errors. Finally in this same file we required the image that was provided up top and linked it into the page like this.

import React from "react";
import coverImage from "../../assets/cover/cover-image.jpg";

function About() {
return (

<section className="my-5">
<h1 id="about">Who am I?</h1>
<img
src={coverImage}
className="my-2"
style={{ width: "100%" }}
alt="cover"
/>
</section>
);
}

export default About;

# 20.1.6

We created the Nav component. First we made the Nav file and placed a new index.js inside of it. When it was all said and done we hardcoded some basic html and then went nuts mapping over the categories object and handeling an onclick event. The end result was this.

import React from "react";

function Nav() {
const categories = [
{
name: "commercial",
description:
"Photos of grocery stores, food trucks, and other commercial projects",
},
{ name: "portraits", description: "Portraits of people in my life" },
{ name: "food", description: "Delicious delicacies" },
{
name: "landscape",
description: "Fields, farmhouses, waterfalls, and the beauty of nature",
},
];
function categorySelected(name) {
console.log(`${name} clicked`);
}
return (

<header>
<h2>
<a href="/">
<span role="img" aria-label="camera">
{" "}
📸
</span>{" "}
Oh Snap!
</a>
</h2>
<nav>
<ul className="flex-row">
<li className="mx-2">
<a href="#about">About me</a>
</li>
<li>
<span>Contact</span>
</li>
{categories.map((category) => (
<li className="mx-1" key={category.name}>
<span onClick={() => categorySelected(category.name)}>
{category.name}
</span>
</li>
))}
</ul>
</nav>
</header>
);
}

export default Nav;

Finally we had to go back into the src/App.js and update it to requre this new file like this.

import React from "react";
import Nav from "./components/Nav";
import About from "./components/About";

function App() {
return (

<div>
<Nav></Nav>
<main>
<About></About>
</main>
</div>
);
}

export default App;

# 20.2.4

We ran our first tests for the About section of the page. Here we created a **test** file in the About directory that holds the index.test.js. In this file we added this.

import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import About from "..";

afterEach(cleanup);

describe("About component", () => {
// First Test
it("renders", () => {
render(<About />);
});

// Second Test
it("matches snapshot DOM node structure", () => {
// render About
const { asFragment } = render(<About />);
expect(asFragment()).toMatchSnapshot();
});
});

This runs a test and does something I have never seen before called creating a snap shot. This essentially made a copy of our HTML and then asked it to compare the two to see if they match. They also mentioned that if you update things the snapshot could become stale. If that happens when the tests run simply select "w" from the jest options in the terminal and then select "u" to update the snap shot. Once it has done that it will run the test again.
