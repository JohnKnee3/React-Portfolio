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
