export interface LessonContent {
  id: string;
  title: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  duration: string;
  objectives: string[];
  description: string;
  concepts: {
    title: string;
    content: string;
  }[];
  examples: {
    title: string;
    code: string;
    explanation: string;
    executable?: boolean;
  }[];
  exercises?: {
    title: string;
    instructions: string;
    starter: string;
    solution: string;
  }[];
  completed: boolean;
}

export const lessons: LessonContent[] = [
  {
    id: "html-basics",
    title: "HTML Basics & Structure",
    difficulty: "beginner",
    duration: "30 min",
    completed: false,
    objectives: [
      "Understand what HTML is and its purpose",
      "Learn about HTML document structure",
      "Master basic HTML syntax and elements",
      "Create your first HTML document"
    ],
    description: "Get started with HTML fundamentals. Learn about the structure of HTML documents, basic syntax, and how to create your first webpage.",
    concepts: [
      {
        title: "What is HTML?",
        content: `
          <p><strong>HTML (HyperText Markup Language)</strong> is the standard markup language for creating web pages. It describes the structure and content of a webpage using elements and tags.</p>
          <ul>
            <li><strong>HyperText:</strong> Text that contains links to other text</li>
            <li><strong>Markup:</strong> A system for annotating text to indicate structure and formatting</li>
            <li><strong>Language:</strong> A set of rules and syntax for creating documents</li>
          </ul>
        `
      },
      {
        title: "HTML Document Structure",
        content: `
          <p>Every HTML document follows a basic structure with these essential elements:</p>
          <ul>
            <li><strong>&lt;!DOCTYPE html&gt;</strong> - Declares the document type</li>
            <li><strong>&lt;html&gt;</strong> - Root element that contains all content</li>
            <li><strong>&lt;head&gt;</strong> - Contains metadata about the document</li>
            <li><strong>&lt;body&gt;</strong> - Contains the visible content of the page</li>
          </ul>
        `
      },
      {
        title: "HTML Tags and Elements",
        content: `
          <p>HTML uses <strong>tags</strong> to create <strong>elements</strong>:</p>
          <ul>
            <li><strong>Opening tag:</strong> &lt;tagname&gt;</li>
            <li><strong>Closing tag:</strong> &lt;/tagname&gt;</li>
            <li><strong>Self-closing tag:</strong> &lt;tagname /&gt;</li>
            <li><strong>Element:</strong> Everything from opening to closing tag</li>
          </ul>
        `
      }
    ],
    examples: [
      {
        title: "Basic HTML Document",
        code: `<!DOCTYPE html>
<html>
<head>
    <title>My First Page</title>
</head>
<body>
    <h1>Hello World!</h1>
    <p>This is my first webpage.</p>
</body>
</html>`,
        explanation: "A simple HTML document with a title, heading, and paragraph.",
        executable: true
      },
      {
        title: "Basic HTML Elements",
        code: `<h1>Big Heading</h1>
<h2>Smaller Heading</h2>
<p>This is a paragraph.</p>
<p>This text is <strong>bold</strong> and this is <em>italic</em>.</p>`,
        explanation: "Basic HTML elements for headings and text formatting.",
        executable: true
      }
    ],
    exercises: [
      {
        title: "Create Your First HTML Page",
        instructions: "Create a complete HTML document with a title, heading, and paragraph about yourself. Include both strong and emphasized text.",
        starter: `<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Add your metadata here -->
</head>
<body>
    <!-- Add your content here -->
</body>
</html>`,
        solution: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About Me</title>
</head>
<body>
    <h1>About Me</h1>
    <p>Hello! My name is <strong>John Doe</strong> and I'm learning HTML. 
    I'm <em>excited</em> to build amazing websites!</p>
</body>
</html>`
      }
    ]
  },
  {
    id: "text-formatting",
    title: "Text Formatting & Typography",
    difficulty: "beginner",
    duration: "25 min",
    completed: false,
    objectives: [
      "Master heading hierarchy (h1-h6)",
      "Learn text formatting elements",
      "Understand semantic text elements",
      "Create well-structured content"
    ],
    description: "Learn how to format text effectively in HTML. Master headings, paragraphs, and various text formatting elements for better content structure.",
    concepts: [
      {
        title: "Heading Hierarchy",
        content: `
          <p>HTML provides six levels of headings from h1 to h6:</p>
          <ul>
            <li><strong>h1:</strong> Main page title (only one per page)</li>
            <li><strong>h2:</strong> Major section headings</li>
            <li><strong>h3-h6:</strong> Subsection headings in decreasing importance</li>
          </ul>
          <p>Proper heading hierarchy helps with SEO and accessibility.</p>
        `
      },
      {
        title: "Text Formatting Elements",
        content: `
          <p>HTML provides various elements for text formatting:</p>
          <ul>
            <li><strong>&lt;strong&gt;</strong> - Important text (bold)</li>
            <li><strong>&lt;em&gt;</strong> - Emphasized text (italic)</li>
            <li><strong>&lt;mark&gt;</strong> - Highlighted text</li>
            <li><strong>&lt;small&gt;</strong> - Smaller text</li>
            <li><strong>&lt;sub&gt;</strong> - Subscript</li>
            <li><strong>&lt;sup&gt;</strong> - Superscript</li>
          </ul>
        `
      }
    ],
    examples: [
      {
        title: "Heading Hierarchy",
        code: `<h1>My Article</h1>
<h2>Introduction</h2>
<p>This is the introduction.</p>

<h2>Chapter 1</h2>
<h3>Basic Concepts</h3>
<p>Content for this section.</p>

<h2>Conclusion</h2>
<p>This is the conclusion.</p>`,
        explanation: "Use headings in order (h1, h2, h3) to create a clear structure.",
        executable: true
      },
      {
        title: "Text Formatting",
        code: `<p>This text is <strong>bold</strong> and this is <em>italic</em>.</p>
<p>You can <mark>highlight</mark> important words.</p>
<p>Math: E = mc<sup>2</sup></p>
<p>Chemistry: H<sub>2</sub>O</p>`,
        explanation: "Basic text formatting elements for different purposes.",
        executable: true
      }
    ],
    exercises: [
      {
        title: "Format an Article",
        instructions: "Create a properly structured article about a topic of your choice. Use appropriate headings, paragraphs, and text formatting.",
        starter: `<article>
    <!-- Add your article content here -->
    <!-- Use h1 for main title -->
    <!-- Use h2 for section headings -->
    <!-- Use h3 for subsections -->
    <!-- Include formatted text -->
</article>`,
        solution: `<article>
    <h1>The Amazing World of Web Development</h1>
    
    <h2>Introduction</h2>
    <p>Web development is an <em>exciting</em> field that combines <strong>creativity</strong> with <strong>technical skills</strong>.</p>
    
    <h2>Key Technologies</h2>
    <h3>Frontend</h3>
    <p>The frontend includes <mark>HTML</mark>, CSS, and JavaScript.</p>
    
    <h3>Backend</h3>
    <p>Backend technologies include various programming languages and databases.</p>
    
    <h2>Conclusion</h2>
    <p><small>Learning web development takes time, but it's worth the effort!</small></p>
</article>`
      }
    ]
  },
  {
    id: "links-navigation",
    title: "Links & Navigation",
    difficulty: "beginner",
    duration: "20 min",
    completed: false,
    objectives: [
      "Create different types of links",
      "Understand link attributes",
      "Build navigation structures",
      "Learn about link accessibility"
    ],
    description: "Master the art of linking in HTML. Learn to create internal links, external links, and navigation structures that enhance user experience.",
    concepts: [
      {
        title: "The Anchor Element",
        content: `
          <p>The <strong>&lt;a&gt;</strong> (anchor) element is used to create links:</p>
          <ul>
            <li><strong>href attribute:</strong> Specifies the destination URL</li>
            <li><strong>target attribute:</strong> Controls where the link opens</li>
            <li><strong>rel attribute:</strong> Describes the relationship to the linked document</li>
          </ul>
        `
      },
      {
        title: "Types of Links",
        content: `
          <ul>
            <li><strong>External links:</strong> Point to other websites</li>
            <li><strong>Internal links:</strong> Point to other pages on your site</li>
            <li><strong>Anchor links:</strong> Point to sections within the same page</li>
            <li><strong>Email links:</strong> Launch email client</li>
            <li><strong>Phone links:</strong> Trigger phone calls on mobile</li>
          </ul>
        `
      }
    ],
    examples: [
      {
        title: "Basic Links",
        code: `<!-- Link to another website -->
<a href="https://www.google.com">Visit Google</a>

<!-- Link to another page -->
<a href="about.html">About Us</a>

<!-- Link to email -->
<a href="mailto:hello@example.com">Send Email</a>

<!-- Link to phone -->
<a href="tel:123-456-7890">Call Us</a>`,
        explanation: "Different types of links you can create in HTML.",
        executable: true
      },
      {
        title: "Simple Navigation",
        code: `<nav>
    <ul>
        <li><a href="home.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="contact.html">Contact</a></li>
    </ul>
</nav>

<h2 id="section1">Section 1</h2>
<p>This is section 1.</p>

<a href="#section1">Go to Section 1</a>`,
        explanation: "A simple navigation menu and anchor links to sections on the same page.",
        executable: true
      }
    ],
    exercises: [
      {
        title: "Build a Navigation System",
        instructions: "Create a complete navigation system with external links, internal links, and anchor links to different sections.",
        starter: `<nav>
    <!-- Create a navigation menu -->
</nav>

<main>
    <!-- Create sections with IDs -->
    <!-- Add anchor links between sections -->
</main>`,
        solution: `<nav>
    <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="https://github.com" target="_blank" rel="noopener">GitHub</a></li>
    </ul>
</nav>

<main>
    <section id="home">
        <h2>Home</h2>
        <p>Welcome to our website!</p>
        <a href="#about">Learn more about us</a>
    </section>
    
    <section id="about">
        <h2>About</h2>
        <p>We are a web development company.</p>
        <a href="#services">See our services</a>
    </section>
    
    <section id="services">
        <h2>Services</h2>
        <p>We offer web development and design services.</p>
        <a href="mailto:contact@example.com">Contact us</a>
    </section>
</main>`
      }
    ]
  },
  {
    id: "images-media",
    title: "Images & Media Elements",
    difficulty: "beginner",
    duration: "35 min",
    completed: false,
    objectives: [
      "Learn to embed images effectively",
      "Understand image attributes and accessibility",
      "Work with different media types",
      "Master responsive image techniques"
    ],
    description: "Master the art of incorporating images and media into your web pages. Learn about image optimization, accessibility, and responsive design.",
    concepts: [
      {
        title: "The Image Element",
        content: `
          <p>The <strong>&lt;img&gt;</strong> element is used to embed images:</p>
          <ul>
            <li><strong>src attribute:</strong> Specifies the image source URL</li>
            <li><strong>alt attribute:</strong> Provides alternative text for accessibility</li>
            <li><strong>width/height:</strong> Control image dimensions</li>
            <li><strong>loading attribute:</strong> Controls when images load</li>
          </ul>
        `
      },
      {
        title: "Image Best Practices",
        content: `
          <ul>
            <li><strong>Always include alt text:</strong> Essential for screen readers</li>
            <li><strong>Use appropriate formats:</strong> JPEG for photos, PNG for graphics</li>
            <li><strong>Optimize file sizes:</strong> Balance quality and performance</li>
            <li><strong>Consider responsive images:</strong> Different sizes for different screens</li>
          </ul>
        `
      }
    ],
    examples: [
      {
        title: "Basic Images",
        code: `<img src="photo.jpg" alt="A beautiful sunset" width="400" height="300">

<img src="logo.png" alt="Company Logo" width="200" height="100">`,
        explanation: "Basic image tags with alt text for accessibility.",
        executable: true
      },
      {
        title: "Images with Captions",
        code: `<figure>
    <img src="mountain.jpg" alt="Snow-capped mountain peak" width="400" height="300">
    <figcaption>Beautiful mountain landscape</figcaption>
</figure>

<figure>
    <img src="ocean.jpg" alt="Blue ocean waves" width="400" height="300">
    <figcaption>Peaceful ocean view</figcaption>
</figure>`,
        explanation: "Using figure and figcaption for images with descriptions.",
        executable: true
      }
    ],
    exercises: [
      {
        title: "Create an Image Gallery",
        instructions: "Create a simple image gallery with different types of images, proper alt text, and responsive behavior.",
        starter: `<section class="gallery">
    <h2>Photo Gallery</h2>
    <!-- Add your images here -->
    <!-- Include proper alt text -->
    <!-- Make them responsive -->
</section>`,
        solution: `<section class="gallery">
    <h2>Photo Gallery</h2>
    
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px;">
        <figure>
            <img src="nature1.jpg" alt="Serene lake surrounded by pine trees" width="300" height="200" loading="lazy">
            <figcaption>Mountain Lake</figcaption>
        </figure>
        
        <figure>
            <img src="nature2.jpg" alt="Colorful sunset over ocean waves" width="300" height="200" loading="lazy">
            <figcaption>Ocean Sunset</figcaption>
        </figure>
        
        <figure>
            <img src="nature3.jpg" alt="Dense forest with sunlight filtering through leaves" width="300" height="200" loading="lazy">
            <figcaption>Forest Path</figcaption>
        </figure>
    </div>
</section>`
      }
    ]
  },
  {
    id: "lists-tables",
    title: "Lists & Tables",
    difficulty: "intermediate",
    duration: "40 min",
    completed: false,
    objectives: [
      "Master different types of lists",
      "Create accessible data tables",
      "Understand table structure and semantics",
      "Learn advanced table features"
    ],
    description: "Learn to organize content with lists and present tabular data effectively with HTML tables. Master the semantic structure for better accessibility.",
    concepts: [
      {
        title: "Types of Lists",
        content: `
          <p>HTML provides three main types of lists:</p>
          <ul>
            <li><strong>Unordered lists (&lt;ul&gt;):</strong> For items without specific order</li>
            <li><strong>Ordered lists (&lt;ol&gt;):</strong> For sequential or numbered items</li>
            <li><strong>Description lists (&lt;dl&gt;):</strong> For term-definition pairs</li>
          </ul>
        `
      },
      {
        title: "Table Structure",
        content: `
          <p>HTML tables have a semantic structure:</p>
          <ul>
            <li><strong>&lt;table&gt;:</strong> Container for the entire table</li>
            <li><strong>&lt;thead&gt;:</strong> Table header section</li>
            <li><strong>&lt;tbody&gt;:</strong> Table body content</li>
            <li><strong>&lt;tfoot&gt;:</strong> Table footer section</li>
            <li><strong>&lt;tr&gt;:</strong> Table row</li>
            <li><strong>&lt;th&gt;:</strong> Header cell</li>
            <li><strong>&lt;td&gt;:</strong> Data cell</li>
          </ul>
        `
      }
    ],
    examples: [
      {
        title: "Simple Lists",
        code: `<!-- Bullet list -->
<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
</ul>

<!-- Numbered list -->
<ol>
    <li>Learn HTML</li>
    <li>Learn CSS</li>
    <li>Learn JavaScript</li>
</ol>`,
        explanation: "Two basic types of lists: unordered (bullets) and ordered (numbers).",
        executable: true
      },
      {
        title: "Simple Table",
        code: `<table>
    <thead>
        <tr>
            <th>Language</th>
            <th>Difficulty</th>
            <th>Time to Learn</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>HTML</td>
            <td>Easy</td>
            <td>1 week</td>
        </tr>
        <tr>
            <td>CSS</td>
            <td>Easy</td>
            <td>2 weeks</td>
        </tr>
        <tr>
            <td>JavaScript</td>
            <td>Medium</td>
            <td>3 months</td>
        </tr>
    </tbody>
</table>`,
        explanation: "A simple table with headers and data rows.",
        executable: true
      }
    ],
    exercises: [
      {
        title: "Create a Course Comparison Table",
        instructions: "Build a table comparing different programming languages with their features, difficulty level, and use cases.",
        starter: `<table>
    <caption><!-- Add a caption --></caption>
    <thead>
        <!-- Add table headers -->
    </thead>
    <tbody>
        <!-- Add table data -->
    </tbody>
</table>`,
        solution: `<table>
    <caption>Programming Languages Comparison</caption>
    <thead>
        <tr>
            <th scope="col">Language</th>
            <th scope="col">Difficulty</th>
            <th scope="col">Primary Use</th>
            <th scope="col">Learning Time</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>HTML</td>
            <td>Beginner</td>
            <td>Web Structure</td>
            <td>1-2 weeks</td>
        </tr>
        <tr>
            <td>CSS</td>
            <td>Beginner</td>
            <td>Web Styling</td>
            <td>2-4 weeks</td>
        </tr>
        <tr>
            <td>JavaScript</td>
            <td>Intermediate</td>
            <td>Web Interactivity</td>
            <td>2-3 months</td>
        </tr>
        <tr>
            <td>Python</td>
            <td>Beginner</td>
            <td>General Programming</td>
            <td>1-2 months</td>
        </tr>
    </tbody>
</table>`
      }
    ]
  },
  {
    id: "forms-input",
    title: "Forms & Input Elements",
    difficulty: "intermediate",
    duration: "45 min",
    completed: false,
    objectives: [
      "Create functional HTML forms",
      "Master different input types",
      "Implement form validation",
      "Understand form accessibility"
    ],
    description: "Build interactive forms with various input types, validation, and accessibility features. Essential for user interaction and data collection.",
    concepts: [
      {
        title: "Form Structure",
        content: `
          <p>HTML forms collect user input:</p>
          <ul>
            <li><strong>&lt;form&gt;:</strong> Container for form elements</li>
            <li><strong>&lt;input&gt;:</strong> Various input types for data</li>
            <li><strong>&lt;label&gt;:</strong> Labels for form controls</li>
            <li><strong>&lt;textarea&gt;:</strong> Multi-line text input</li>
            <li><strong>&lt;select&gt;:</strong> Dropdown selection</li>
            <li><strong>&lt;button&gt;:</strong> Form submission and actions</li>
          </ul>
        `
      },
      {
        title: "Input Types",
        content: `
          <p>HTML5 provides many input types:</p>
          <ul>
            <li><strong>text, email, password:</strong> Text-based inputs</li>
            <li><strong>number, range:</strong> Numeric inputs</li>
            <li><strong>date, time:</strong> Date and time pickers</li>
            <li><strong>checkbox, radio:</strong> Option selections</li>
            <li><strong>file:</strong> File uploads</li>
            <li><strong>color:</strong> Color picker</li>
          </ul>
        `
      }
    ],
    examples: [
      {
        title: "Simple Contact Form",
        code: `<form>
    <div>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>
    </div>
    
    <div>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
    </div>
    
    <div>
        <label for="message">Message:</label>
        <textarea id="message" name="message" rows="3"></textarea>
    </div>
    
    <button type="submit">Send</button>
</form>`,
        explanation: "A simple contact form with text input, email input, and textarea.",
        executable: true
      },
      {
        title: "Different Input Types",
        code: `<form>
    <div>
        <label for="username">Username:</label>
        <input type="text" id="username" name="username">
    </div>
    
    <div>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password">
    </div>
    
    <div>
        <label for="age">Age:</label>
        <input type="number" id="age" name="age" min="18" max="100">
    </div>
    
    <div>
        <label for="birthday">Birthday:</label>
        <input type="date" id="birthday" name="birthday">
    </div>
    
    <div>
        <input type="checkbox" id="newsletter" name="newsletter">
        <label for="newsletter">Subscribe to newsletter</label>
    </div>
    
    <button type="submit">Submit</button>
</form>`,
        explanation: "Different input types for various kinds of data.",
        executable: true
      }
    ],
    exercises: [
      {
        title: "Build a Registration Form",
        instructions: "Create a user registration form with validation, including username, password, email, and preferences.",
        starter: `<form>
    <!-- Add form fields here -->
    <!-- Include proper labels and validation -->
    <!-- Group related fields with fieldsets -->
</form>`,
        solution: `<form action="/register" method="post">
    <fieldset>
        <legend>Account Details</legend>
        
        <div>
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required minlength="3" maxlength="20">
        </div>
        
        <div>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
        </div>
        
        <div>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required minlength="8">
        </div>
        
        <div>
            <label for="confirm">Confirm Password:</label>
            <input type="password" id="confirm" name="confirm" required>
        </div>
    </fieldset>
    
    <fieldset>
        <legend>Profile Information</legend>
        
        <div>
            <label for="country">Country:</label>
            <select id="country" name="country" required>
                <option value="">Choose a country</option>
                <option value="us">United States</option>
                <option value="uk">United Kingdom</option>
                <option value="ca">Canada</option>
                <option value="au">Australia</option>
            </select>
        </div>
        
        <div>
            <input type="checkbox" id="terms" name="terms" required>
            <label for="terms">I agree to the terms and conditions</label>
        </div>
        
        <div>
            <input type="checkbox" id="updates" name="updates">
            <label for="updates">Send me product updates</label>
        </div>
    </fieldset>
    
    <button type="submit">Create Account</button>
</form>`
      }
    ]
  },
  {
    id: "semantic-html",
    title: "Semantic HTML5 Elements",
    difficulty: "intermediate",
    duration: "35 min",
    completed: false,
    objectives: [
      "Understand semantic markup importance",
      "Master HTML5 semantic elements",
      "Create accessible page structures",
      "Improve SEO with semantic HTML"
    ],
    description: "Learn to use HTML5 semantic elements to create meaningful, accessible, and SEO-friendly web pages. Master the art of semantic markup.",
    concepts: [
      {
        title: "What is Semantic HTML?",
        content: `
          <p><strong>Semantic HTML</strong> uses elements that clearly describe their meaning in a human- and machine-readable way:</p>
          <ul>
            <li><strong>Accessibility:</strong> Screen readers understand content structure</li>
            <li><strong>SEO:</strong> Search engines better understand page content</li>
            <li><strong>Maintainability:</strong> Code is more readable and maintainable</li>
            <li><strong>Future-proof:</strong> Works better with new technologies</li>
          </ul>
        `
      },
      {
        title: "HTML5 Semantic Elements",
        content: `
          <ul>
            <li><strong>&lt;header&gt;:</strong> Page or section header</li>
            <li><strong>&lt;nav&gt;:</strong> Navigation links</li>
            <li><strong>&lt;main&gt;:</strong> Main content area</li>
            <li><strong>&lt;article&gt;:</strong> Standalone content</li>
            <li><strong>&lt;section&gt;:</strong> Thematic grouping of content</li>
            <li><strong>&lt;aside&gt;:</strong> Sidebar or tangential content</li>
            <li><strong>&lt;footer&gt;:</strong> Page or section footer</li>
            <li><strong>&lt;figure&gt;/&lt;figcaption&gt;:</strong> Images with captions</li>
          </ul>
        `
      }
    ],
    examples: [
      {
        title: "Simple Semantic Page",
        code: `<header>
    <h1>My Website</h1>
    <nav>
        <ul>
            <li><a href="home.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="contact.html">Contact</a></li>
        </ul>
    </nav>
</header>

<main>
    <article>
        <h2>My Blog Post</h2>
        <p>This is my first blog post about HTML.</p>
    </article>
</main>

<footer>
    <p>&copy; 2024 My Website</p>
</footer>`,
        explanation: "A simple page structure using semantic HTML5 elements.",
        executable: true
      },
      {
        title: "Article with Sections",
        code: `<article>
    <header>
        <h2>Learning HTML</h2>
        <p>Published on January 20, 2024</p>
    </header>
    
    <section>
        <h3>What is HTML?</h3>
        <p>HTML is the language used to create websites.</p>
    </section>
    
    <section>
        <h3>Why Learn HTML?</h3>
        <p>HTML is the foundation of all websites.</p>
    </section>
    
    <footer>
        <p>Tags: HTML, Beginner</p>
    </footer>
</article>`,
        explanation: "An article with proper semantic structure and sections.",
        executable: true
      }
    ],
    exercises: [
      {
        title: "Create a Semantic Blog Layout",
        instructions: "Build a complete blog page layout using semantic HTML5 elements. Include header, navigation, main content, sidebar, and footer.",
        starter: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My Blog</title>
</head>
<body>
    <!-- Create semantic structure here -->
</body>
</html>`,
        solution: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Development Blog</title>
</head>
<body>
    <header>
        <h1>Dev Insights</h1>
        <p>A blog about web development and technology</p>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#tutorials">Tutorials</a></li>
                <li><a href="#reviews">Reviews</a></li>
                <li><a href="#about">About</a></li>
            </ul>
        </nav>
    </header>
    
    <main>
        <article>
            <header>
                <h2>Getting Started with HTML5</h2>
                <p>Published by <strong>Alex Coder</strong> on 
                <time datetime="2024-01-25">January 25, 2024</time></p>
            </header>
            
            <section>
                <h3>What You'll Learn</h3>
                <p>This comprehensive guide covers HTML5 fundamentals...</p>
            </section>
            
            <section>
                <h3>Prerequisites</h3>
                <ul>
                    <li>Basic computer skills</li>
                    <li>Text editor</li>
                    <li>Web browser</li>
                </ul>
            </section>
            
            <footer>
                <p>Tags: <a href="#html">HTML</a>, <a href="#beginner">Beginner</a></p>
            </footer>
        </article>
    </main>
    
    <aside>
        <section>
            <h3>Recent Posts</h3>
            <ul>
                <li><a href="#css-grid">Mastering CSS Grid</a></li>
                <li><a href="#js-async">Async JavaScript</a></li>
            </ul>
        </section>
        
        <section>
            <h3>Categories</h3>
            <ul>
                <li><a href="#html">HTML (15)</a></li>
                <li><a href="#css">CSS (12)</a></li>
                <li><a href="#js">JavaScript (8)</a></li>
            </ul>
        </section>
    </aside>
    
    <footer>
        <p>&copy; 2024 Dev Insights. Built with semantic HTML.</p>
        <address>
            Contact: <a href="mailto:hello@devinsights.com">hello@devinsights.com</a>
        </address>
    </footer>
</body>
</html>`
      }
    ]
  },
  {
    id: "advanced-features",
    title: "Advanced HTML5 Features",
    difficulty: "advanced",
    duration: "50 min",
    completed: false,
    objectives: [
      "Explore HTML5 APIs and features",
      "Implement multimedia elements",
      "Use advanced form features",
      "Master accessibility techniques"
    ],
    description: "Dive into advanced HTML5 features including multimedia, APIs, advanced form controls, and accessibility best practices for modern web development.",
    concepts: [
      {
        title: "HTML5 Multimedia",
        content: `
          <p>HTML5 provides native multimedia support:</p>
          <ul>
            <li><strong>&lt;video&gt;:</strong> Embed video content</li>
            <li><strong>&lt;audio&gt;:</strong> Embed audio content</li>
            <li><strong>&lt;canvas&gt;:</strong> Draw graphics with JavaScript</li>
            <li><strong>&lt;svg&gt;:</strong> Scalable vector graphics</li>
          </ul>
        `
      },
      {
        title: "Advanced Form Features",
        content: `
          <p>HTML5 enhanced form capabilities:</p>
          <ul>
            <li><strong>Built-in validation:</strong> Client-side validation attributes</li>
            <li><strong>New input types:</strong> Better user experience</li>
            <li><strong>Form attributes:</strong> Better form control</li>
            <li><strong>Custom validation:</strong> JavaScript API integration</li>
          </ul>
        `
      }
    ],
    examples: [
      {
        title: "Simple Multimedia",
        code: `<!-- Video -->
<video controls width="400" height="300">
    <source src="video.mp4" type="video/mp4">
    <p>Your browser doesn't support video.</p>
</video>

<!-- Audio -->
<audio controls>
    <source src="audio.mp3" type="audio/mpeg">
    <p>Your browser doesn't support audio.</p>
</audio>

<!-- Simple SVG -->
<svg width="100" height="100">
    <circle cx="50" cy="50" r="40" fill="blue" />
</svg>`,
        explanation: "Basic multimedia elements: video, audio, and simple SVG graphics.",
        executable: true
      },
      {
        title: "Simple Form Validation",
        code: `<form>
    <div>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
    </div>
    
    <div>
        <label for="website">Website:</label>
        <input type="url" id="website" name="website" placeholder="https://example.com">
    </div>
    
    <div>
        <label for="phone">Phone:</label>
        <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890">
    </div>
    
    <div>
        <label for="age">Age:</label>
        <input type="number" id="age" name="age" min="18" max="100">
    </div>
    
    <button type="submit">Submit</button>
</form>`,
        explanation: "Form with built-in HTML5 validation using input types and attributes.",
        executable: true
      }
    ],
    exercises: [
      {
        title: "Build a Multimedia Portfolio",
        instructions: "Create a portfolio page showcasing multimedia content with video, audio, canvas graphics, and an interactive contact form.",
        starter: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Multimedia Portfolio</title>
</head>
<body>
    <!-- Create a multimedia showcase -->
    <!-- Include video, audio, canvas, and forms -->
</body>
</html>`,
        solution: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Creative Portfolio - John Designer</title>
</head>
<body>
    <header>
        <h1>John Designer</h1>
        <p>Creative Developer & Multimedia Artist</p>
    </header>
    
    <main>
        <section>
            <h2>Video Showcase</h2>
            <video controls width="100%" max-width="800">
                <source src="portfolio-reel.mp4" type="video/mp4">
                <source src="portfolio-reel.webm" type="video/webm">
                <p>Your browser doesn't support video playback.</p>
            </video>
        </section>
        
        <section>
            <h2>Audio Projects</h2>
            <article>
                <h3>Website Soundtrack</h3>
                <audio controls preload="metadata">
                    <source src="soundtrack.mp3" type="audio/mpeg">
                    <source src="soundtrack.ogg" type="audio/ogg">
                    <p>Your browser doesn't support audio playback.</p>
                </audio>
            </article>
        </section>
        
        <section>
            <h2>Interactive Graphics</h2>
            <canvas id="artCanvas" width="600" height="300" style="border: 1px solid #ccc;">
                Your browser doesn't support canvas.
            </canvas>
            <p>Click and drag to draw!</p>
        </section>
        
        <section>
            <h2>Contact Me</h2>
            <form>
                <div>
                    <label for="client-name">Your Name:</label>
                    <input type="text" id="client-name" name="name" required>
                </div>
                
                <div>
                    <label for="client-email">Email:</label>
                    <input type="email" id="client-email" name="email" required>
                </div>
                
                <div>
                    <label for="project-type">Project Type:</label>
                    <select id="project-type" name="project-type" required>
                        <option value="">Choose a service</option>
                        <option value="web-design">Web Design</option>
                        <option value="video-editing">Video Editing</option>
                        <option value="audio-production">Audio Production</option>
                        <option value="animation">Animation</option>
                    </select>
                </div>
                
                <div>
                    <label for="budget">Budget Range:</label>
                    <input type="range" id="budget" name="budget" 
                           min="1000" max="10000" step="500" value="5000">
                    <output for="budget">$5000</output>
                </div>
                
                <div>
                    <label for="timeline">Project Timeline:</label>
                    <input type="date" id="timeline" name="timeline" 
                           min="2024-01-01" required>
                </div>
                
                <div>
                    <label for="message">Project Details:</label>
                    <textarea id="message" name="message" 
                              rows="4" placeholder="Tell me about your project..."
                              required></textarea>
                </div>
                
                <button type="submit">Send Proposal Request</button>
            </form>
        </section>
    </main>
    
    <footer>
        <p>&copy; 2024 John Designer. All rights reserved.</p>
    </footer>
    
    <script>
    // Simple canvas drawing
    const canvas = document.getElementById('artCanvas');
    const ctx = canvas.getContext('2d');
    let isDrawing = false;
    
    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    
    function startDrawing(e) {
        isDrawing = true;
        draw(e);
    }
    
    function draw(e) {
        if (!isDrawing) return;
        
        ctx.lineWidth = 3;
        ctx.lineCap = 'round';
        ctx.strokeStyle = '#3b82f6';
        
        ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    }
    
    function stopDrawing() {
        if (!isDrawing) return;
        isDrawing = false;
        ctx.beginPath();
    }
    
    // Budget range output
    const budgetRange = document.getElementById('budget');
    const budgetOutput = document.querySelector('output[for="budget"]');
    
    budgetRange.addEventListener('input', function() {
        budgetOutput.textContent = '$' + this.value;
    });
    </script>
</body>
</html>`
      }
    ]
  }
];

export const getLessonById = (id: string): LessonContent | undefined => {
  return lessons.find(lesson => lesson.id === id);
};

export const getNextLessonId = (currentId: string): string | null => {
  const currentIndex = lessons.findIndex(lesson => lesson.id === currentId);
  if (currentIndex === -1 || currentIndex === lessons.length - 1) {
    return null;
  }
  return lessons[currentIndex + 1].id;
};