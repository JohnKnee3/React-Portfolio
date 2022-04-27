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

# 20.2.5

Here we created the tests for the Nav. The first test was the exact same as what we did for the abotu section. But then we also tested to see if we could find an emoji like this.

describe("emoji is visible", () => {
it("inserts emoji into the h2", () => {
// Arrange
const { getByLabelText } = render(<Nav />);
// Assert
expect(getByLabelText("camera")).toHaveTextContent("📸");
});
});

Then after that we tested to see if all the links are visible like this.

describe("links are visible", () => {
it("inserts text into the links", () => {
const { getByTestId } = render(<Nav />);
expect(getByTestId("link")).toHaveTextContent("Oh Snap!");
expect(getByTestId("about")).toHaveTextContent("About me");
});
});

The big thing with this last one is that we had to go into the Nav/index.js and update the links being tested to have a data-testid="link" & data-testid="about". WE added these beacuse these data-testid's will never be used by anything else but running a test. As a result if someone updates the class or id link later to style the page we will be uneffected.

# 20.3

A fairly confusing a buggy module that I needed help to get working. May have to come back to it but in general it simply set up the gallery page.

# 20.4.3

Everything is working fine here so far. We created the Contact component like this

import React from "react";

function ContactForm() {
// JSX
return (

<section>
<h1>Contact me</h1>
<form id="contact-form">
<div>
<label htmlFor="name">Name:</label>
<input type="text" name="name" />
</div>
<div>
<label htmlFor="email">Email address:</label>
<input type="email" name="email" />
</div>
<div>
<label htmlFor="message">Message:</label>
<textarea name="message" rows="5" />
</div>
<button type="submit">Submit</button>
</form>
</section>
);
}

export default ContactForm;

Then we went into App.js and set up the file to import contact like this.

import ContactForm from "./components/Contact";

The interesteting bit here is that the inmort is the same name as what we exported "ContactForm" and the file path still looks for "Contact". None of this is to shocking this just happens to be the first time we did this so they tried to juke us when it came time to set up the App.js. Finally we simply added the contact for into the <main> part of the body. This looks silly right now but they claim we will be learning how to hide it soon. The return statment looks like this.

return (

<div>
<Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
<main>
<ContactForm></ContactForm>
<Gallery currentCategory={currentCategory}></Gallery>
<About></About>
</main>
</div>
);

Also the form is already throwing an error if you do now input the email address correctly. As of right now the only way to trigger it is by hitting the submit button.

# 20.4.4

So far so smooth. This time we learned how to log the information from the two input forms and the textarea. First we created the useState and destructured it like this.

const [formState, setFormState] = useState({
name: "",
email: "",
message: "",
});
const { name, email, message } = formState;

Then we created a function named handleFormState that will listen everytime we listen to these spots. Like this.

function handleChange(e) {
setFormState({ ...formState, [e.target.name]: e.target.value });
}

Next we went down to the forms to require it which looked like this.

  <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            defaultValue={name}
            onChange={handleChange}
            name="name"
          />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            defaultValue={email}
            name="email"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            defaultValue={message}
            onChange={handleChange}
            rows="5"
          />
    </div>

Here we are calling this functions so that each time some adds a single character to the forms it will remeber them. Finally we added a submit function called handleSubmit that looks like this.

function handleSubmit(e) {
e.preventDefault();
console.log("I am formstate", formState);
}

And called it down below at the top of the <form> like this.

<form id="contact-form" onSubmit={handleSubmit}>

This will log all three areas that get information once you hit the submit button.

# 20.4.5

We brought in the validateEmail function from the herlpers.js like this.

import { validateEmail } from '../../utils/helpers';

Then we set up the useState for the error message and then console logged it a few times to test in within the handleChange function like this.

const [errorMessage, setErrorMessage] = useState("");
const { name, email, message } = formState;

function handleChange(e) {
if (e.target.name === "email") {
const isValid = validateEmail(e.target.value);

      console.log(isValid);
      // isValid conditional statement
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        if (!e.target.value.length) {
          setErrorMessage(`${e.target.name} is required.`);
        } else {
          setErrorMessage("");
        }
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log("email is", e.target.value);
    }

}

This mostly made since. The only weird thing is that there is a 1 round delay on when it shows the false statment stops console.loging the success. I'm not clear as to why this happens but I hope it gets addressed soon.

# 20.4.6

We made our first Conditional Render. First we went to the App.js and made sure to require useState. Then we made a const that built a contactSelected hook and set it to false like this.

const [contactSelected, setContactSelected] = useState(false);

Then we tweaked the body to do a react style if statement that will show the <About> & <Gallery> if contactSelected is False, otherwise show only <ContactForm> like this.

return (

<div>
<Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
<main>
{!contactSelected ? (
<>
<Gallery currentCategory={currentCategory}></Gallery>
<About></About>
</>
) : (
<ContactForm></ContactForm>
)}
</main>
</div>
);

Finally we slid into Nav/index.js and brought in the two new variables up top like this.

const {
categories = [],
setCurrentCategory,
currentCategory,
contactSelected,
setContactSelected,
} = props;

Then we went down and used them like this

return (

<header className="flex-row px-1">
<h2>
<a data-testid="link" href="/">
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
<a
data-testid="about"
href="#about"
onClick={() => setContactSelected(false)} >
About me
</a>
</li>
<li className={`mx-2 ${contactSelected && "navActive"}`}>
<span onClick={() => setContactSelected(true)}>Contact</span>
</li>
{categories.map((category) => (
<li
className={`mx-1 ${ currentCategory.name === category.name && !contactSelected && `navActive` }`}
key={category.name} >
<span
onClick={() => {
setCurrentCategory(category);
setContactSelected(false);
}} >
{capitalizeFirstLetter(category.name)}
</span>
</li>
))}
</ul>
</nav>
</header>
);

Here we made setContactSelected when each nav bar thing has been clicked. If contact is clicked we set to to true. Everywhere else we put false. Then added contactSelected to the Navbar to the navActive will display as intended. This was a pretty important page and I may need to reference it later to make sure I understand all of the ideas brought up here sink in.
