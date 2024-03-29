import { IQuestions } from '../../types/types';
import styles from '../../App.module.scss';

export const frontendQuestions: IQuestions[] = [
  {
    rating: null,
    subject: 'frontend',
    topic: 'Basic Frontend',
    level: 0,
    question: 'What is HTML?',
    answer: 
      <>
        <p>HTML, or HyperText Markup Language, is the standard markup language used in web development. It provides the structure for creating and organizing content on the web. HTML uses tags to define elements such as headings, paragraphs, images, and links. These elements form the backbone of web pages, allowing browsers to interpret and display content appropriately. HTML serves as the foundation for building the structure and layout of websites, enabling developers to create cohesive and visually appealing online experiences.</p>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Basic Frontend',
    level: 0,
    question: 'What is CSS?',
    answer: 
      <>  
        <p>CSS, or Cascading Style Sheets, is a style sheet language used for describing the presentation of a document written in HTML. CSS describes how elements should be rendered on screen, on paper, in speech, or on other media. It can control the layout of multiple web pages all at once. CSS is used to define styles for your web pages, including the design, layout and variations in display for different devices and screen sizes.</p>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Basic Frontend',
    level: 0,
    question: 'What is the role of JavaScript in web development?',
    answer: 
      <>
        <p>JavaScript is a programming language that enables interactive and dynamic content on web pages. It is used to create responsive, interactive elements such as forms, buttons, and navigation menus. JavaScript can also be used to manipulate and update the content of a web page in real time, without needing to reload the entire page. This makes it an essential tool for creating engaging and user-friendly web experiences.</p>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Basic Frontend',
    level: 0,
    question: 'How do HTML, CSS, and JavaScript work together in a website?',
    answer: 
      <>
        <p>HTML, CSS, and JavaScript work together to create a cohesive and interactive web experience:</p>
        <ul>
          <li><strong>HTML:</strong> provides the structure and content of a web page</li>
          <li><strong>CSS:</strong> defines the visual presentation and layout</li>
          <li><strong>JavaScript:</strong> adds interactivity and dynamic behavior</li>
        </ul>
        <p>By combining these three technologies, developers can create visually appealing, responsive, and engaging web pages that provide a seamless user experience.</p>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Basic Frontend',
    level: 0,
    question: 'What are HTML tags and what are some examples?',
    answer: 
      <>
        <p>HTML tags are used to define the structure and content of a web page. They are enclosed in angle brackets and typically come in pairs, with an opening tag and a closing tag. Some examples of HTML tags include:</p>
        <ul>
          <li>&lt;h1&gt; - &lt;/h1&gt;: Defines a top-level heading</li>
          <li>&lt;p&gt; - &lt;/p&gt;: Defines a paragraph</li>
          <li>&lt;img&gt;: Defines an image</li>
          <li>&lt;a&gt; - &lt;/a&gt;: Defines a hyperlink</li>
          <li>&lt;div&gt; - &lt;/div&gt;: Defines a division or section of a web page</li>
        </ul>
        <p>These tags, along with many others, allow developers to structure and organize content on a web page, making it easier for browsers to interpret and display the information.</p>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Basic Frontend',
    level: 0,
    question: 'What is the role of the Document Object Model (DOM) in web development?',
    answer: 
      <>
        <p>The Document Object Model (DOM) is a programming interface for web documents. It represents the structure of a web page as a tree of objects, allowing developers to manipulate and interact with the content and structure of a web page using JavaScript. The DOM provides a way for scripts to access and update the content, structure, and style of a web page, enabling dynamic and interactive web experiences.</p>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Basic Frontend',
    level: 0,
    question: 'Explain the concept of responsiveness in web design.',
    answer: 
      <>
        <p>Responsiveness in web design refers to the ability of a website to adapt and display appropriately on various devices and screen sizes. A responsive website will adjust its layout, content, and design to provide an optimal viewing experience for users, regardless of the device they are using. This ensures that the website is accessible and user-friendly on desktops, laptops, tablets, and smartphones, enhancing the overall user experience and engagement.</p>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Basic Frontend',
    level: 0,
    question: 'How do you integrate a CSS file into an HTML document?',
    answer: 
      <>
        <p>To integrate a CSS file into an HTML document, you can use the &lt;link&gt; tag in the &lt;head&gt; section of the HTML document. The &lt;link&gt; tag specifies the relationship between the HTML document and an external resource, such as a CSS file. By using the &lt;link&gt; tag, you can link the CSS file to the HTML document, allowing the styles defined in the CSS file to be applied to the content of the web page.  For example:</p>
        <pre><div className={styles.appCode} >
          {`<head>
  <link rel="stylesheet" type="text/css" href="styles.css">
</head>`}
        </div></pre>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Basic Frontend',
    level: 0,
    question: 'What are CSS selectors and what are some examples?',
    answer: 
      <>
        <p>CSS selectors are patterns used to select and style elements in an HTML document. They allow developers to target specific elements or groups of elements and apply styles to them. Some examples of CSS selectors include:</p>
        <ul>
          <li><strong>Universal selector:</strong> Selects all elements on the page, such as * for all elements</li>
          <li><strong>Type (or Element) selector:</strong>  Selects all elements of a specific type, such as {`<p>`} for paragraphs</li>
          <li><strong>Class selector:</strong> Selects elements with a specific class attribute, such as .highlight for elements with the class "highlight"</li>
          <li><strong>ID selector:</strong> Selects an element with a specific ID attribute, such as #header for an element with the ID "header"</li>
          <li><strong>Descendant selector:</strong> Selects elements that are descendants of another element, such as .container p for paragraphs within an element with the class "container"</li>
          <li><strong>Child selector:</strong> Selects an element that is a direct child of another specified element. </li>
          <li><strong>Adjacent sibling selector:</strong> Selects an element that is immediately preceded by a specified sibling element.</li>
          <li><strong>Attribute selector:</strong> Selects elements based on their attributes, such as [type="text"] for input elements with the type "text"</li>
          <li><strong>Pseudo-class selector:</strong> Selects elements based on their state or position, such as :hover for elements being hovered over by the mouse</li>
          <li><strong>Pseudo-element selector:</strong> Selects a specific part of an element, such as ::before for the content before an element</li>
        </ul>
        <p>These selectors, along with others, provide a way to target and style elements in an HTML document, allowing developers to create visually appealing and well-organized web pages.</p>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Basic Frontend',
    level: 0,
    question: 'Describe the difference between an ID and a class in CSS.',
    answer: 
      <>
        <table>
          <thead>
              <th>ID</th>
              <th>Class</th>
          </thead>
          <tbody>
            <tr>
              <td>Unique identifier</td>
              <td>Reusable identifier</td>
            </tr>
            <tr>
              <td>Should only be used once per page</td>
              <td>Can be used multiple times per page</td>
            </tr>
            <tr>
              <td>Defined using the # symbol</td>
              <td>Defined using the . symbol</td>
            </tr>
            <tr>
              <td>Used for unique styling or functionality</td>
              <td>Used for shared styles or behavior</td>
            </tr>
          </tbody>
        </table>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Basic Frontend',
    level: 0,
    question: 'What are some common HTML5 tags?',
    answer: 
      <>
        <p>HTML5 introduced several new tags that provide more semantic meaning and structure to web pages. Some common HTML5 tags include:</p>
        <ul>
          <li>&lt;header&gt;: Defines a header for a document or section</li>
          <li>&lt;nav&gt;: Defines a set of navigation links</li>
          <li>&lt;section&gt;: Defines a section in a document</li>
          <li>&lt;article&gt;: Defines an independent, self-contained piece of content</li>
          <li>&lt;aside&gt;: Defines content aside from the content it is placed in</li>
          <li>&lt;footer&gt;: Defines a footer for a document or section</li>
          <li>&lt;main&gt;: Defines the main content of a document</li>
          <li>&lt;figure&gt;: Defines self-contained content, such as images or diagrams</li>
          <li>&lt;figcaption&gt;: Defines a caption for a &lt;figure&gt; element</li>
          <li>&lt;time&gt;: Defines a specific time or date</li>
          <li>&lt;mark&gt;: Defines marked or highlighted text</li>
          <li>&lt;progress&gt;: Defines the progress of a task</li>
          <li>&lt;meter&gt;: Defines a scalar measurement within a known range</li>
          <li>&lt;details&gt;: Defines additional details that the user can view or hide</li>
          <li>&lt;summary&gt;: Defines a visible heading for a &lt;details&gt; element</li>
        </ul>
        <p>These tags provide more semantic meaning and structure to web pages, making it easier for developers to create accessible and well-organized content.</p>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Basic Frontend',
    level: 0,
    question: 'What is HTML5 and how is it different from previous versions of HTML? (3)',
    answer: 
      <>
        <p>HTML5 is the latest version of the HTML standard, introducing new features and improvements to the language.</p>
        <ul>
          <li><strong>Semantic:</strong> Provides more semantic meaning and structure to web pages, making it easier for developers to create accessible and well-organized content.</li>
          <li><strong>New Elements/Attributes:</strong> Includes new elements and attributes for multimedia, graphics, and interactive content, allowing developers to create richer and more engaging web experiences.</li>
          <li><strong>New APIs:</strong> Introduces new APIs for handling audio, video, and other media, as well as support for offline web applications and responsive design.</li>
          <li></li>
        </ul>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Basic Frontend',
    level: 0,
    question: 'What are JavaScript frameworks and what do they do?',
    answer: 
      <>
        <p>JavaScript frameworks are pre-written, standardized code that provides a foundation for building web applications. They offer a collection of pre-written JavaScript code that helps developers to build web applications without having to write everything from scratch. JavaScript frameworks provide a structure for developers to build web applications, making it easier to manage and organize code. They also offer a set of tools and libraries that help developers to build interactive and dynamic web applications more efficiently. Some popular JavaScript frameworks include React, Angular, and Vue.js.</p>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Basic Frontend',
    level: 0,
    question: 'How do you handle browser compatibility in frontend development?',
    answer: 
      <>
        <p>Browser compatibility refers to the ability of a website or web application to function and display correctly across different web browsers. To handle browser compatibility in frontend development, developers can use a combination of techniques, such as:</p>
        <ul>
          <li>Using feature detection to identify browser capabilities and adjust behavior accordingly</li>
          <li>Using polyfills to provide missing functionality in older browsers</li>
          <li>Testing and debugging web pages in multiple browsers to identify and fix compatibility issues</li>
          <li>Using vendor prefixes for CSS properties to ensure consistent rendering across browsers</li>
          <li>Following web standards and best practices to ensure compatibility with modern browsers</li>
        </ul>
        <p>By using these techniques, developers can create web pages and applications that work consistently across different browsers, providing a seamless user experience for all users.</p>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Basic Frontend',
    level: 0,
    question: 'What is Bootstrap, and why is it used in frontend development?',
    answer: 
      <>
        <p>Bootstrap is a popular front-end framework for building responsive and mobile-first web projects. By using Bootstrap, developers can save time and effort in building web projects, as it provides a solid foundation for creating modern and responsive web designs.</p>
        <ul>
          <li>Provides a collection of pre-written HTML, CSS, and JavaScript code that developers can use to create responsive, mobile-friendly web pages and applications.</li>
          <li>Offers a set of customizable components and styles that help developers to build consistent and visually appealing user interfaces.</li>
          <li>Includes a responsive grid system, CSS classes for typography and forms, and JavaScript plugins for creating interactive components.</li>
        </ul>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Basic Frontend',
    level: 0,
    question: 'What is mobile first design and why is it important in frontend development?',
    answer: 
      <>
        <p>Mobile-first design is an approach to web design and development that prioritizes designing for mobile devices before desktops or other devices. It involves creating a user experience that is optimized for mobile devices, such as smartphones and tablets, and then scaling up to larger devices. Mobile-first design is important in frontend development because:</p>
        <ul>
          <li>It ensures that web pages and applications are accessible and user-friendly on mobile devices, which are increasingly the primary way that users access the internet.</li>
          <li>It encourages a focus on essential content and functionality, leading to simpler and more efficient designs.</li>
          <li>It promotes a responsive and flexible design approach that adapts to different screen sizes and devices, providing a consistent user experience across all platforms.</li>
          <li>It aligns with modern web development best practices and standards, such as performance optimization and accessibility.</li>
        </ul>
        <p>By adopting a mobile-first design approach, developers can create web projects that are accessible, user-friendly, and visually appealing across a wide range of devices and screen sizes.</p>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Intermediate Frontend',
    level: 1,
    question: 'How do you optimize images for web use?',
    answer: 
      <>
        <p>Optimizing images for web use involves reducing their file size while maintaining acceptable visual quality. This can be achieved through various techniques, such as:</p>
        <ul>
          <li>Using the correct file format, such as JPEG for photographs and PNG for graphics with transparency</li>
          <li>Resizing images to the appropriate dimensions for their display on the web page</li>
          <li>Employ compression techniques like lossless and lossy compression to reduce file size without compromising quality.</li>
          <li>Utilize responsive images with the "srcset" attribute for various screen resolutions. </li>
          <li>Using lazy loading to defer the loading of images until they are needed, reducing initial page load times</li>
          <li>Using image sprites to combine multiple images into a single file, reducing the number of server requests</li>
          <li>Leverage modern image formats such as WebP for improved compression.</li>
          <li>Minify images using tools like ImageOptim to remove unnecessary metadata. </li>
        </ul>
        <p>By optimizing images for web use, developers can improve the performance and user experience of web pages, reducing load times and bandwidth usage while maintaining high-quality visuals.</p>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Intermediate Frontend',
    level: 1,
    question: 'What is a Content Delivery Network (CDN), and how does it work?',
    answer: 
      <>
        <p>A Content Delivery Network (CDN) is a network of distributed servers that deliver web content to users based on their geographic location. It works by caching static assets, such as images, stylesheets, and JavaScript files, on servers located in various data centers around the world. When a user requests a web page, the CDN delivers the cached content from the server closest to the user, reducing latency and improving load times. CDNs also help to distribute the load on the origin server, reducing the risk of downtime and improving the overall performance and reliability of web applications.</p>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Intermediate Frontend',
    level: 1,
    question: 'What is flexbox, and how is it used in CSS?',
    answer: 
      <>
        <p>Flexbox is a layout model in CSS that allows developers to create flexible and responsive layouts. It provides a way to distribute space and align content within a container, enabling developers to create complex and dynamic layouts with ease. Flexbox uses a set of properties and values to control the alignment, direction, order, and size of elements within a container, allowing for more efficient and intuitive layout design. Flexbox is particularly useful for creating responsive designs and managing the arrangement of elements across different screen sizes and devices.</p>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Intermediate Frontend',
    level: 1,
    question: 'What are media queries, and how are they used in responsive web design?',
    answer: 
      <>
        <p>Media queries are a feature in CSS that allows developers to apply different styles based on the characteristics of the device or browser displaying the web page. They are used to create responsive web designs that adapt to different screen sizes, resolutions, and device capabilities. Media queries use the @media rule to specify different styles for different conditions, such as screen width, orientation, and device type. By using media queries, developers can create web pages that provide an optimal viewing experience across a wide range of devices and screen sizes, improving accessibility and user engagement. For example: </p>
        <pre><div className={styles.appCode} >
          {`@media screen and (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}`}
        </div></pre>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Basic Frontend',
    level: 0,
    question: 'What is Ajax, and how is it used in web development?',
    answer: 
      <>
        <p>Ajax, or Asynchronous JavaScript and XML, is a set of web development techniques used to create asynchronous web applications. It allows web pages to update content dynamically without needing to reload the entire page. Ajax uses a combination of technologies, including HTML, CSS, JavaScript, and XML or JSON, to send and receive data from a web server without interfering with the user's interaction with the page. This enables developers to create responsive and interactive web applications that provide a seamless user experience, improving performance and usability.  For example:</p>
        <pre><div className={styles.appCode} >
          {`var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    document.getElementById("demo").innerHTML = this.responseText;
  }
}        `}</div></pre>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Intermediate Frontend',
    level: 1,
    question: 'What are Web APIs and how are they used in frontend development?',
    answer: 
      <>
        <p>Web APIs, or Application Programming Interfaces, are a set of rules and protocols that allow different software applications to communicate with each other. </p>
        <p>In frontend development, developers can use Web APIs to access and integrate external services and data into their web applications. This can include APIs for accessing data from social media platforms, weather services, mapping services, and more. By using Web APIs, developers can create web applications that provide a wide range of functionality and features, such as user authentication, data retrieval, and content sharing. Web APIs are typically accessed using HTTP requests, and the data is often returned in JSON or XML format, which can be parsed and used within the web application.</p>
        <p>Things to consider when using Web APIs:</p>
        <ul>
          <li>Asynchronous nature of API requests ensures non-blocking execution, enabling a smooth user experience.</li>
          <li>Error handling is crucial, which is done through promise rejections or try-catch blocks to manage issues like network problems or incorrect responses.</li>
          <li>Cross-Origin Resource Sharing (CORS) may need consideration for security, allowing or restricting access based on the client's origin.</li>
        </ul>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Basic Frontend',
    level: 0,
    question: 'What is the difference between GET and POST methods in HTML forms?',
    answer: 
      <>
        <p>The GET and POST methods are two of the most common HTTP methods used to submit form data in HTML. The main differences between the two methods are:</p>
        <table>
          <thead>
            <th>GET</th>
            <th>POST</th>
          </thead>
          <tbody>
            <tr>
              <td>Submits form data as part of the URL</td>
              <td>Submits form data in the body of the HTTP request</td>
            </tr>
            <tr>
              <td>Visible in the address bar</td>
              <td>Not visible in the address bar</td>
            </tr>
            <tr>
              <td>Used for sending small amounts of data, such as search queries, and is limited by the maximum length of a URL</td>
              <td>Used for sending large amounts of data, such as file uploads or form submissions</td>
            </tr>
            <tr>
              <td>Not secure for sensitive information, as the data is visible in the URL</td>
              <td>More secure for sensitive information, as the data is not visible in the URL</td>
            </tr>
          </tbody>
        </table>
        <p>Both methods are used to send form data to a server for processing, but they differ in how the data is transmitted and the types of data they are best suited for.</p>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Basic Frontend',
    level: 0,
    question: 'What is semantic HTML?',
    answer: 
      <>
        <p>Semantic HTML refers to the use of HTML elements to convey meaning and structure, rather than just presentation. It involves using elements that provide context and describe the content of a web page, making it more accessible and understandable for both humans and machines. Semantic HTML elements include headings, paragraphs, lists, and other elements that provide meaning and structure to the content. By using semantic HTML, developers can create web pages that are well-organized, accessible, and search engine friendly, improving the overall quality and usability of the content.</p>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Intermediate Frontend',
    level: 1,
    question: 'What is jQuery, and how is it used in web development?',
    answer: 
      <>
        <p>jQuery is a fast, small, and feature-rich JavaScript library:</p>
        <ul>
          <li>Used to simplify common tasks in web development, such as event handling, DOM manipulation, and AJAX requests.</li>
          <li>Provides a set of methods and utilities that make it easier to write JavaScript code, reducing the amount of code needed to achieve common tasks.</li>
          <li>Particularly useful for creating interactive and dynamic web pages, as it provides a wide range of plugins and extensions for adding functionality and interactivity to web applications.</li>
        </ul>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Intermediate Frontend',
    level: 1,
    question: 'Describe the concept of grid layout in CSS.',
    answer: 
      <>
        <p>Grid layout is a layout model in CSS that allows developers to create complex and responsive grid-based layouts. It provides a way to define columns and rows in a web page, allowing for precise control over the placement and alignment of elements. Grid layout uses a set of properties and values to define the structure and behavior of the grid, enabling developers to create flexible and dynamic layouts that adapt to different screen sizes and devices. Grid layout is particularly useful for creating multi-column designs, as well as complex and visually appealing web layouts.</p>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Basic Frontend',
    level: 0,
    question: 'What is a Single Page Application (SPA)?',
    answer: 
      <>
        <p>A Single Page Application (SPA) is a web application that loads a single HTML page and dynamically updates the content as the user interacts with the application. SPAs use AJAX and HTML5 to create fluid and responsive user experiences, allowing for seamless navigation and interaction without needing to reload the entire page. SPAs are typically built using JavaScript frameworks such as React, Angular, or Vue.js, and they are well-suited for creating interactive and dynamic web applications that provide a more app-like experience for users.</p>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Intermediate Frontend',
    level: 1,
    question: 'How do you validate form input in HTML?',
    answer: 
      <>
        <ul>
          <li><strong>Required Attribute:</strong> Form input validation in HTML can be achieved using the "required" attribute and various input types. The "required" attribute is used to specify that an input field must be filled out before submitting the form.</li>
          <li><strong>New Input Types:</strong> HTML5 introduced new input types, such as "email", "url", "number", and "date", which provide built-in validation for specific types of input. </li>
          <li><strong>JavaScript:</strong> Developers can also use JavaScript to create custom validation logic, such as checking for specific patterns or lengths in user input.</li>
          <li><strong>Server-Side Validation:</strong> Server-side validation is crucial for robust security, preventing malicious data submission.</li>
        </ul>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Intermediate Frontend',
    level: 1,
    question: 'What are vector graphics, and how are they used in web design?',
    answer: 
      <>
        <p>Vector graphics are digital images created using mathematical formulas, rather than individual pixels. They are used in web design to create scalable and resolution-independent graphics, such as logos, icons, and illustrations. Vector graphics are particularly useful for web design, as they can be scaled to any size without losing quality, making them ideal for responsive and high-resolution displays. They are typically created using software such as Adobe Illustrator or Inkscape, and they are often saved in formats such as SVG (Scalable Vector Graphics) for use in web design.</p>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Intermediate Frontend',
    level: 1,
    question: 'Explain the use of icons and icon fonts in web design.',
    answer: 
      <>
        <p>Icons are small, visual representations of objects, actions, or concepts, used to enhance the user interface and user experience of a web page. They are used to convey information quickly and effectively, and they are often used to represent common actions, such as navigation, search, and social media links.</p>
        <p>Icon fonts are a collection of scalable vector icons that can be customized using CSS, making them easy to use and style in web design. They are typically used to provide a consistent and visually appealing set of icons that can be easily integrated into web pages, improving the overall design and usability of the content.</p>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Intermediate Frontend',
    level: 1,
    question: 'What is minification in frontend development?',
    answer: 
      <>
        <p>Minification is the process of removing unnecessary characters from code, such as white space, new lines, and comments, to reduce file size and improve load times. It is commonly used in frontend development to optimize CSS, JavaScript, and HTML files, making them smaller and more efficient for delivery to the client. Minification can be achieved using tools and build processes that automatically remove unnecessary characters from code, improving performance and reducing bandwidth usage for web applications.</p>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Basic Frontend',
    level: 0,
    question: 'What is accessibility and what are some methods to improve it in web design?',
    answer: 
      <>
        <p>Accessibility in web design refers to the practice of creating web pages and applications that are usable and accessible to all users, including those with disabilities. Some methods to improve accessibility in web design include:</p>
        <ul>
          <li>Using semantic HTML to provide structure and meaning to content</li>
          <li>Providing alternative text for images and other non-text content</li>
          <li>Ensuring proper color contrast for text and background elements</li>
          <li>Using ARIA roles and attributes to enhance the accessibility of interactive elements</li>
          <li>Implementing keyboard navigation and focus management for interactive elements</li>
          <li>Providing captions and transcripts for audio and video content</li>
          <li>Testing web pages with screen readers and other assistive technologies to identify and fix accessibility issues</li>
        </ul>
        <p>By following these methods, developers can create web pages and applications that are accessible to all users, improving usability and inclusivity for everyone.</p>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Intermediate Frontend',
    level: 1,
    question: 'Describe the use of animation in web design.',
    answer: 
      <>
        <p>Animation is used in web design to create visually engaging and interactive user experiences. It can be used to draw attention to specific elements, provide feedback to user actions, and enhance the overall design and usability of web pages. </p>
        <p>Animation can be achieved using CSS, JavaScript, and various libraries and frameworks, and it can be used to create effects such as transitions, transformations, and keyframe animations. Animation is particularly useful for creating dynamic and engaging web applications, as it can provide a more app-like experience for users, improving engagement and usability.</p>
        <p>Note: It is important to strike a balance, as excessive or unnecessary animations lead to distraction and negatively impact UI performance.</p>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Basic Frontend',
    level: 0,
    question: 'What is the purpose of a wireframe in web design?',
    answer: 
      <>
        <p>A wireframe is a visual representation of the layout and structure of a web page or application. It provides a basic outline of the content, functionality, and user interface elements, allowing designers and developers to plan and organize the design of a web project.</p>
        <p>Wireframes are used to define the hierarchy and placement of elements, such as navigation menus, content areas, and interactive components, providing a blueprint for the final design. They are particularly useful for communicating design ideas and concepts, as well as for gathering feedback and making revisions before moving on to the visual design phase of a project.</p>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Basic Frontend',
    level: 0,
    question: 'What is version control and how is it used in web development?',
    answer: 
      <>
        <p>Version control is a system that records changes to a file or set of files over time, allowing developers to track and manage different versions of a project. It is used in web development to manage and coordinate changes to web projects, enabling collaboration and ensuring that changes can be tracked, reviewed, and reverted if necessary. Version control systems, such as Git, provide a way to manage and organize code, track changes, and collaborate with other developers, improving the overall quality and reliability of web applications.</p>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Basic Frontend',
    level: 0,
    question: 'What is the role of testing in frontend development?',
    answer: 
      <>
        <p>Testing is an essential part of frontend development, as it ensures that web pages and applications are functional, reliable, and user-friendly. Testing involves a variety of techniques, such as unit testing, integration testing, and end-to-end testing, to identify and fix issues in web projects. It helps to ensure that web applications work as expected, provide a consistent user experience, and are accessible and usable for all users. Testing also helps to identify and fix performance issues, security vulnerabilities, and compatibility problems, improving the overall quality and reliability of web applications.</p>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Basic Frontend',
    level: 0,
    question: 'What is Test Driven Development (TDD) and how is it used in frontend development?',
    answer: 
      <>
        <p>Test Driven Development (TDD) is a software development process that emphasizes writing tests before writing the code that is being tested. In frontend development, TDD is used to create reliable and maintainable web applications by writing tests that define the expected behavior of the code, and then writing the code to make the tests pass. TDD helps to ensure that web applications are thoroughly tested, providing a way to identify and fix issues early in the development process. It also encourages developers to write modular, testable code, improving the overall quality and maintainability of web projects.</p>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Basic Frontend',
    level: 0,
    question: 'What is progressive enhancement in web design?',
    answer: 
      <>
        <p>Progressive enhancement is a web design strategy that emphasizes building web pages and applications in layers, starting with a solid foundation of accessible and usable content, and then adding more advanced features and functionality on top of that. It involves creating web projects that work for all users, regardless of their device or browser, and then enhancing the experience for users with more capable devices and browsers. Progressive enhancement helps to ensure that web applications are accessible, reliable, and usable for all users, improving the overall quality and inclusivity of the content.</p>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Basic Frontend',
    level: 0,
    question: 'What is cross-browser compatibility, and how is it achieved in web development?',
    answer: 
      <>
        <p>Cross-browser compatibility refers to the ability of a web page or application to function and display correctly across different web browsers. It is achieved in web development by using a combination of techniques, such as:</p>
        <ul>
          <li>Testing web pages in multiple browsers to identify and fix compatibility issues</li>
          <li>Using feature detection to identify browser capabilities and adjust behavior accordingly</li>
          <li>Using polyfills to provide missing functionality in older browsers</li>
          <li>Using vendor prefixes for CSS properties to ensure consistent rendering across browsers</li>
          <li>Following web standards and best practices to ensure compatibility with modern browsers</li>
        </ul>
        <p>By using these techniques, developers can create web pages and applications that work consistently across different browsers, providing a seamless user experience for all users.</p>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Basic Frontend',
    level: 0,
    question: 'Why is page load speed important in web development?',
    answer: 
      <>
        <p>Page load speed is important in web development because it directly impacts the user experience and engagement of web pages and applications:</p>
        <ul>
          <li>Faster page load times lead to improved user satisfaction, increased user engagement, and higher conversion rates.</li>
          <li>Page load speed is a ranking factor for search engines, affecting the visibility and discoverability of web pages in search results.</li>
        </ul>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Basic Frontend',
    level: 0,
    question: 'What are web fonts?',
    answer: 
      <>
        <p>Web fonts are custom fonts that are used in web design to enhance the typography and visual design of web pages and applications. They are typically hosted on a web server and loaded into web pages using CSS, allowing developers to use a wide range of fonts that may not be available on the user's device. Web fonts are particularly useful for creating visually appealing and unique designs, as they provide a way to customize and enhance the typography of web projects, improving the overall design and user experience of the content.</p>
        <p>Web fonts are loaded asynchronously, ensuring that the text content is displayed even if the font file is still being downloaded. It is important to consider performance implications and fallback fonts for users with slow internet connections or devices that do not support web fonts.</p>
        <p>Web fonts are typically loaded using the @font-face rule in CSS, which allows developers to specify the font file and define its usage in the web page. For example:</p>
        <pre><div className={styles.appCode} >
          {`@font-face {
  font-family: 'MyWebFont';
  src: url('webfont.woff2') format('woff2');
}`}
        </div></pre>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Basic Frontend',
    level: 0,
    question: 'What is a style guide?',
    answer: 
      <>
        <p>A style guide is a set of standards and guidelines for the design and development of web projects. It provides a way to define and document the visual design, user interface, and code conventions used in a web application, ensuring consistency and quality across the project. Style guides are particularly useful for creating and maintaining large and complex web projects, as they provide a reference for designers and developers to follow, improving the overall quality and maintainability of the content. Style guides typically include guidelines for typography, color palettes, layout, and code conventions, as well as examples and best practices for creating a cohesive and visually appealing design.</p>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Basic Frontend',
    level: 0,
    question: 'What are cookies and how are they used in web development?',
    answer: 
      <>
        <p>Cookies are small pieces of data that are stored on a user's device by a web browser.</p>
        <ul>
          <li>Used in web development to store information about the user's browsing activity, such as login credentials, preferences, and shopping cart items.</li>
          <li>Typically used to personalize the user experience, track user behavior, and provide targeted advertising, improving the overall usability and engagement of web applications.</li>
          <li>Are created and accessed using JavaScript or server-side code, and they can be used to store and retrieve data that persists across multiple sessions, providing a way to maintain state and user information in web projects.</li>
        </ul>
        <p>It is important to consider privacy and security implications when using cookies, as they can be used to track and store sensitive user information. Compliance with privacy regulations, such as GDPR and CCPA, is crucial for handling user data responsibly.</p>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Intermediate Frontend',
    level: 1,
    question: 'What are web standards, and why are they important in web development?',
    answer: 
      <>
        <p>Web standards are a set of guidelines and best practices for creating and maintaining web projects. They are important in web development because they provide a way to ensure that web pages and applications are accessible, usable, and reliable across different devices and browsers. Web standards help to define the structure, behavior, and presentation of web content, improving the overall quality and consistency of the user experience. By following web standards, developers can create web projects that are well-organized, accessible, and search engine friendly, improving the overall quality and usability of the content.</p>
        <p>Web standards are defined and maintained by organizations such as the World Wide Web Consortium (W3C) and the Web Hypertext Application Technology Working Group (WHATWG), providing a reference for developers to follow and adhere to when creating web projects.</p>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Basic Frontend',
    level: 0,
    question: 'What is responsive typography, and how is it used in web design?',
    answer: 
      <>
        <p>Responsive typography is a design technique that allows text to scale and adapt to different screen sizes and devices. It is used in web design to create readable and visually appealing text content that adjusts to the user's viewport, providing a consistent and user-friendly reading experience. Responsive typography can be achieved using CSS techniques, such as fluid typography, viewport units, and media queries, allowing developers to create text content that adapts to different screen sizes and resolutions. By using responsive typography, developers can create web projects that provide a consistent and visually appealing reading experience across a wide range of devices and screen sizes.</p>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Basic Frontend',
    level: 0,
    question: 'What is web hosting?',
    answer: 
      <>
        <p>Web hosting is a service that allows individuals and organizations to make their web pages and applications accessible via the World Wide Web. It involves storing and serving web content on a server, providing a way for users to access and interact with the content. Web hosting services typically include storage space, bandwidth, and other resources needed to host web projects, and they are often provided by web hosting companies or internet service providers.</p>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Basic Frontend',
    level: 0,
    question: 'What are domain names?',
    answer: 
      <>
        <p>Domain names are human-readable addresses that are used to access web pages and applications on the internet. They provide a way to identify and locate web content, allowing users to access web projects using a memorable and recognizable name. Domain names are typically registered and managed through domain registrars, and they are used to create unique and branded addresses for web projects, improving the accessibility and discoverability of the content.</p>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Advanced Frontend',
    level: 2,
    question: 'Explain the Model-View-Controller (MVC) architecture in web applications.',
    answer: 
      <>
        <p>The Model-View-Controller (MVC) architecture is a design pattern used in web applications to separate the application's data, user interface, and business logic into distinct components. It consists of three main components:</p>
        <ul>
          <li><strong>Model:</strong> Represents the data and business logic of the application. It interacts with the database and performs operations such as data retrieval, manipulation, and validation.</li>
          <li><strong>View:</strong> Represents the user interface of the application. It displays the data to the user and handles user input, such as form submissions and interactions.</li>
          <li><strong>Controller:</strong> Acts as an intermediary between the Model and View. It processes user input, updates the Model, and selects the appropriate View to display to the user.</li>
        </ul>
        <p>The MVC architecture helps to organize and structure web applications, making them easier to maintain, test, and extend. It also promotes code reusability and separation of concerns, improving the overall quality and maintainability of the application.</p>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Advanced Frontend',
    level: 2,
    question: 'How do you optimize web applications for performance?',
    answer: 
      <>
        <p>Optimizing web applications for performance involves a variety of techniques and best practices, such as:</p>
        <ul>
          <li>Minimizing HTTP requests by combining and minifying CSS and JavaScript files</li>
          <li>Using asynchronous loading for scripts and stylesheets to prevent render-blocking</li>
          <li>Optimizing images and other media assets for web use</li>
          <li>Using browser caching to store static assets locally and reduce server requests</li>
          <li>Implementing lazy loading to defer the loading of non-essential content until it is needed</li>
          <li>Using Content Delivery Networks (CDNs) to distribute content and reduce latency</li>
          <li>Reducing server response times by optimizing server-side code and database queries</li>
          <li>Implementing performance monitoring and testing to identify and fix performance issues</li>
        </ul>
        <p>By using these techniques, developers can create web applications that load quickly and provide a seamless user experience, improving engagement and usability for all users.</p>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Advanced Frontend',
    level: 2,
    question: 'Describe the use of RESTful APIs in frontend development.',
    answer: 
      <>
        <p>RESTful APIs are a set of guidelines and best practices for creating web services that adhere to the principles of Representational State Transfer (REST). They are used in frontend development to provide a way for web applications to interact with external data sources and services, such as databases, third-party APIs, and other web applications. RESTful APIs use standard HTTP methods, such as GET, POST, PUT, and DELETE, to perform operations on resources, and they typically return data in JSON or XML format, which can be parsed and used within the web application.</p>
        <p>RESTful APIs are particularly useful for creating web applications that are scalable, maintainable, and interoperable, as they provide a way to access and integrate external data and services into web projects, improving the overall functionality and user experience of the content.</p>
        <p>It is important to consider security and authentication when using RESTful APIs, ensuring that sensitive data is transmitted securely and that access to resources is properly managed and authenticated.</p>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Intermediate Frontend',
    level: 1,
    question: 'What is CRUD, and how is it used in web development?',
    answer: 
      <>
        <p>CRUD stands for Create, Read, Update, and Delete, which are the four basic operations used to manage data in web applications. It is used in web development to perform operations on resources, such as database records, files, and other data sources, providing a way to manage and manipulate data within the application. CRUD operations are typically performed using HTTP methods, such as POST, GET, PUT, and DELETE, and they are used to create, retrieve, update, and delete data, providing a way to manage and maintain the application's data.</p>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Intermediate Frontend',
    level: 1,
    question: 'Explain the concept of server-side rendering vs. client-side rendering.',
    answer: 
      <>
        <p>Server-side rendering and client-side rendering are two different approaches to rendering web content in web applications:</p>
        <ul>
          <li><strong>Server-side rendering:</strong> In server-side rendering, the web server generates the HTML content for the web page and sends it to the client's browser. This approach is typically used for traditional web applications and websites, and it provides a way to deliver content that is accessible and indexable by search engines.</li>
          <li><strong>Client-side rendering:</strong> In client-side rendering, the web server sends a minimal HTML page to the client's browser, and the client's browser uses JavaScript to render the content dynamically. This approach is typically used for single-page applications (SPAs) and web applications that require a high degree of interactivity and responsiveness.</li>
        </ul>
        <p>Both server-side rendering and client-side rendering have their advantages and disadvantages, and the choice between the two approaches depends on the specific requirements and goals of the web project.</p>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Advanced Frontend',
    level: 2,
    question: 'How do you manage state in complex web applications?',
    answer: 
      <>
        <p>Managing state in complex web applications involves a variety of techniques and best practices, such as:</p>
        <ul>
          <li>Using state management libraries and frameworks, such as Redux, MobX, or Vuex, to manage and synchronize state across different components</li>
          <li>Using context and hooks in React to manage and share state across different components without prop drilling</li>
          <li>Using local and session storage to persist state across page reloads and browser sessions</li>
          <li>Using cookies and tokens to manage user authentication and session state</li>
          <li>Using server-side state management techniques, such as sessions and caching, to manage and synchronize state across different users and devices</li>
        </ul>
        <p>By using these techniques, developers can create web applications that manage and synchronize state effectively, providing a seamless and reliable user experience for all users.</p>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Advanced Frontend',
    level: 2,
    question: 'What are the advantages/disadvantages of Single Page Applications (SPAs)?',
    answer: 
      <>
        <p>Single Page Applications (SPAs) have several advantages and disadvantages:</p>
        <p><strong>Advantages:</strong></p>
        <ul>          
          <li><strong>Improved user experience:</strong> SPAs provide a more app-like experience for users, with faster navigation and seamless interactions.</li>
          <li><strong>Reduced server load:</strong> SPAs only load the necessary content, reducing server requests and improving performance.</li>
          <li><strong>Improved performance:</strong> SPAs use client-side rendering and caching to provide faster load times and responsiveness.</li>
          <li><strong>Enhanced interactivity:</strong> SPAs use JavaScript to provide dynamic and interactive user experiences, improving engagement and usability.</li>
        </ul>
        <p><strong>Disadvantages:</strong></p>
        <ul>  
          <li><strong>SEO challenges:</strong> SPAs can present challenges for search engine optimization, as content may not be easily indexable by search engines.</li>
          <li><strong>Initial load time:</strong> SPAs may have longer initial load times, as they require the entire application to be loaded upfront.</li>
          <li><strong>Complexity:</strong> SPAs can be more complex to develop and maintain, requiring additional client-side logic and state management.</li>
          <li><strong>Accessibility:</strong> SPAs may present challenges for users with disabilities or assistive technologies, as they rely heavily on JavaScript for rendering and interactivity.</li>
        </ul>
        <p>By considering these advantages and disadvantages, developers can make informed decisions about when to use SPAs and how to mitigate their limitations in web projects.</p>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Basic Frontend',
    level: 2,
    question: 'Describe the process of integrating third-party APIs into a web application.',
    answer: 
      <>
        <p>Integrating third-party APIs into a web application involves several steps:</p>
        <ul>
          <li><strong>Research and documentation:</strong> Identify the third-party API that provides the desired functionality and review its documentation to understand the available endpoints, parameters, and authentication requirements.</li>
          <li><strong>Authentication:</strong> Obtain the necessary API keys, tokens, or credentials to authenticate and access the third-party API.</li>
          <li><strong>API request:</strong> Use JavaScript or a server-side language to make HTTP requests to the third-party API, passing the required parameters and handling the response data.</li>
          <li><strong>Data parsing and manipulation:</strong> Parse and manipulate the response data from the third-party API to extract the relevant information and integrate it into the web application.</li>
          <li><strong>Error handling:</strong> Implement error handling and fallback mechanisms to manage issues such as network problems or incorrect responses from the third-party API.</li>
          <li><strong>Testing and optimization:</strong> Test the integration of the third-party API in different environments and optimize the performance and reliability of the integration.</li>
        </ul>
        <p>By following these steps, developers can integrate third-party APIs into web applications, providing a wide range of functionality and features to enhance the overall user experience.</p>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Advanced Frontend',
    level: 2,
    question: 'How do you handle security concerns in frontend development?',
    answer: 
      <>
        <p>Handling security concerns in frontend development involves a variety of techniques and best practices, such as:</p>
        <ul>
          <li><strong>Secure coding practices:</strong> Following best practices for writing secure and robust code, such as input validation, output encoding, and secure authentication and authorization mechanisms.</li>
          <li><strong>Secure communication:</strong> Using HTTPS to encrypt data transmitted between the client and server, preventing eavesdropping and data tampering.</li>
          <li><strong>Authentication and authorization:</strong> Implementing secure user authentication and authorization mechanisms, such as multi-factor authentication and role-based access control.</li>
          <li><strong>Content security policy:</strong> Using content security policies to prevent cross-site scripting (XSS) attacks and other security vulnerabilities.</li>
          <li><strong>Security testing:</strong> Performing security testing and code reviews to identify and fix security vulnerabilities in web applications.</li>
          <li><strong>Compliance with regulations:</strong> Ensuring compliance with data protection regulations, such as GDPR and CCPA, to protect user data and privacy.</li>
        </ul>
        <p>By using these techniques, developers can create web applications that are secure, reliable, and resilient to security threats and vulnerabilities.</p>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Advanced Frontend',
    level: 2,
    question: 'What are Progressive Web Apps (PWAs), and how do they work?',
    answer: 
      <>
        <p>Progressive Web Apps (PWAs) are web applications that provide a native app-like experience for users, with features such as offline access, push notifications, and device hardware access. They work by using modern web technologies, such as service workers and web app manifests, to provide a reliable and engaging user experience, regardless of the user's network connection or device capabilities.</p>
        <p>By using these features, PWAs provide a way to create web applications that are reliable, fast, and engaging, improving the overall user experience and usability of the content.</p>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Basic Frontend',
    level: 2,
    question: 'Explain the concept of data binding in frontend frameworks.',
    answer: 
      <>
        <p>Data binding is a technique used in frontend frameworks to establish a connection between the model (data) and the view (UI), allowing changes in one to be reflected in the other. There are two main types of data binding:</p>
        <ul>
          <li><strong>One-way data binding:</strong> In one-way data binding, changes in the model are reflected in the view, but changes in the view do not affect the model. This is commonly used for displaying data in the UI.</li>
          <li><strong>Two-way data binding:</strong> In two-way data binding, changes in the model are reflected in the view, and changes in the view are also reflected in the model. This is commonly used for forms and interactive UI elements.</li>
        </ul>
        <p>Data binding simplifies the process of updating the UI in response to changes in the underlying data, providing a way to create dynamic and responsive web applications with minimal manual manipulation of the DOM.</p>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Intermediate Frontend',
    level: 1,
    question: 'How do you implement internationalization in web applications?',
    answer: 
      <>
        <p>Implementing internationalization in web applications involves several techniques and best practices, such as:</p>
        <ul>
          <li><strong>Using language tags:</strong> Identifying and tagging content with language codes to indicate the language of the content.</li>
          <li><strong>Using localization libraries:</strong> Using libraries and frameworks to manage and translate content for different languages and locales.</li>
          <li><strong>Using translation files:</strong> Storing translations in separate files or databases to manage and maintain localized content.</li>
          <li><strong>Using language negotiation:</strong> Automatically detecting the user's preferred language and serving the appropriate content based on their preferences.</li>
          <li><strong>Using language-specific formatting:</strong> Adapting date, time, and number formats to match the conventions of different languages and locales.</li>
          <li><strong>Testing and validation:</strong> Testing and validating the internationalization features of web applications to ensure that content is accurately translated and localized for different languages and locales.</li>
        </ul>
        <p>By using these techniques, developers can create web applications that are accessible and usable for users from different language backgrounds and locales, improving the overall inclusivity and usability of the content.</p>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Intermediate Frontend',
    level: 1,
    question: 'What are web components, and how are they used?',
    answer: 
      <>    
        <p>Web components are a set of web platform APIs that allow developers to create reusable and encapsulated custom elements for web applications. They consist of several key features:</p>
        <ul>
          <li><strong>Custom elements:</strong> Define new HTML elements that encapsulate their functionality and styling.</li>
          <li><strong>Shadow DOM:</strong> Encapsulate the styling and behavior of custom elements, preventing style and DOM conflicts with the rest of the document.</li>
          <li><strong>HTML templates:</strong> Define reusable templates for custom elements, allowing developers to define and reuse complex HTML structures.</li>
          <li><strong>HTML imports:</strong> Import and reuse custom elements and templates from other documents and components.</li>
        </ul>
        <p>Web components provide a way to create modular, reusable, and encapsulated components for web applications, improving the maintainability and reusability of the content.</p>  
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Advanced Frontend',
    level: 2,
    question: 'Describe the process of optimizing frontend assets.',
    answer: 
      <>
        <p>Optimizing frontend assets involves several techniques and best practices, such as:</p>
        <ul>
          <li><strong>Minification:</strong> Removing unnecessary characters from CSS, JavaScript, and HTML files to reduce file size and improve load times.</li>
          <li><strong>Concatenation:</strong> Combining multiple CSS and JavaScript files into a single file to reduce the number of server requests and improve performance.</li>
          <li><strong>Compression:</strong> Compressing images, videos, and other media assets to reduce file size and improve load times.</li>
          <li><strong>Caching:</strong> Using browser caching and server-side caching to store and reuse static assets, reducing server requests and improving performance.</li>
          <li><strong>Lazy loading:</strong> Deferring the loading of non-essential content until it is needed, improving initial load times and performance.</li>
          <li><strong>Dependencies:</strong> Using tools and build processes to manage and optimize dependencies, such as tree shaking and code splitting, to reduce file size and improve performance.
            <ul>
              <li><strong>Tree shaking:</strong> Removing unused code and dependencies from JavaScript bundles to reduce file size and improve performance.</li>
              <li><strong>Code splitting:</strong> Splitting large JavaScript bundles into smaller chunks to reduce initial load times and improve performance.</li> 
              <li><strong>Auditing:</strong> Regularly audit and remove unnecessary dependencies. </li>
            </ul>
          </li>
          <li><strong>Performance monitoring:</strong> Monitoring and testing the performance of frontend assets to identify and fix performance issues.</li>
          <li><strong>Responsive design:</strong> Using responsive design techniques to optimize the layout and presentation of web content for different devices and screen sizes, improving the overall user experience and usability of the content.</li>
          <li><strong>User engagement:</strong> Continuously test and refine frontend optimizations for optimal user engagement.</li>
        </ul>
        <p>By using these techniques, developers can create web applications that load quickly and provide a seamless user experience, improving engagement and usability for all users.</p>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Advanced Frontend',
    level: 1,
    question: 'What are websockets?',
    answer: 
      <>
        <p>Websockets are a communication protocol that provides full-duplex communication channels over a single TCP connection. They are used in web development to enable real-time, bidirectional communication between clients and servers, allowing data to be transmitted between the two parties without the need for continuous polling or long-lived connections.</p>
        <p>Websockets are particularly useful for creating real-time web applications, such as chat applications, multiplayer games, and collaborative editing tools, as they provide a way to transmit data between clients and servers in real time, improving the overall responsiveness and interactivity of the content.</p>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Advanced Frontend',
    level: 2,
    question: 'When should you use client-side routing in web applications?',
    answer: 
      <>
        <p>Client-side routing is a technique used in web applications to manage and update the URL and content of the web page without requiring a full page reload. It is typically used in single-page applications (SPAs) and web applications that require a high degree of interactivity and responsiveness.</p>
        <p>Client-side routing is particularly useful for creating web applications with complex user interfaces, such as dashboards, data visualization tools, and interactive forms, as it provides a way to update the content and state of the application in response to user interactions, without requiring a full page reload.</p>
        <p>By using client-side routing, developers can create web applications that provide a seamless and responsive user experience, improving engagement and usability for all users.</p>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Advanced Frontend',
    level: 2,
    question: 'When should you use server-side rendering in web applications?',
    answer: 
      <>
        <p>Server-side rendering is a technique used in web applications to generate the HTML content of the web page on the server and send it to the client's browser. It is typically used in traditional web applications and websites that require search engine optimization, accessibility, and initial load time performance.</p>
        <p>Server-side rendering is particularly useful for creating web applications with content that needs to be indexed by search engines, such as blogs, news websites, and e-commerce platforms, as it provides a way to deliver content that is accessible and indexable by search engines, improving the overall discoverability and visibility of the content.</p>
        <p>By using server-side rendering, developers can create web applications that are accessible, indexable, and performant, improving the overall quality and usability of the content.</p>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Advanced Frontend',
    level: 2,
    question: 'When should you use RESTful APIs, when should you use websockets and when should you use GraphQL?',
    answer: 
      <>
        <p>The choice between RESTful APIs, websockets, and GraphQL depends on the specific requirements and goals of the web application:</p>
        <ul>
          <li><strong>RESTful APIs:</strong> Use RESTful APIs for creating web applications that require a stateless, scalable, and interoperable way to access and integrate external data and services. RESTful APIs are particularly useful for creating web applications that need to perform CRUD operations on resources and access external data sources and services.</li>
          <li><strong>Websockets:</strong> Use websockets for creating real-time web applications that require bidirectional, full-duplex communication between clients and servers. Websockets are particularly useful for creating web applications that need to transmit data in real time, such as chat applications, multiplayer games, and collaborative editing tools.</li>
          <li><strong>GraphQL:</strong> Use GraphQL for creating web applications that require a flexible and efficient way to access and manipulate data. GraphQL is particularly useful for creating web applications that need to perform complex queries and mutations on data, providing a way to access and integrate data from multiple sources and services.</li>
        </ul>
        <p>By considering these factors, developers can make informed decisions about when to use RESTful APIs, websockets, and GraphQL in web projects, and how to leverage their strengths to create reliable and responsive web applications.</p>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Intermediate Frontend',
    level: 1,
    question: 'How do you handle error logging and reporting in frontend applications?',
    answer: 
      <>
        <p>Handling error logging and reporting in frontend applications involves several techniques and best practices, such as:</p>
        <ul>
          <li><strong>Client-side error handling:</strong> Implementing error handling and validation in client-side code to prevent and manage errors and exceptions.</li>
          <li><strong>Error boundaries:</strong>
            <ul>
              <li>Using error boundaries in React to catch and handle errors that occur in the component tree.</li>
              <li>Using try-catch blocks in JavaScript to catch and handle errors in client-side code.</li>
            </ul>
          </li>
          <li><strong>Error logging:</strong> Logging errors and exceptions in client-side code to track and monitor issues that occur in the application.</li>
          <li><strong>Error reporting:</strong> Reporting errors and exceptions to a server-side logging service or monitoring tool to track and manage issues that occur in the application.</li>
          <li><strong>Error tracking:</strong> Tracking and monitoring errors and exceptions in the application to identify and fix issues that affect the user experience and usability of the content.</li>
        </ul>
        <p>By using these techniques, developers can create frontend applications that are reliable, resilient, and responsive to user interactions, improving the overall quality and usability of the content.</p>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Intermediate Frontend',
    level: 1,
    question: 'What are the best practices for responsive design and implementation?',
    answer: 
      <>
        <p>Responsive design is a design technique used in web development to create web applications that adapt and respond to different devices and screen sizes. It involves several best practices, such as:</p>
        <ul>
          <li><strong>Using media queries:</strong> Defining breakpoints and responsive styles using CSS media queries to adapt the layout and presentation of web content for different devices and screen sizes.</li>
          <li><strong>Using fluid layouts:</strong> Creating flexible and fluid layouts that adapt to the user's viewport, providing a consistent and user-friendly reading experience across different devices and screen sizes.</li>
          <li><strong>Using responsive images:</strong> Optimizing and resizing images for different devices and screen sizes, providing a way to deliver visually appealing and performant images to users.</li>
          <li><strong>Using viewport units:</strong> Using viewport units, such as vw and vh, to define font sizes and lengths relative to the user's viewport, providing a way to create scalable and responsive typography and layout.</li>
          <li><strong>Using responsive typography:</strong> Using responsive typography techniques, such as fluid typography and viewport units, to create readable and visually appealing text content that adjusts to different screen sizes and resolutions.</li>
          <li><strong>Testing and validation:</strong> Testing and validating the responsive design of web applications to ensure that content is accessible and usable for users from different devices and screen sizes.</li>
        </ul>
        <p>By using these best practices, developers can create web applications that provide a consistent and visually appealing user experience across a wide range of devices and screen sizes, improving the overall accessibility and usability of the content.</p>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Intermediate Frontend',
    level: 1,
    question: 'Describe frontend testing and what tools to use?',
    answer: 
      <>
        <p>Frontend testing involves several techniques and tools to ensure the quality and reliability of web applications, such as:</p>
        <ul>
          <li><strong>Unit testing:</strong> Testing individual components and functions in isolation to ensure that they work as expected.</li>
          <li><strong>Integration testing:</strong> Testing the interaction and behavior of multiple components and modules to ensure that they work together as expected.</li>
          <li><strong>End-to-end testing:</strong> Testing the entire application from the user's perspective to ensure that it works as expected in a real-world scenario.</li>
          <li><strong>Snapshot testing:</strong> Testing the visual appearance and behavior of components to ensure that they render and behave consistently across different devices and screen sizes.</li>
          <li><strong>Performance testing:</strong> Testing the performance and responsiveness of web applications to ensure that they load quickly and provide a seamless user experience.</li>
          <li><strong>Accessibility testing:</strong> Testing the accessibility and usability of web applications to ensure that they are accessible and usable for users with disabilities and assistive technologies.</li>
          <li><strong>Security testing:</strong> Testing the security and reliability of web applications to ensure that they protect user data and privacy and are resilient to security threats and vulnerabilities.</li>
          <li><strong>Tools:</strong> There are several tools and frameworks available for frontend testing, such as Jest, Mocha, Jasmine, and Selenium, providing a way to create and run tests for web applications and ensure their quality and reliability.</li>
        </ul>
        <p>By using these techniques and tools, developers can create web applications that are reliable, resilient, and responsive to user interactions, improving the overall quality and usability of the content.</p>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Intermediate Frontend',
    level: 1,
    question: 'Describe the importance of clean and maintainable code in frontend development.',
    answer: 
      <>
        <p>Clean and maintainable code is important in frontend development for several reasons:</p>
        <ul>
          <li><strong>Readability:</strong> Clean code is easier to read and understand, improving the overall maintainability and reusability of the code.</li>
          <li><strong>Maintainability:</strong> Clean code is easier to maintain and update, reducing the time and effort required to make changes and improvements to the codebase.</li>
          <li><strong>Scalability:</strong> Clean code is easier to scale and extend, providing a way to create and maintain large and complex web applications with minimal complexity and technical debt.</li>
          <li><strong>Collaboration:</strong> Clean code promotes collaboration and teamwork, allowing developers to work together effectively and efficiently on web projects.</li>
          <li><strong>Performance:</strong> Clean code can improve the performance and reliability of web applications, reducing the risk of errors and issues that affect the user experience and usability of the content.</li>
          <li><strong>Quality:</strong> Clean code improves the overall quality and reliability of web applications, providing a way to create and maintain content that is accessible, usable, and reliable for all users.</li>
        </ul>
        <p>By writing clean and maintainable code, developers can create web applications that are reliable, resilient, and responsive to user interactions, improving the overall quality and usability of the content.</p>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Advanced Frontend',
    level: 2,
    question: 'What is dependency management in frontend development, and why is it important?',
    answer: 
      <>
        <p>Dependency management in frontend development involves managing and organizing the external libraries, frameworks, and modules used in web applications. It ensures that these dependencies are correctly integrated, updated, and compatible with each other.  It is important for several reasons:</p>
        <ul>
          <li><strong>Code organization:</strong> Dependency management provides a way to organize and manage the external dependencies used in web applications, reducing complexity and improving maintainability.</li>
          <li><strong>Version control:</strong> Dependency management ensures that the correct versions of external dependencies are used in web applications, reducing the risk of compatibility issues and security vulnerabilities.</li>
          <li><strong>Performance:</strong> Dependency management can improve the performance and reliability of web applications, reducing the risk of errors and issues that affect the user experience and usability of the content.</li>
          <li><strong>Security:</strong> Dependency management ensures that external dependencies are secure and reliable, reducing the risk of security threats and vulnerabilities that affect the overall quality and reliability of the content.</li>
        </ul>
        <p>By using dependency management, developers can create web applications that are reliable, resilient, and responsive to user interactions, improving the overall quality and usability of the content.</p>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Advanced Frontend',
    level: 2,
    question: 'How do you ensure the scalability of a frontend application?',
    answer: 
      <>
        <p>Ensuring the scalability of a frontend application involves several techniques and best practices, such as:</p>
        <ul>
          <li><strong>Modular architecture:</strong> Using a modular architecture to organize and structure the codebase, reducing complexity and improving maintainability.</li>
          <li><strong>Code splitting:</strong> Splitting large JavaScript bundles into smaller chunks to reduce initial load times and improve performance.</li>
          <li><strong>Tree shaking:</strong> Removing unused code and dependencies from JavaScript bundles to reduce file size and improve performance.</li>
          <li><strong>Performance monitoring:</strong> Monitoring and testing the performance of frontend applications to identify and fix performance issues that affect the user experience and usability of the content.</li>
          <li><strong>Scalable design patterns:</strong> Using scalable design patterns, such as component-based architecture and state management, to create and maintain large and complex web applications with minimal complexity and technical debt.</li>
          <li><strong>Performance optimization:</strong> Optimizing the performance and reliability of frontend applications to reduce the risk of errors and issues that affect the user experience and usability of the content.</li>
        </ul>
        <p>By using these techniques and best practices, developers can create web applications that are reliable, resilient, and responsive to user interactions, improving the overall quality and usability of the content.</p>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Advanced Frontend',
    level: 2,
    question: 'What is tree shaking, and how is it used in frontend development?',
    answer: 
      <>
        <p>Tree shaking is a technique used in frontend development to remove unused code and dependencies from JavaScript bundles, reducing file size and improving performance. It is typically used in web applications that use modular architecture and dependency management to create and maintain large and complex codebases with minimal complexity and technical debt.</p>
        <p>Tree shaking works by analyzing the codebase and identifying the parts of the code that are not used, such as unused functions, variables, and modules. It then removes these unused parts from the JavaScript bundles, reducing file size and improving performance.</p>
        <p>By using tree shaking, developers can create web applications that are reliable, resilient, and responsive to user interactions, improving the overall quality and usability of the content.</p>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Advanced Frontend',
    level: 2,
    question: 'What are some challenges with working with legacy code in frontend development?',
    answer: 
      <>
        <p>Working with legacy code in frontend development presents several challenges, such as:</p>
        <ul>
          <li><strong>Outdated technologies:</strong> Legacy code may be built with outdated technologies and practices, making it difficult to maintain and update.</li>
          <li><strong>Complexity:</strong> Legacy code may be complex and difficult to understand, requiring additional time and effort to make changes and improvements.</li>
          <li><strong>Technical debt:</strong> Legacy code may have accumulated technical debt, such as outdated dependencies and poor architecture, making it difficult to scale and extend.</li>
          <li><strong>Compatibility:</strong> Legacy code may have compatibility issues with modern browsers and devices, requiring additional testing and validation to ensure that it works as expected.</li>
          <li><strong>Security vulnerabilities:</strong> Legacy code may have security vulnerabilities and issues, such as outdated libraries and dependencies, making it susceptible to security threats and attacks.</li>
          <li><strong>Performance issues:</strong> Legacy code may have performance issues and bottlenecks, such as slow load times and unresponsive interactions, affecting the user experience and usability of the content.</li>
          <li><strong>Poor documentation:</strong> Legacy code may have poor or outdated documentation, making it difficult to understand and maintain.</li>
          <li><strong>Inadequate testing:</strong> Legacy code may have poor or outdated tests, making it difficult to validate and ensure its quality and reliability.</li>
        </ul>
        <p>By addressing these challenges and using modern techniques and best practices, developers can maintain and update legacy code in frontend applications, improving the overall quality and usability of the content.  Overall, navigating and maintaining legacy frontend code demands patience, reverse engineering skills, and a strategic approach to ensure successful updates and enhancements.</p>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Advanced Frontend',
    level: 2,
    question: 'What is the difference between user authentication and authorization in web applications?',
    answer: 
      <>
        <p>In front-end engineering, user authentication and authorization are two distinct concepts, but they are often used together to ensure secure access to web applications. In short, while authentication verifies the identity of a user, authorization controls what resources and actions that authenticated user can access and perform within the application. Here's the difference between the two in greater detail:</p>
        <ul>
          <li><strong>User authentication:</strong>
          <ul>
            <li><strong>Definition:</strong> User authentication is the process of verifying the identity of a user attempting to access a system or application.</li>
            <li><strong>Purpose:</strong> The primary goal of authentication is to confirm that the user is who they claim to be.</li>
            <li><strong>Methods:</strong> Authentication can be done through various methods such as passwords, biometric authentication (like fingerprint or facial recognition), one-time codes, or multi-factor authentication (using a combination of two or more authentication factors).</li>
            <li><strong>Front-end Implementation:</strong> In front-end engineering, authentication mechanisms are implemented through user interfaces such as login forms where users enter their credentials (username/password, or other authentication factors) to prove their identity.</li>
            <li><strong>Example:</strong> When you log in to your email account, you provide your username and password. If the system verifies that the provided credentials match the stored credentials for that username, you are authenticated and granted access to your email inbox.</li>
          </ul></li>
          <li><strong>User authorization:</strong>
          <ul>
            <li><strong>Definition:</strong> User authorization is the process of determining whether an authenticated user has the necessary permissions and privileges to access specific resources or perform certain actions within a system or application.</li>
            <li><strong>Purpose:</strong> The primary goal of authorization is to control access to resources based on the user's identity and role.</li>
            <li><strong>Methods:</strong> Authorization is typically implemented using access control mechanisms such as role-based access control (RBAC), attribute-based access control (ABAC), or other custom access control lists (ACLs).</li>
            <li><strong>Front-end Implementation:</strong> In front-end engineering, authorization is enforced by controlling the visibility and functionality of various UI components based on the user's role and permissions. This can include showing/hiding specific sections of a web page or enabling/disabling certain actions (e.g., editing, deleting) based on the user's authorization level.</li>
            <li><strong>Example:</strong> In a blogging platform, a user who is authenticated (via username/password) may be authorized to create new blog posts and edit their own posts, but not to delete posts created by other users. The authorization mechanism controls what actions each user can perform within the application.</li>
          </ul></li>
        </ul>
        <p>By using these techniques and best practices, developers can create web applications that are secure, reliable, and resilient to security threats and vulnerabilities, improving the overall quality and usability of the content.</p>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Advanced Frontend',
    level: 2,
    question: 'What are CSS preprocessors, and how do they enhance styling?',
    answer: 
      <>
        <p>CSS preprocessors are tools that extend the functionality of standard CSS by providing additional features and capabilities, such as variables, mixins, and nesting. They enhance styling by providing a way to create and maintain complex and reusable stylesheets with minimal repetition and redundancy.</p>
        <p>CSS preprocessors work by processing and compiling the preprocessed code into standard CSS, which is then used to style web applications. They provide several key features:</p>
        <ul>
          <li><strong>Variables:</strong> Define and reuse values, such as colors, fonts, and dimensions, to create consistent and maintainable stylesheets.</li>
          <li><strong>Mixins:</strong> Define and reuse sets of CSS properties and values, such as vendor prefixes and browser-specific styles, to create consistent and cross-browser compatible stylesheets.</li>
          <li><strong>Nesting:</strong> Nest CSS rules and selectors to create a more organized and maintainable stylesheet structure, reducing complexity and improving readability.</li>
          <li><strong>Functions:</strong> Define and reuse complex calculations and operations, such as color manipulation and layout calculations, to create dynamic and responsive stylesheets.</li>
          <li><strong>Modularity:</strong> Organize and structure stylesheets into modular and reusable components, reducing repetition and redundancy and improving maintainability and scalability.</li>
        </ul>
        <p>By using CSS preprocessors, developers can create and maintain stylesheets that are consistent, maintainable, and reusable, improving the overall quality and usability of the content.</p>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Advanced Frontend',
    level: 2,
    question: 'Explain the concept of Continuous Integration/Continuous Deployment (CI/CD).',
    answer: 
      <>
        <p>Continuous Integration/Continuous Deployment (CI/CD) is a set of practices and techniques used to automate and streamline the process of building, testing, and deploying applications. It involves several key concepts:</p>
        <ul>
          <li><strong>Continuous Integration:</strong> Automate the process of integrating and testing code changes from multiple developers into a shared codebase, ensuring that the changes are compatible and functional.</li>
          <li><strong>Continuous Deployment:</strong> Automate the process of deploying code changes to production environments, ensuring that the changes are reliable and resilient to errors and issues.</li>
          <li><strong>Automated testing:</strong> Automate the process of testing code changes to identify and fix errors and issues that affect the user experience and usability of the content.</li>
          <li><strong>Automated deployment:</strong> Automate the process of deploying code changes to production environments, reducing the risk of errors and issues that affect the user experience and usability of the content.</li>
          <li><strong>Continuous monitoring:</strong> Monitor and test the performance and reliability of web applications to identify and fix issues that affect the user experience and usability of the content.</li>
        </ul>
        <p>By using CI/CD practices and techniques, developers can create web applications that are reliable, resilient, and responsive to user interactions, improving the overall quality and usability of the content.</p>  
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Advanced Frontend',
    level: 2,
    question: 'How do you handle large datasets and optimize performance in web applications?',
    answer: 
      <>
        <p>Handling large datasets and optimizing performance in web applications involves several techniques and best practices, such as:</p>
        <ul>
          <li><strong>Data pagination:</strong> Paginate and load large datasets in smaller chunks to reduce initial load times and improve performance.</li>
          <li><strong>Data filtering:</strong> Filter and query large datasets to retrieve and display only the relevant information, reducing the amount of data transferred and improving performance.</li>
          <li><strong>Data caching:</strong> Cache and store frequently accessed data to reduce server requests and improve performance.</li>
          <li><strong>Data compression:</strong> Compress and optimize large datasets to reduce file size and improve load times.</li>
          <li><strong>Performance monitoring:</strong> Monitor and test the performance of web applications to identify and fix performance issues that affect the user experience and usability of the content.</li>
          <li><strong>Server-side processsing:</strong> Offload processing to the server to reduce client-side processing and improve performance. You can also use server-side rendering to generate and serve content to the client, reducing the amount of client-side processing and improving performance.</li>
          <li><strong>Content Delivery Networks (CDNs):</strong> Use CDNs to cache and deliver large datasets to users, reducing server requests and improving performance.</li>
          <li><strong>Reduce blocking:</strong> Employ asynchronous requests and minimize synchronous operations to prevent blocking.</li>
          <li><strong>Algorithms and data structures:</strong> Emplement efficient algorithms and data structures for data manipulation and processing.</li>
        </ul>
        <p>By using these techniques and best practices, developers can create web applications that are reliable, resilient, and responsive to user interactions, improving the overall quality and usability of the content.</p>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Advanced Frontend',
    level: 2,
    question: 'What are micro-frontends, and what advantages do they offer?',
    answer: 
      <>
        <p>Micro-frontends are a design pattern used in frontend development to create and maintain web applications as a collection of small, self-contained, and independent frontend modules. They offer several advantages, such as:</p>
        <ul>
          <li><strong>Modularity:</strong> Create and maintain web applications as a collection of small, self-contained, and independent frontend modules, reducing complexity and improving maintainability.</li>
          <li><strong>Scalability:</strong> Scale and extend web applications with minimal complexity and technical debt, providing a way to create and maintain large and complex codebases.</li>
          <li><strong>Reusability:</strong> Reuse and share frontend modules across different web applications and projects, reducing repetition and redundancy and improving maintainability and scalability.</li>
          <li><strong>Autonomy:</strong> Develop and deploy frontend modules independently, reducing dependencies and improving maintainability and reliability.</li>
          <li><strong>Performance:</strong> Optimize the performance and reliability of web applications, reducing the risk of errors and issues that affect the user experience and usability of the content.</li>
        </ul>
        <p>By using micro-frontends, developers can create web applications that are reliable, resilient, and responsive to user interactions, improving the overall quality and usability of the content.</p>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Advanced Frontend',
    level: 2,
    question: 'What is GraphQL, and how is it used in frontend development?',
    answer: 
      <>
        <p>GraphQL is a query language and runtime for APIs that provides a way to define and query the data requirements of web applications. It is used in frontend development to create and maintain web applications that require flexible and efficient data retrieval and manipulation.</p>
        <p>GraphQL works by defining a schema that describes the data requirements of the application, including the types of data and the relationships between them. It then provides a way to query this schema using a flexible and expressive syntax, allowing clients to request only the data they need, reducing the amount of data transferred and improving performance.</p>
        <ul>
          <li><strong>Data Fetching:</strong> Allows clients to request exactly the data they need using a single endpoint (/graphql). Clients can specify the structure of the response and request only the fields they require, reducing over-fetching and under-fetching of data.</li>
          <li><strong>Data Structure:</strong> Uses a type system to define the structure of data. Clients can request nested fields and traverse relationships between entities in a single query, allowing for more flexible data retrieval.</li>
          <li><strong>Response Format:</strong> Responses are JSON objects that mirror the shape of the query. The server dynamically constructs the response based on the fields requested in the query.</li>
          <li><strong>Caching:</strong> Responses are often not as cacheable out of the box because the shape of the response can vary based on the query. However, caching strategies can still be implemented at the application level.</li>
          <li><strong>Versioning:</strong> Allows for seamless evolution of APIs without the need for versioning. Clients can request new fields or changes to existing fields without impacting older clients.</li>
          <li><strong>Tooling and Ecosystem:</strong> Has a growing ecosystem of tools and libraries, including Apollo Client and Relay for client-side GraphQL querying, and tools like GraphiQL for interactive query exploration</li>
        </ul>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Advanced Frontend',
    level: 2,
    question: 'What are the latest trends in frontend development technologies?',
    answer: 
      <>
        <p>Some of the latest trends in frontend development technologies include:</p>
        <ul>
          <li><strong>Serverless architecture:</strong> Use serverless architecture to create and maintain web applications without managing servers and infrastructure, reducing complexity and improving scalability and reliability.</li>
          <li><strong>Progressive Web Apps (PWAs):</strong> Create web applications that provide a native app-like experience, such as offline support, push notifications, and home screen installation, improving the overall user experience and usability of the content.</li>
          <li><strong>WebAssembly:</strong> Use WebAssembly to run high-performance, low-level code in web applications, improving the performance and reliability of the content.</li>
          <li><strong>Headless CMS:</strong> Use headless CMS to create and maintain web applications with decoupled content management and presentation layers, improving the maintainability and scalability of the content.</li>
          <li><strong>Static site generators:</strong> Use static site generators to create and maintain web applications with pre-built static pages, improving the performance and reliability of the content.</li>
          <li><strong>Low-code and no-code platforms:</strong> Use low-code and no-code platforms to create and maintain web applications with minimal coding and development effort, improving the accessibility and usability of the content.</li>
        </ul>
        <p>By using these technologies and trends, developers can create web applications that are reliable, resilient, and responsive to user interactions, improving the overall quality and usability of the content.</p>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Advanced Frontend',
    level: 2,
    question: 'What is the importance of a frontend framework, and how do you choose one?',
    answer: 
      <>
        <p>Frontend frameworks are important in web development for several reasons:</p>
        <ul>
          <li><strong>Modularity:</strong> Use frontend frameworks to organize and structure the codebase, reducing complexity and improving maintainability.</li>
          <li><strong>Scalability:</strong> Use frontend frameworks to scale and extend web applications with minimal complexity and technical debt, providing a way to create and maintain large and complex codebases.</li>
          <li><strong>Reusability:</strong> Reuse and share frontend components and modules across different web applications and projects, reducing repetition and redundancy and improving maintainability and scalability.</li>
          <li><strong>Performance:</strong> Optimize the performance and reliability of web applications, reducing the risk of errors and issues that affect the user experience and usability of the content.</li>
        </ul>
        <p>When choosing a frontend framework, consider factors such as:</p>
        <ul>
          <li><strong>Community support:</strong> Choose a framework with a strong and active community, providing a way to access and share resources, such as documentation, tutorials, and libraries.</li>
          <li><strong>Performance:</strong> Choose a framework with good performance and reliability, reducing the risk of errors and issues that affect the user experience and usability of the content.</li>
          <li><strong>Scalability:</strong> Choose a framework with good scalability and extensibility, providing a way to create and maintain large and complex codebases with minimal complexity and technical debt.</li>
          <li><strong>Compatibility:</strong> Choose a framework with good compatibility and interoperability, ensuring that it works well with other technologies and tools used in web development.</li>
          <li><strong>Security:</strong> Choose a framework with good security and reliability, reducing the risk of security threats and vulnerabilities that affect the overall quality and reliability of the content.</li>
        </ul>
        <p>By using frontend frameworks and considering these factors, developers can create web applications that are reliable, resilient, and responsive to user interactions, improving the overall quality and usability of the content.</p>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Advanced Frontend',
    level: 2,
    question: 'How do you protect an application from cross-site scripting (XSS) attacks?',
    answer: 
      <>
        <p>Protecting an application from cross-site scripting (XSS) attacks involves several techniques and best practices, such as:</p>
        <ul>
          <li><strong>Content security policy:</strong> Use content security policies to prevent cross-site scripting (XSS) attacks and other security vulnerabilities.</li>
          <li><strong>Input validation:</strong> Validate and sanitize user input to prevent malicious code from being executed in the application.</li>
          <li><strong>Output encoding:</strong> Encode and escape user input to prevent malicious code from being executed in the application.</li>
          <li><strong>Secure communication:</strong> Use HTTPS to encrypt data transmitted between the client and server, preventing eavesdropping and data tampering.</li>
          <li><strong>Security testing:</strong> Perform security testing and code reviews to identify and fix security vulnerabilities in web applications.</li>
        </ul>
        <p>By using these techniques and best practices, developers can create web applications that are secure, reliable, and resilient to security threats and vulnerabilities, improving the overall quality and usability of the content.</p>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Advanced Frontend',
    level: 2,
    question: 'What are common security threats in frontend development, and how do you protect against them?',
    answer: 
      <>
        <p>Common security threats in frontend development include:</p>
        <ul>
          <li><strong>Cross-site scripting (XSS):</strong> This is a vulnerability that allows attackers to inject malicious scripts into web pages viewed by other users. These scripts can execute in the context of the victim's browser, leading to actions such as session hijacking, data theft, or redirection to malicious websites. XSS attacks commonly exploit vulnerabilities in web applications that fail to properly sanitize user input or output.  Prevent XSS attacks by using content security policies, input validation, and output encoding to protect against malicious code execution.</li>
          <li><strong>Cross-site request forgery (CSRF):</strong> This is an attack where an attacker tricks a user into unknowingly executing actions on a web application that the user is authenticated to. The attacker crafts malicious requests and lures the victim into visiting a page or clicking on a link that automatically submits those requests, leading to actions like unauthorized transactions, account takeover, or data manipulation. CSRF attacks exploit the trust that a web application has in the user's browser.  Prevent CSRF attacks by using anti-CSRF tokens and secure cookies to protect against unauthorized requests.</li>
          <li><strong>Clickjacking:</strong> This is a technique where an attacker hides malicious actions behind legitimate-looking elements on a webpage, tricking users into clicking on them without their knowledge. By overlaying transparent or disguised elements over buttons, links, or forms, attackers can hijack user clicks and perform actions such as liking a social media post, sharing content, or initiating downloads. Clickjacking exploits vulnerabilities in the user interface of web applications.  Prevent clickjacking attacks by using frame-busting scripts and X-Frame-Options headers to protect against unauthorized framing of web content.</li>
          <li><strong>Security misconfigurations:</strong> This refer to mistakes or oversights in the configuration of software components or systems that can lead to security vulnerabilities. This includes leaving default passwords, enabling unnecessary services, improper access controls, or failure to apply security patches and updates. Attackers can exploit misconfigurations to gain unauthorized access, escalate privileges, or compromise the integrity and confidentiality of data. Proper configuration management and regular security audits are essential to mitigate these risks.  Prevent security misconfigurations by using secure defaults and best practices to protect against unauthorized access and exposure of sensitive information.</li>
        </ul>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Advanced Frontend',
    level: 2,
    question: 'How do you protect an application from cross-site forgery (CSRF) attacks?',
    answer: 
      <>
        <p>Protecting an application from cross-site request forgery (CSRF) attacks involves several techniques and best practices, such as:</p>
        <ul>
          <li><strong>Anti-CSRF tokens:</strong> Use anti-CSRF tokens to protect against unauthorized requests and ensure that requests originate from trusted sources.</li>
          <li><strong>Secure cookies:</strong> Use secure cookies to protect against unauthorized access and exposure of sensitive information.</li>
          <li><strong>Security testing:</strong> Perform security testing and code reviews to identify and fix security vulnerabilities in web applications.</li>
        </ul>
        <p>By using these techniques and best practices, developers can create web applications that are secure, reliable, and resilient to security threats and vulnerabilities, improving the overall quality and usability of the content.</p>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Advanced Frontend',
    level: 2,
    question: 'How do you ensure positive user experience in situations of slow network connections?',
    answer: 
      <>
        <p>Ensuring a positive user experience in situations of slow network connections involves several techniques and best practices, such as:</p>
        <ul>
          <li><strong>Performance optimization:</strong> Optimize the performance and reliability of web applications to reduce the risk of errors and issues that affect the user experience and usability of the content.</li>
          <li><strong>Progressive enhancement:</strong> Use progressive enhancement to provide a baseline experience for all users and enhance the experience for users with modern browsers and devices.</li>
          <li><strong>Offline support:</strong> Provide offline support for web applications, allowing users to access and interact with content even when they are offline or have a slow network connection.</li>
          <li><strong>Performance monitoring:</strong> Monitor and test the performance of web applications to identify and fix performance issues that affect the user experience and usability of the content.</li>
        </ul>
        <p>By using these techniques and best practices, developers can create web applications that are reliable, resilient, and responsive to user interactions, improving the overall quality and usability of the content.</p>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Advanced Frontend',
    level: 2,
    question: 'What is device fragmentation?',
    answer: 
      <>
        <p>Device fragmentation is the phenomenon of having a wide variety of devices with different screen sizes, resolutions, and capabilities, making it difficult to create and maintain web applications that work well across all devices and screen sizes. It is important to consider device fragmentation when designing and developing web applications to ensure that they provide a consistent and visually appealing user experience across a wide range of devices and screen sizes.</p>
        <p>By considering device fragmentation, developers can create web applications that are reliable, resilient, and responsive to user interactions, improving the overall quality and usability of the content.</p>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Advanced Frontend',
    level: 2,
    question: 'What are some strategies for maintaining a consistent user experience across different devices and screen sizes?',
    answer: 
      <>
        <p>Maintaining a consistent user experience across different devices and screen sizes involves several strategies and best practices, such as:</p>
        <ul>
          <li><strong>Responsive design:</strong> Use responsive design techniques to create web applications that adapt and respond to different devices and screen sizes, providing a consistent and visually appealing user experience.</li>
          <li><strong>Progressive enhancement:</strong> Use progressive enhancement to provide a baseline experience for all users and enhance the experience for users with modern browsers and devices.</li>
          <li><strong>Device testing:</strong> Test and validate web applications on a wide range of devices and screen sizes to ensure that they work well and provide a consistent user experience.</li>
          <li><strong>Performance optimization:</strong> Optimize the performance and reliability of web applications to reduce the risk of errors and issues that affect the user experience and usability of the content.</li>
        </ul>
        <p>By using these strategies and best practices, developers can create web applications that are reliable, resilient, and responsive to user interactions, improving the overall quality and usability of the content.</p>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Advanced Frontend',
    level: 2,
    question: 'How do you ensure your web application does not increase battery consumption on mobile devices?',
    answer: 
      <>
        <p>Ensuring that a web application does not increase battery consumption on mobile devices involves several techniques and best practices, such as:</p>
        <ul>
          <li><strong>Performance optimization:</strong> Optimize the performance and reliability of web applications to reduce the risk of errors and issues that affect the user experience and usability of the content.</li>
          <li><strong>Resource management:</strong> Manage and optimize the use of resources, such as CPU, memory, and network, to reduce battery consumption and improve the overall performance and reliability of the content.</li>
          <li><strong>Performance monitoring:</strong> Monitor and test the performance of web applications to identify and fix performance issues that affect the user experience and usability of the content.</li>
        </ul>
        <p>By using these techniques and best practices, developers can create web applications that are reliable, resilient, and responsive to user interactions, improving the overall quality and usability of the content while minimizing the impact on battery consumption of mobile devices.</p>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Advanced Frontend',
    level: 2,
    question: 'What are feature flags, and how are they used in frontend development?',
    answer: 
      <>
        <p>Feature flags are a technique used in frontend development to enable and disable features in web applications based on different conditions, such as user roles, environments, and A/B testing. They are used to control the visibility and behavior of features, providing a way to create and maintain web applications with minimal complexity and technical debt.</p>
        <p>Feature flags work by defining and managing feature flags in the codebase, allowing developers to enable and disable features based on different conditions. They provide several key features:</p>
        <ul>
          <li><strong>Conditional rendering:</strong> Render and display features based on different conditions, such as user roles, environments, and A/B testing.</li>
          <li><strong>Dynamic configuration:</strong> Configure and manage feature flags at runtime, allowing developers to enable and disable features without deploying new code.</li>
          <li><strong>Testing and validation:</strong> Test and validate features in different environments and conditions, ensuring that they work as expected and provide a consistent user experience.</li>
        </ul>
        <p>By using feature flags, developers can create web applications that are reliable, resilient, and responsive to user interactions, improving the overall quality and usability of the content.</p>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Intermediate Frontend',
    level: 1,
    question: 'What are the best practices for form design and validation in web applications?',
    answer: 
      <>
        <p>Best practices for form design and validation in web applications include:</p>
        <ul>
          <li><strong>Clear and consistent design:</strong> Reduces complexity and improves usability by reducing conginitive friction for the user.</li>
          <li><strong>Progressive disclosure:</strong> A strategy where complex or less frequently used form fields are hidden initially, revealing them gradually as users interact with the form. This approach helps streamline the user experience by presenting users with only the most relevant or essential information upfront, reducing cognitive overload and improving usability. As users progress through the form or indicate a need for additional options, more advanced or optional fields are progressively revealed, maintaining a focused and intuitive user interface.</li>
          <li><strong>Input validation:</strong> Validate and sanitize user input to prevent errors and issues that affect the user experience and usability of the content, as well as supporting security best practices.</li>
          <li><strong>Feedback and error messages:</strong> These guide users through the form submission process, reducing the risk of errors and issues that affect the user experience and usability of the content.</li>
        </ul>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Advanced Frontend',
    level: 2,
    question: 'What is the role of A/B testing in frontend development?',
    answer: 
      <>
        <p>A/B testing is a technique used in frontend development to compare and evaluate the performance and usability of different versions of web applications. It is used to identify and fix issues that affect the user experience and usability of the content, providing a way to create and maintain web applications with minimal complexity and technical debt.</p>
        <p>A/B testing works by defining and managing different versions of web applications, allowing developers to compare and evaluate their performance and usability. It provides several key features:</p>
        <ul>
          <li><strong>Comparative analysis:</strong> Compare and evaluate the performance and usability of different versions of web applications, identifying and fixing issues that affect the user experience and usability of the content.</li>
          <li><strong>Dynamic configuration:</strong> Configure and manage different versions of web applications at runtime, allowing developers to compare and evaluate their performance and usability without deploying new code.</li>
          <li><strong>Testing and validation:</strong> Test and validate different versions of web applications in different environments and conditions, ensuring that they work as expected and provide a consistent user experience.</li>
        </ul>
        <p>By using A/B testing, developers can create web applications that are reliable, resilient, and responsive to user interactions, improving the overall quality and usability of the content.</p>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Advanced Frontend',
    level: 2,
    question: 'What are the challenges in implementing real-time features in web applications?',
    answer: 
      <>
        <p>Implementing real-time features in web applications presents several challenges, such as:</p>
        <ul>
          <li><strong>Performance optimization:</strong> Optimize the performance and reliability of real-time features to reduce the risk of errors and issues that affect the user experience and usability of the content.</li>
          <li><strong>Scalability:</strong> Scale and extend real-time features with minimal complexity and technical debt, providing a way to create and maintain large and complex codebases.</li>
          <li><strong>Reliability:</strong> Ensure the reliability and resilience of real-time features, reducing the risk of errors and issues that affect the user experience and usability of the content.</li>
          <li><strong>Security:</strong> Ensure the security and privacy of real-time features, reducing the risk of security threats and vulnerabilities that affect the overall quality and reliability of the content.</li>
        </ul>
        <p>By addressing these challenges and using modern techniques and best practices, developers can create web applications that are reliable, resilient, and responsive to user interactions, improving the overall quality and usability of the content.</p>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Advanced Frontend',
    level: 2,
    question: 'How do you balance innovation with maintaining a stable codebase?',
    answer: 
      <>
        <p>Balancing innovation with maintaining a stable codebase involves several techniques and best practices, such as:</p>
        <ul>
          <li><strong>Modularity:</strong> Use modular architecture and dependency management to create and maintain large and complex codebases with minimal complexity and technical debt.</li>
          <li><strong>Scalability:</strong> Scale and extend web applications with minimal complexity and technical debt, providing a way to create and maintain large and complex codebases.</li>
          <li><strong>Reusability:</strong> Reuse and share frontend components and modules across different web applications and projects, reducing repetition and redundancy and improving maintainability and scalability.</li>
          <li><strong>Autonomy:</strong> Develop and deploy frontend modules independently, reducing dependencies and improving maintainability and reliability.</li>
          <li><strong>Performance optimization:</strong> Optimize the performance and reliability of web applications to reduce the risk of errors and issues that affect the user experience and usability of the content.</li>

          <li><strong>Culture of continuous improvement:</strong> Foster a culture of continuous improvement and learning to encourage innovation and creativity while maintaining a stable codebase.</li>
          <li><strong>Agile Methodologies:</strong> Embrace agile methodologies to adapt quickly to emerging technologies while upholding a robust foundation.</li>
        </ul>
        <p>By using these techniques and best practices, developers can create web applications that are reliable, resilient, and responsive to user interactions, improving the overall quality and usability of the content while balancing innovation with maintaining a stable codebase.</p>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Advanced Frontend',
    level: 2,
    question: 'Explain the cookie attribute: “SameSite”',
    answer: 
      <>
        <p>The "SameSite" attribute is used in HTTP cookies to control whether cookies are sent with cross-site requests. It provides a way to prevent cross-site request forgery (CSRF) attacks and protect user privacy and security.</p>
        <p>The "SameSite" attribute has three possible values:</p>
        <ul>
          <li><strong>Strict:</strong> Cookies are only sent in first-party contexts, such as when the website is loaded in the address bar.</li>
          <li><strong>Lax:</strong> Cookies are sent in first-party contexts and top-level navigations, such as when the website is loaded in the address bar or through a link click.</li>
          <li><strong>None:</strong> Cookies are sent in all contexts, including cross-site requests, such as when the website is loaded in an iframe or through a cross-site request.</li>
        </ul>
        <p>By using the "SameSite" attribute, developers can create web applications that are secure, reliable, and resilient to security threats and vulnerabilities, improving the overall quality and usability of the content.</p>  
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Basic Frontend',
    level: 0,
    question: 'What distinguishes margin from padding in CSS?',
    answer: 
      <>
        <p><strong>Margin</strong> is used to create space around an element, pushing adjacent elements away from the element. It provides a way to control the spacing between elements.</p>
        <p><strong>Padding</strong> is used to create space within an element, pushing the content of the element away from its edges. It provides a way to control the spacing between the content and the edges of the element.</p>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Basic Frontend',
    level: 0,
    question: 'Using CSS, how do you center an element both horizontally and vertically?',
    answer: 
      <>
        <p>To center an element both horizontally and vertically using CSS, you can use the following techniques:</p>
        <ul>
          <li><strong>Text-align:</strong>  The text-align property may be used to center the text within the element, and subsequently, the margin: auto attribute can be used to center the element itself. You can use the following CSS properties:
            <pre><div className={styles.appCode}>
{`.centeredElement {
  text-align: center;
}`}
            </div></pre>
          </li>
          <li><strong>Flexbox:</strong> The flex attribute may also be used to center an element both horizontally and vertically. This turns the element into a flex container, which implies that its children are automatically centered. The justify-content property determines how the flex container’s children are aligned horizontally, while the align-items property determines how the flex container’s children are positioned vertically.  You can use the following CSS properties:
            <pre><div className={styles.appCode}>
{`.centeredElement {
  display: flex;
  justify-content: center;
  align-items: center;
}
            `}</div></pre>
          </li>
          <li><strong>Grid:</strong> Use the CSS grid layout model to center an element both horizontally and vertically.  The CSS place-items shorthand property allows you to align items along both the block and inline directions at once (i.e. the align-items and justify-items properties). Set the margin property of the child element to auto. This will center the child element both horizontally and vertically within the parent container.You can use the following CSS properties:
            <pre><div className={styles.appCode}>
{`.container {
  display: grid;
  place-items: center;
}

.centeredElement {
  margin: auto;
}
            `}</div></pre>
          </li>
          <li><strong>Positioning and transform:</strong> The absolute property will position the element relative to its parent element, and then you can use the top and left properties to specify the exact position of the element. The top property specifies the top position of the element, and the left property specifies the left position of the element.  The transform property is used to apply a transformation to the element, and in this case, we are using it to translate the element by half its width and half its height. You can use the following CSS properties:
            <pre><div className={styles.appCode}>
{`.container {
  position: relative;
}
.centeredElement {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
`}</div></pre>
          </li>
        </ul>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Intermediate Frontend',
    level: 1,
    question: 'What is the box model in CSS, and how does it work?',
    answer: 
      <>
        <p>The box model is a fundamental concept in CSS that describes the layout and spacing of elements in web applications. It consists of four parts: content, padding, border, and margin. Each part of the box model provides a way to control the layout and spacing of elements, creating visually appealing and consistent designs.</p>
        <p>The <strong>content</strong> area is the actual content of the element, such as text, images, or other media. It is surrounded by the <strong>padding</strong> area, which provides space between the content and the border. The <strong>border</strong> area is a visible or invisible border around the padding, and it separates the padding from the margin. The <strong>margin</strong> area is the space outside the border, providing space between the element and adjacent elements.</p>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Intermediate Frontend',
    level: 1,
    question: 'What is the process for debugging code?',
    answer: 
      <>
        <p>The process for debugging code involves several techniques and best practices, such as:</p>
        <ul>
          <li><strong>Identify the problem:</strong> Identify and understand the problem by reproducing the issue and gathering information about its symptoms and causes.</li>
          <li><strong>Review the requirements/specifications:</strong> Review the Requirements or Specifications: Review the requirements or specifications and ensure that you know what the expected behavior of your code should be.</li>
          <li><strong>Reproduce the issue:</strong> Try to reproduce the problem consistently. Identify the specific inputs or conditions that trigger the bug. Reproducing the issue reliably is crucial for understanding and fixing the problem.</li>
          <li><strong>Isolate the problem:</strong> Isolate the problem by narrowing down the scope and identifying the root cause of the issue using debugging tools, print statements, or divide-and-conquer techniques.</li>
          <li><strong>Fix the problem:</strong> Fix the problem by implementing a solution and testing it to ensure that it resolves the issue.</li>
          <li><strong>Test the solution:</strong> Test the solution by validating that it resolves the issue and does not introduce new issues or regressions.</li>
          <li><strong>Document the solution:</strong> Document the solution by recording the problem, the root cause, and the solution, providing a way to share and access information about the issue and its resolution.</li>
        </ul>
        <p>By using these techniques and best practices, developers can create web applications that are reliable, resilient, and responsive to user interactions, improving the overall quality and usability of the content.</p>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Advanced Frontend',
    level: 2,
    question: 'What is the purpose of the viewport meta tag in HTML, and how is it used?',
    answer: 
      <>
        <p>The viewport meta tag is used in HTML to control the layout and scaling of web pages on different devices and screen sizes. It provides a way to create and maintain web applications that work well across a wide range of devices and screen sizes, improving the overall quality and usability of the content.</p>
        <p>The viewport meta tag has several key attributes:</p>
        <ul>
          <li><strong>Width:</strong> Set the width of the viewport to control the layout and scaling of web pages on different devices and screen sizes.</li>
          <li><strong>Initial-scale:</strong> Set the initial scale of the viewport to control the zoom level of web pages on different devices and screen sizes.</li>
          <li><strong>User-scalable:</strong> Control whether users can zoom in and out of web pages on different devices and screen sizes.</li>
          <li><strong>Minimum-scale:</strong> Set the minimum scale of the viewport to control the minimum zoom level of web pages on different devices and screen sizes.</li>
          <li><strong>Maximum-scale:</strong> Set the maximum scale of the viewport to control the maximum zoom level of web pages on different devices and screen sizes.</li>
        </ul>
        <p>By using the viewport meta tag, developers can create web applications that are visually appealing, consistent, and responsive to user interactions, improving the overall quality and usability of the content.</p>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Advanced Frontend',
    level: 2,
    question: 'What are some common SEO best practices for front-end developers to keep in mind?',
    answer: 
      <>
        <p>Some common SEO best practices for front-end developers to keep in mind include:</p>
        <ul>
          <li><strong>Optimize page titles and meta descriptions:</strong> Use relevant and descriptive page titles and meta descriptions to improve the visibility and ranking of web pages in search engine results.</li>
          <li><strong>Use semantic HTML:</strong> Use semantic HTML elements to provide clear and meaningful structure to web pages, improving the accessibility and usability of the content.</li>
          <li><strong>Optimize images:</strong> Use descriptive file names and alt attributes for images to improve the visibility and ranking of web pages in search engine results.</li>
          <li><strong>Use descriptive URLs:</strong> Use descriptive and keyword-rich URLs to improve the visibility and ranking of web pages in search engine results.</li>
          <li><strong>Improve page load speed:</strong> Optimize the performance and reliability of web pages to reduce the risk of errors and issues that affect the user experience and usability of the content.</li>
          <li><strong>JSON-LD:</strong> Use JSON-LD to provide structured data to search engines, improving the visibility and ranking of web pages in search engine results.
          </li>
        </ul>
        <p>By using these best practices, developers can create web applications that are visually appealing, consistent, and responsive to user interactions, improving the overall quality and usability of the content while optimizing the visibility and ranking of web pages in search engine results.</p>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Advanced Frontend',
    level: 2,
    question: 'What are the advantages and disadvantages of using a CSS preprocessor like Sass or Less?',
    answer: 
      <>
        <p>Using a CSS preprocessor like Sass or Less has several advantages and disadvantages:</p>
        <ul>
          <li><strong>Advantages:</strong>
            <ul>
              <li><strong>Modularity:</strong> Use modular architecture and dependency management to create and maintain large and complex codebases with minimal complexity and technical debt.</li>
              <li><strong>Scalability:</strong> Scale and extend web applications with minimal complexity and technical debt, providing a way to create and maintain large and complex codebases.</li>
              <li><strong>Reusability:</strong> Reuse and share frontend components and modules across different web applications and projects, reducing repetition and redundancy and improving maintainability and scalability.</li>
              <li><strong>Performance optimization:</strong> Optimize the performance and reliability of web applications to reduce the risk of errors and issues that affect the user experience and usability of the content.</li>
            </ul>
          </li>
          <li><strong>Disadvantages:</strong>
            <ul>
              <li><strong>Learning curve:</strong> There is a learning curve associated with using a CSS preprocessor, which may require time and effort to become proficient in using the tool effectively.</li>
              <li><strong>Complexity:</strong> Using a CSS preprocessor may introduce additional complexity and technical debt to the codebase, requiring careful management and maintenance to avoid issues and errors.</li>
              <li><strong>Performance overhead:</strong> Using a CSS preprocessor may introduce performance overhead, requiring careful optimization and testing to ensure that it does not affect the user experience and usability of the content.</li>
            </ul>
          </li>
        </ul>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Advanced Frontend',
    level: 2,
    question: 'How do you implement animations and transitions in CSS?',
    answer: 
      <>
        <p>Implementing animations and transitions in CSS involves several techniques and best practices, such as:</p>
        <ul>
          <li><strong>Transitions:</strong> Use the transition property to create smooth and gradual changes in the style of an element, such as its color, size, or position. You can use the following CSS properties:
            <pre><div className={styles.appCode}>
              {`.element {
  transition: property duration timing-function delay;
}`}
            </div></pre>
          </li>
          <li><strong>Keyframes:</strong> Use the @keyframes rule to define the animation sequence, specifying the style changes that occur at different points during the animation. You can use the following CSS properties:
            <pre><div className={styles.appCode}>
              {`@keyframes animation-name {
  0% { property: value; }
  100% { property: value; }
}

.element {
  animation: animation-name duration timing-function delay iteration-count direction fill-mode play-state;
}`}
            </div></pre>
          </li>
          <li><strong>Animation shorthand:</strong> Use the animation shorthand property to specify all the animation properties in a single declaration. You can use the following CSS properties:
            <pre><div className={styles.appCode}>
              {`.element {
  animation: name duration timing-function delay iteration-count direction fill-mode play-state;
}`}
            </div></pre>
          </li>
          <li><strong>Performance optimization:</strong> Optimize the performance and reliability of animations and transitions to reduce the risk of errors and issues that affect the user experience and usability of the content.</li>
        </ul>
        <p>By using these techniques and best practices, developers can create web applications that are visually appealing, consistent, and responsive to user interactions, improving the overall quality and usability of the content.</p>

      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Advanced Frontend',
    level: 2,
    question: 'What is the difference between responsive and adaptive design?',
    answer: 
      <>
        <p>The difference between responsive and adaptive design is:</p>
        <ul>
          <li><strong>Responsive design:</strong> Responsive design uses a fluid grid system and flexible layouts to adapt to different screen sizes and devices. It provides a way to create and maintain web applications that work well across a wide range of devices and screen sizes, improving the overall quality and usability of the content.</li>
          <li><strong>Adaptive design:</strong> Adaptive design uses predefined layouts and breakpoints to adapt to different screen sizes and devices. It provides a way to create and maintain web applications that work well across a wide range of devices and screen sizes, improving the overall quality and usability of the content.</li>
        </ul>
        <p>By using responsive and adaptive design, developers can create web applications that are visually appealing, consistent, and responsive to user interactions, improving the overall quality and usability of the content.</p>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Intermediate Frontend',
    level: 1,
    question: 'What are the differences between CSS grid layout and CSS flexbox? How do you decide which one to use?',
    answer: 
      <>
        <p>The differences between CSS grid layout and CSS flexbox are:</p>
        <ul>
          <li><strong>CSS grid layout:</strong> CSS grid layout is a two-dimensional layout system that allows you to create complex grid-based layouts with rows and columns. It provides a way to create and maintain web applications that work well across a wide range of devices and screen sizes, improving the overall quality and usability of the content.</li>
          <li><strong>CSS flexbox:</strong> CSS flexbox is a one-dimensional layout system that allows you to create flexible and responsive layouts with rows or columns. It provides a way to create and maintain web applications that work well across a wide range of devices and screen sizes, improving the overall quality and usability of the content.</li>
        </ul>
        <p>When deciding which one to use, consider the following:</p>
        <ul>
          <li><strong>Complexity:</strong> Use CSS grid layout for complex grid-based layouts with rows and columns, and use CSS flexbox for flexible and responsive layouts with rows or columns.</li>
          <li><strong>Compatibility:</strong> Use CSS grid layout for modern browsers and devices, and use CSS flexbox for older browsers and devices that do not support CSS grid layout.</li>
        </ul>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Intermediate Frontend',
    level: 1,
    question: 'What is the difference between HTML and XHTML?',
    answer: 
      <>
        <p>The difference between HTML and XHTML is:</p>
        <ul>
          <li><strong>HTML:</strong> HTML is a markup language that is used to create and maintain web pages and web applications. It provides a way to create and maintain web applications that work well across a wide range of devices and screen sizes, improving the overall quality and usability of the content.</li>
          <li><strong>XHTML:</strong> XHTML is a stricter and more structured version of HTML that is based on XML. It provides a way to create and maintain web applications that work well across a wide range of devices and screen sizes, improving the overall quality and usability of the content.</li>
        </ul>  
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Intermediate Frontend',
    level: 1,
    question: 'In CSS, what is a reset?',
    answer: 
      <>
        <p>In CSS, a reset refers to a set of CSS rules designed to override the default styles applied by web browsers to HTML elements, ensuring a consistent baseline style across different browsers. A reset typically targets common HTML elements and removes default margins, paddings, font styles, and other browser-specific styles.  For example:</p>
        <pre><div className={styles.appCode}>
          {`/* Reset styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}`}
        </div></pre>
        <p><strong>In the above example:</strong></p>
          <ul>
            <li><strong>margin: 0;</strong> removes the default margin of all HTML elements.</li>
            <li><strong>padding: 0;</strong> removes the default padding of all HTML elements.</li>
            <li><strong>box-sizing: border-box;</strong> sets the box-sizing property of all HTML elements to border-box, which includes the padding and border in the element's total width and height.</li>
          </ul>
        <p><strong>Example of when a reset would be used:</strong></p>
        <p>When building a website or web application, developers may encounter inconsistencies in default styling across different browsers. To ensure a consistent and predictable layout and appearance, they might use a CSS reset at the beginning of their stylesheets. This reset clears out any browser-specific styles, allowing developers to apply their own styles consistently across all browsers. Popular CSS resets include Normalize.css and Reset CSS.</p>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Advanced Frontend',
    level: 2,
    question: 'What is a task runner?',
    answer: 
      <>
        <p>A task runner is a tool used in frontend development to automate repetitive tasks, such as compiling, minifying, and optimizing code, to improve the overall quality and usability of web applications. It provides a way to create and maintain web applications with minimal complexity and technical debt. For example:</p>
        <pre><div className={styles.appCode}>
          {`// Example using Gulp
const gulp = require('gulp');
const sass = require('gulp-sass');
const minify = require('gulp-minify');

gulp.task('styles', () => {
  return gulp.src('src/styles/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/styles'));
}

gulp.task('scripts', () => {
  return gulp.src('src/scripts/**/*.js')
    .pipe(minify())
    .pipe(gulp.dest('dist/scripts'));
}

gulp.task('default', gulp.parallel('styles', 'scripts'));
`}
        </div></pre>
        <p>In the above example, Gulp is used as a task runner to automate the compilation and minification of Sass and JavaScript files, improving the overall quality and usability of the content.</p>
        <p>Task runners can reduce the amount of time spent on repetitive tasks, automate tedious and error-prone tasks, and make it easier to manage the development process.</p>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Intermediate Frontend',
    level: 1,
    question: 'What are the differences between inline, embedded, and external stylesheets?',
    answer: 
      <>
        <p>The differences between inline, embedded, and external stylesheets are:</p>
        <ul>
          <li><strong>Inline styles:</strong> Inline styles are applied directly to individual HTML elements using the style attribute. They provide a way to create and maintain web applications with minimal complexity and technical debt. For example:
            <pre><div className={styles.appCode}>
              {`<div style="color: red;">This is a red text.</div>`}
            </div></pre>
          </li>
          <li><strong>Embedded styles:</strong> Embedded styles are defined within the {`<style>`} element in the {`<head>`} section of an HTML document. They provide a way to create and maintain web applications with minimal complexity and technical debt. For example:
            <pre><div className={styles.appCode}>
              {`<style>
  div {
    color: red;
  }

  p {
    font-size: 16px;
  }

  /* ... */
</style>`}
            </div></pre>
          </li>
          <li><strong>External stylesheets:</strong> External stylesheets are defined in separate CSS files and linked to HTML documents using the {`<link>`} element. They provide a way to create and maintain web applications with minimal complexity and technical debt. For example:
            <pre><div className={styles.appCode}>
              {`<link rel="stylesheet" href="styles.css">`}
            </div></pre>
          </li>
        </ul>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Advanced Frontend',
    level: 2,
    question: 'What are the critical rendering paths in a web browser?',
    answer: 
      <>
        <p>The critical rendering paths in a web browser are:</p>
        <ul>
          <li><strong>HTML parsing:</strong> The browser parses the HTML document received from the server and constructs the Document Object Model (DOM), which represents the structure of the webpage.</li>
          <li><strong>CSS parsing and style computation:</strong> The browser parses the CSS stylesheets linked to the HTML document and constructs the CSS Object Model (CSSOM), which defines the styles applied to each element in the DOM.</li>
          <li><strong>Render Tree Construction:</strong> The browser combines the DOM and CSSOM to create the render tree, a representation of the visual elements on the page that need to be displayed.</li>
          <li><strong>Layout (Reflow)</strong> The browser calculates the position and size of each element in the render tree and determines their placement on the screen. This process is also known as reflow or layout.</li>
          <li><strong>Painting:</strong> The browser paints the pixels of the elements onto the screen based on their computed styles and layout information.</li>
        </ul>
        <p>The order of execution of these steps can vary depending on the browser and the specific optimizations implemented by the browser engine. However, in general, the critical rendering path follows a predictable sequence:</p>
        <ol>
          <li><strong>HTML parsing:</strong> The browser starts parsing the HTML document as soon as it receives it from the server. Parsing typically begins from the top of the document and proceeds sequentially until the end.</li>
          <li><strong>CSS parsing and style computation:</strong> CSS parsing and styling occur in parallel with HTML parsing. As soon as a CSS stylesheet is fetched, the browser begins parsing it and constructing the CSSOM. CSS rules are applied to elements in the DOM as soon as they are encountered during HTML parsing.</li>
          <li><strong>Render Tree Construction:</strong> Once the DOM and CSSOM are constructed, the browser combines them to create the render tree. This process involves matching CSS rules to DOM elements and determining which elements need to be displayed on the screen.</li>
          <li><strong>Layout (Reflow)</strong> After the render tree is constructed, the browser performs layout calculations to determine the position and size of each element on the screen. Layout can be triggered by changes to the DOM or CSS that affect the layout of elements.</li>
          <li><strong>Painting:</strong> Finally, the browser paints the pixels of the elements onto the screen based on their computed styles and layout information. Painting occurs in a sequence determined by the z-index and stacking context of elements.</li>
        </ol>
        <p>Optimizations such as incremental rendering and speculative parsing may further alter the order of execution or introduce parallelism to speed up the rendering process.</p>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Advanced Frontend',
    level: 2,
    question: 'What are service workers and how can you leverage them in a web application?',
    answer: 
      <>
        <p>Service workers act as proxy servers that sit between web applications, the browser, and the network (when available). They are capable of caching or retrieving resource requests, handling push notifications and synchronizing data in the background. You can leverage service workers to create offline-first experiences, cache critical resources to improve performance, and enable the installation of web apps on the home screen. They can be used to:</p>
        <ul>
          <li><strong>Cache assets:</strong> Cache assets such as HTML, CSS, JavaScript, and images to improve the performance and reliability of web applications.</li>
          <li><strong>Handle network requests:</strong> Intercept and handle network requests to provide offline support and improve the reliability of web applications.</li>
          <li><strong>Push notifications:</strong> Send push notifications to users to improve the responsiveness and usability of web applications.</li>
          <li><strong>Background sync:</strong> Perform background sync operations to improve the reliability and resilience of web applications.</li>
        </ul>
        <p>By using service workers, developers can create web applications that are reliable, resilient, and responsive to user interactions, improving the overall quality and usability of the content.</p>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Intermediate Frontend',
    level: 1,
    question: 'How would you debug JavaScript code in the browser?',
    answer: 
      <>
        <p>To debug JavaScript code in the browser, you can use the following techniques:</p>
        <ul>
          <li><strong>Console.log:</strong> Use the console.log method to log messages, variables, and objects to the console to inspect and debug JavaScript code.</li>
          <li><strong>Debugger statement:</strong> Use the debugger statement to set breakpoints in JavaScript code and inspect and debug the code using the browser's developer tools.</li>
          <li><strong>Developer tools:</strong> Use the browser's developer tools to inspect and debug JavaScript code, including the console, sources, network, performance, and memory tabs.</li>
          <li><strong>Source maps:</strong> Use source maps to map minified or transpiled JavaScript code back to its original source code, making it easier to inspect and debug the code using the browser's developer tools.</li>
        </ul>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Advanced Frontend',
    level: 2,
    question: 'What is the difference between progressive enhancement and graceful degradation?',
    answer: 
      <>
        <p>Both provide a way to create and maintain web applications that work well across a wide range of devices and screen sizes, improving the overall quality and usability of the content.  The difference between progressive enhancement and graceful degradation is:</p>
        <ul>
          <li><strong>Progressive enhancement:</strong> Progressive enhancement is a web design strategy that starts with a basic, functional web page and then adds advanced features and functionality for users with modern browsers and devices. </li>
          <li><strong>Graceful degradation:</strong> Graceful degradation is a web design strategy that starts with a fully-featured, advanced web page and then removes features and functionality for users with older browsers and devices.</li>
        </ul>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Advanced Frontend',
    level: 2,
    question: 'What is the difference between HTTP/1.1, HTTP/2 and HTTP/3?',
    answer: 
      <>
        <p>The difference between HTTP/1.1, HTTP/2, and HTTP/3 is:</p>
        <ul>
          <li><strong>HTTP/1.1:</strong> HTTP/1.1 is the first version of the Hypertext Transfer Protocol (HTTP) introduced in 1997 and is based on a request-response model. It provides a way to create and maintain web applications that work well across a wide range of devices and screen sizes, improving the overall quality and usability of the content.</li>
          <li><strong>HTTP/2:</strong> HTTP/2 is the second version of the Hypertext Transfer Protocol (HTTP) introduced in 2015 and is based on a binary framing layer. It provides a way to create and maintain web applications that work well across a wide range of devices and screen sizes, improving the overall quality and usability of the content.</li>
          <li><strong>HTTP/3:</strong> HTTP/3 is the third version of the Hypertext Transfer Protocol (HTTP) introduced in 2022 and is based on the QUIC protocol. It provides a way to create and maintain web applications that work well across a wide range of devices and screen sizes, improving the overall quality and usability of the content.</li>
        </ul>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Advanced Frontend',
    level: 2,
    question: 'What does SOLID stand for?',
    answer: 
      <>
        <p>SOLID is an acronym of object-oriented design principles that stands for:</p>
        <ul>
          <li><strong>Single Responsibility Principle (SRP):</strong> A class should have
            only one reason to change, meaning that it should only have one job or responsibility.</li>
          <li><strong>Open/Closed Principle (OCP):</strong> Software entities should be open for extension but closed for modification, meaning that they should be easily extendable without modifying their source code.</li>
          <li><strong>Liskov Substitution Principle (LSP):</strong> Objects in a program should be replaceable with instances of their subtypes without altering the correctness of the program.</li>
          <li><strong>Interface Segregation Principle (ISP):</strong> A client should never be forced to implement an interface that it doesn't use, meaning that interfaces should be specific to the needs of the client.</li>
          <li><strong>Dependency Inversion Principle (DIP):</strong> High-level modules should not depend on low-level modules, but both should depend on abstractions, meaning that the dependency should be on abstractions, not concretions.</li>
        </ul>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Advanced Frontend',
    level: 2,
    question: 'What is clickjacking and how can it be prevented?',
    answer: 
      <>
        <p>Clickjacking is a malicious technique used by attackers to trick users into clicking on a disguised or invisible element on a web page. It can be prevented by:</p>
        <ul>
          <li><strong>Frame busting:</strong> Use the X-Frame-Options header to prevent a web page from being embedded in a frame or iframe, reducing the risk of clickjacking attacks.</li>
          <li><strong>Content Security Policy (CSP):</strong> Use the Content Security Policy (CSP) header to control the sources of content that can be loaded on a web page, reducing the risk of clickjacking attacks.</li>
          <li><strong>Frame-ancestors directive:</strong> Use the frame-ancestors directive in the Content Security Policy (CSP) header to control the origins that can embed a web page in a frame or iframe, reducing the risk of clickjacking attacks.</li>
        </ul>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Intermediate Frontend',
    level: 1,
    question: 'What is srcset and how is it used in HTML?',
    answer: 
      <>
        <p>The srcset attribute in HTML is used to specify a set of image sources and their corresponding sizes for responsive images. It provides a way to create and maintain web applications that work well across a wide range of devices and screen sizes, improving the overall quality and usability of the content. For example:</p>
        <pre><div className={styles.appCode}>
          {`<img src="image.jpg" srcset="image-2x.jpg 2x, image-3x.jpg 3x" alt="Image description">`}
        </div></pre>
        <p>In the above example, the srcset attribute specifies a set of image sources and their corresponding sizes for the image element, allowing the browser to choose the most appropriate image source based on the device's pixel density.</p>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Basic Frontend',
    level: 0,
    question: 'What is a marquee in HTML?',
    answer: 
      <>
        <p>A marquee in HTML is an element that creates a scrolling effect for text or images. It provides a way to create and maintain web applications with minimal complexity and technical debt. For example:</p>
        <pre><div className={styles.appCode}>
          {`<marquee behavior="scroll" direction="left">This is a scrolling text.</marquee>`}
        </div></pre>
        <p>In the above example, the marquee element creates a scrolling effect for the text, moving it from right to left across the screen.</p>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Basic Frontend',
    level: 1,
    question: 'What is the box sizing property in CSS?',
    answer: 
      <>
        <p>The box-sizing property in CSS is used to control the content-box or border-box model for an element. It provides a way to create and maintain web applications with minimal complexity and technical debt.</p>
        <ul>
          <li><strong>Content-box:</strong> The width and height of the element are calculated based on the content, padding, and border of the element. For example:
            <pre><div className={styles.appCode}>
              {`.element {
  box-sizing: content-box;
}`}
            </div></pre>
          </li>
          <li><strong>Border-box:</strong> The width and height of the element are calculated based on the content and padding of the element, and the border is included in the width and height of the element. For example:
            <pre><div className={styles.appCode}>
              {`.element {
  box-sizing: border-box;
}`}
            </div></pre>
          </li>
          <li><strong>Padding-box:</strong> The width and height of the element are calculated based on the content and border of the element, and the padding is included in the width and height of the element. For example:
            <pre><div className={styles.appCode}>
              {`.element {
  box-sizing: padding-box;
}`}
            </div></pre>
          </li>
        </ul>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Intermediate Frontend',
    level: 1,
    question: 'What are the different ways to hide an Element using CSS?',
    answer: 
      <>
        <p>There are several ways to hide an element using CSS:</p>
        <ul>
          <li><strong>Display property:</strong> Use the display property to hide an element by setting its value to none. For example:
            <pre><div className={styles.appCode}>
              {`.element {
  display: none;
}`}
            </div></pre>
          </li>
          <li><strong>Visibility property:</strong> Use the visibility property to hide an element by setting its value to hidden. For example:
            <pre><div className={styles.appCode}>
              {`.element {
  visibility: hidden;
}`}
            </div></pre>
          </li>
          <li><strong>Opacity property:</strong> Use the opacity property to hide an element by setting its value to 0. For example:
            <pre><div className={styles.appCode}>
              {`.element {
  opacity: 0;
}`}
            </div></pre>
          </li>
          <li><strong>Height and width properties:</strong> Use the height and width properties to hide an element by setting their values to 0. For example:
            <pre><div className={styles.appCode}>
              {`.element {
  height: 0;
  width: 0;
}`}
            </div></pre>
          </li>
          <li><strong>Position property:</strong> Use the position property to hide an element by setting its value to absolute or fixed and moving it off-screen. For example:
            <pre><div className={styles.appCode}>
              {`.element {
  position: absolute;
  left: -9999px;
}`}
            </div></pre>
          </li>
        </ul>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Basic Frontend',
    level: 0,
    question: 'What does !important in CSS mean?',
    answer: 
      <>
        <p>The !important rule in CSS is used to give a style precedence over other styles. It provides a way to create and maintain web applications with minimal complexity and technical debt. For example:</p>
        <pre><div className={styles.appCode}>
          {`.element {
  color: red !important;
}`}
        </div></pre>
        <p>In the above example, the color property is given precedence over other styles by using the !important rule, ensuring that the text color of the element is red.</p>
        <p>It is important to use the !important rule sparingly, as it can make it difficult to override styles and maintain the codebase.</p>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Intermediate Frontend',
    level: 1,
    question: 'What are CSS sprites?',
    answer: 
      <>
        <p>CSS sprites are a technique used in web development to combine multiple images into a single image file and then use CSS to display specific parts of that image as background images for different elements on a webpage. This approach helps reduce the number of HTTP requests required to load multiple images, thus improving page loading times and performance. For example:</p>
        <p><strong>HTML</strong></p>
        <pre><div className={styles.appCode}>
          {`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Sprites Example</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="icon icon-facebook"></div>
  <div class="icon icon-twitter"></div>
  <div class="icon icon-instagram"></div>
</body>
</html>
`}
        </div></pre>
        <p><strong>CSS</strong></p>
        <pre><div className={styles.appCode}>
          {`.icon {
  width: 50px;
  height: 50px;
  background-image: url('sprites.png'); /* Path to the sprite image */
  background-repeat: no-repeat;
}

.icon-facebook {
  background-position: 0 0; /* Position of the Facebook icon within the sprite */
}

.icon-twitter {
  background-position: -50px 0; /* Position of the Twitter icon within the sprite */
}

.icon-instagram {
  background-position: -100px 0; /* Position of the Instagram icon within the sprite */
}
`}
        </div></pre>
        <p>In this example, we have three {`<div>`} elements with the class icon, each representing a social media icon (Facebook, Twitter, Instagram). We use CSS to set the dimensions of the icons and apply the sprite image (sprites.png) as the background image for each icon. By adjusting the background-position, we display the specific part of the sprite containing the desired icon for each element. This way, we achieve the effect of displaying multiple images using a single sprite image</p>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Basic Frontend',
    level: 0,
    question: 'Which Property is used to Underline, Strikethrough, and Overline Text?',
    answer: 
      <>
        <p>The text-decoration property in CSS is used to underline, strikethrough, and overline text. For example:</p>
        <pre><div className={styles.appCode}>
          {`.underline {
  text-decoration: underline;
}

.strikethrough {
  text-decoration: line-through;
}

.overline {
  text-decoration: overline;
}`}
        </div></pre>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Basic Frontend',
    level: 0,
    question: 'Define HTML meta tags.',
    answer: 
      <>
        <p>HTML meta tags are used to provide metadata about an HTML document. They provide a way to create and maintain web applications with minimal complexity and technical debt. For example:</p>
        <pre><div className={styles.appCode}>
          {`<meta charset="UTF-8">
<meta name="description" content="Description of the web page">
<meta name="keywords" content="keyword1, keyword2, keyword3">
<meta name="author" content="Author Name">
<meta name="viewport" content="width=device-width, initial-scale=1.0">`}
        </div></pre>
        <p>In the above example, the meta tags are used to provide metadata about the HTML document, improving the overall quality and usability of the content.</p>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Basic Frontend',
    level: 0,
    question: 'What is the difference between a div and a span?',
    answer: 
      <>
        <p>The difference between a div and a span is:</p>
        <ul>
          <li><strong>Div:</strong> A div is a block-level element that is used to group and style content.</li>
          <li><strong>Span:</strong> A span is an inline element that is used to style content within a block-level element.</li>
        </ul>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Intermediate Frontend',
    level: 1,
    question: 'What does "runtime" mean?',
    answer: 
      <>
        <p>In software engineering, "runtime" refers to the period during which a program or application is executing or running on a computer or a computing environment. It encompasses the entire duration from when the program starts running to when it terminates or exits.  Here's a breakdown of what "runtime" typically involves:</p>
        <ol>
          <li><strong>Execution Phase:</strong> Runtime encompasses the time when the compiled or interpreted code of a program is being executed by the computer's CPU (Central Processing Unit) or virtual machine. This includes the actual processing of instructions, data manipulation, and interactions with the operating system and other system resources.</li>
          <li><strong>Dynamic Behavior:</strong> During runtime, the program may exhibit dynamic behavior, meaning it can respond to various inputs, events, and conditions that arise while it's running. This includes handling user interactions, responding to external stimuli (like network requests or file I/O), and adapting to changing runtime conditions.</li>
          <li><strong>Memory Management:</strong> Runtime also involves memory allocation and deallocation, where the program dynamically allocates memory for variables, data structures, and objects as needed, and releases memory when it's no longer required. This includes managing heap memory (for dynamically allocated memory) and stack memory (for function calls and local variables).</li>
          <li><strong>Resource Management:</strong> In addition to memory, runtime involves managing other system resources such as file handles, network connections, and input/output streams. Proper resource management is crucial to ensure efficient utilization of system resources and prevent resource leaks or exhaustion.</li>
          <li><strong>Error Handling and Exception Handling:</strong> During runtime, the program may encounter errors, exceptions, or unexpected conditions. Runtime environments typically provide mechanisms for error detection, handling, and recovery, such as exception handling constructs (try-catch blocks) and runtime error reporting.</li>
          <li><strong>Runtime Environment:</strong> The runtime environment includes the software infrastructure and services required for executing the program, such as the operating system, runtime libraries, virtual machines (in interpreted or bytecode-based languages), and other runtime components specific to the programming language or framework.</li>
        </ol>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Advanced Frontend',
    level: 2,
    question: 'What is an example of serverless architecture and when would be used?',
    answer: 
      <>
        <p>An example of serverless architecture is a serverless function, often implemented using platforms like AWS Lambda, Google Cloud Functions, or Azure Functions. In this architecture, the developer writes functions that are triggered by specific events and are executed in stateless compute containers provided by the cloud provider. These functions are short-lived and are only charged for the actual compute time consumed.  Here's a hypothetical example of a serverless architecture:</p>
        <p>Let's say you're developing a web application where users can upload images, and you want to automatically generate thumbnails for these images when they are uploaded. You could implement this using a serverless architecture:</p>
        <ol>
          <li><strong>Image Upload:</strong> When a user uploads an image to the application, the client sends the image to a serverless function endpoint.</li>
          <li><strong>Serverless Function Trigger:</strong> The serverless function is triggered by the upload event.</li>
          <li><strong>Thumbnail Generation:</strong> The serverless function receives the uploaded image, generates a thumbnail using image processing libraries like ImageMagick or Pillow, and stores the thumbnail in a storage service like Amazon S3 or Google Cloud Storage.</li>
          <li><strong>Response:</strong> Once the thumbnail generation is complete, the serverless function sends a response back to the client, indicating the success of the operation.</li>
        </ol>
        <p>When to use serverless architecture:</p>
        <ul>
          <li><strong>Event-Driven Workloads:</strong> Serverless architecture is well-suited for event-driven workloads where there are sporadic or unpredictable bursts of activity, such as processing user uploads, handling webhook events, or responding to IoT sensor data.</li>
          <li><strong>Scalability:</strong> Serverless functions automatically scale based on the incoming workload, allowing you to handle varying levels of traffic without managing server infrastructure.</li>
          <li><strong>Cost Efficiency:</strong> With serverless architecture, you only pay for the compute time consumed by your functions, making it cost-effective for workloads with irregular or low traffic patterns. There are no upfront costs or charges for idle resources.</li>
          <li><strong>Simplified Operations:</strong> Serverless architecture abstracts away server management tasks such as provisioning, scaling, and maintenance, allowing developers to focus on writing application logic rather than managing infrastructure.</li>
          <li><strong>Microservices:</strong> Serverless functions can be used as building blocks for implementing microservices architectures, where each function performs a specific task or operation, leading to modular, loosely coupled systems.</li>
          <li><strong>Prototyping and Rapid Development:</strong> Serverless architecture enables rapid prototyping and experimentation, as developers can quickly deploy and iterate on functions without worrying about infrastructure setup or management.</li>
        </ul>
        <p>Overall, serverless architecture is beneficial for scenarios where you need scalable, cost-effective, and event-driven execution of code, with minimal operational overhead.</p>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Advanced Frontend',
    level: 2,
    question: 'What is an example of Progressive Web Apps (PWAs) and what are good use cases for this approach?',
    answer: 
      <>
        <p>An example of a Progressive Web App (PWA) could be a news website that offers offline access to articles, push notifications for breaking news, and a fast, app-like user experience on both desktop and mobile devices.  Here's how this example PWA might work and when it would be used:</p>
        <ul>
          <li><strong>Offline Access to Content:</strong> Users can browse articles even when they're offline or have a slow or unreliable internet connection. The PWA caches previously visited articles and assets, allowing users to access content offline, which is especially useful for commuters or users in areas with poor network coverage.</li>
          <li><strong>Responsive Design:</strong> The PWA is designed to be responsive and provide a consistent user experience across different devices and screen sizes, including desktops, smartphones, and tablets.</li>
          <li><strong>Fast and Smooth Performance:</strong> The PWA leverages modern web technologies like service workers and client-side caching to deliver fast loading times and smooth navigation, giving users an app-like experience without the need to install a native app.</li>
          <li><strong>Push Notifications:</strong> Users can opt-in to receive push notifications for breaking news or important updates from the news website, even when they're not actively browsing the site. This helps to keep users engaged and informed, similar to how native mobile apps utilize push notifications.</li>
          <li><strong>Add to Home Screen:</strong> Users have the option to add the PWA to their device's home screen, enabling quick access to the news website without the need to open a browser and type in the URL. This enhances user convenience and encourages regular engagement with the app.</li>
        </ul>
        <p>When would a PWA be used?</p>
        <ul>
          <li><strong>Low Friction Installation:</strong> PWAs are suitable for scenarios where you want users to access your app quickly and easily without the friction of traditional app store downloads and installations. This is particularly beneficial for content-focused websites, e-commerce platforms, and utility apps.</li>
          <li><strong>Cross-Platform Compatibility:</strong> PWAs are a cost-effective solution for reaching users across different platforms (desktop, mobile, tablet) with a single codebase, making them ideal for businesses that want to provide a consistent experience across multiple devices.</li>
          <li><strong>Improved Performance:</strong> If performance and speed are critical for your application, PWAs offer advantages such as faster loading times, smooth navigation, and offline access, making them suitable for use cases where users expect a snappy and responsive experience, such as news websites, social media platforms, and productivity tools.</li>
          <li><strong>Engagement and Retention:</strong> PWAs can help increase user engagement and retention through features like push notifications, offline access, and add-to-home screen capabilities, making them a compelling choice for businesses looking to enhance user loyalty and drive repeat visits.</li>
        </ul>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Advanced Frontend',
    level: 2,
    question: 'What is WebAssembly and when would it be used (give an example)?',
    answer: 
      <>
        <p>
WebAssembly (Wasm) is a binary instruction format that enables execution of code at near-native speed in web browsers. It is designed to be a compilation target for high-level languages like C/C++, Rust, and others, allowing developers to run performance-sensitive code directly in the browser.</p>
        <p><strong>For example:</strong> A web-based video editing application that requires real-time processing of large video files.</p>
        <p><strong>Usage:</strong></p>
        <ul>
          <li><strong>Performance:</strong> WebAssembly would be used in this scenario to offload performance-critical tasks, such as video encoding, decoding, or image processing, to the client's browser. These tasks often require significant computational power and can benefit from the speed and efficiency of WebAssembly.</li>
          <li><strong>Near-Native Performance:</strong> By compiling performance-sensitive parts of the video editing application to WebAssembly, developers can achieve near-native performance, enabling smooth and responsive user experiences, even when working with large video files.</li>
          <li><strong>Portability:</strong> WebAssembly allows developers to write code in languages like C/C++ or Rust, which are traditionally used for performance-critical applications, and compile it to run in the browser. This enables code reuse and portability across different platforms, as the same WebAssembly module can run in any browser that supports it, regardless of the underlying architecture.</li>
          <li><strong>Security:</strong> WebAssembly executes in a sandboxed environment within the browser, providing a layer of security by preventing direct access to system resources. This makes it suitable for running untrusted code, such as third-party plugins or extensions, without compromising the security of the user's device.</li>
          <li><strong>Improved User Experience:</strong> By leveraging WebAssembly for performance-critical tasks, the video editing application can provide a seamless and interactive user experience, with features like real-time video playback, instant previewing of edits, and responsive user interfaces.</li>
        </ul>
        <p>Overall, WebAssembly is used in scenarios where performance, portability, and security are important considerations, enabling developers to bring computationally intensive applications, traditionally confined to desktop environments, to the web with near-native performance.</p>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Advanced Frontend',
    level: 2,
    question: 'What is headless CMS and when would it be used (give an example)?',
    answer: 
      <>
        <p>A headless CMS (Content Management System) is a backend-only content management system that provides content authoring, storage, and delivery via APIs (Application Programming Interfaces). Unlike traditional CMS platforms, which often come with built-in frontend templates and presentation layers, a headless CMS focuses solely on content management, leaving the presentation layer entirely up to the developers.</p>
        <p><strong>Example:</strong> A company wants to build a multi-channel content platform where content can be managed centrally and delivered to various platforms such as websites, mobile apps, IoT devices, and digital signage.</p>
        <p><strong>Usage:</strong></p>
        <ul>
          <li><strong>Multi-Channel Content Delivery:</strong> A headless CMS would be used in this scenario to manage content centrally, allowing content editors to create, update, and organize content in a single interface. The content can then be delivered dynamically to different channels and devices via APIs.</li>
          <li><strong>Flexibility and Customization:</strong> With a headless CMS, developers have the flexibility to build custom frontend experiences tailored to each platform or channel. They can use their preferred frontend frameworks (such as React, Vue.js, or Angular) to consume content from the CMS and design unique user interfaces optimized for specific devices or use cases.</li>
          <li><strong>Scalability:</strong> Headless CMS platforms are designed to scale horizontally to handle large volumes of content and traffic. They can easily accommodate growing content needs and spikes in traffic without impacting performance or reliability.</li>
          <li><strong>Future-Proofing:</strong> By decoupling the content management backend from the presentation layer, organizations can future-proof their content infrastructure. They can adapt to new technologies, platforms, and user experiences without the need to migrate or restructure their content management system.</li>
          <li><strong>Integration with Third-Party Services:</strong> Headless CMS platforms often offer extensive integration capabilities, allowing developers to connect to third-party services for additional functionality such as e-commerce, analytics, marketing automation, or personalization.</li>
          <li><strong>Developer Experience:</strong> Headless CMS platforms typically provide developer-friendly APIs and SDKs (Software Development Kits) that streamline the process of integrating content into applications. Developers can focus on building engaging user experiences without being constrained by the limitations of a monolithic CMS.</li>
        </ul>
        <p>Overall, a headless CMS is used in scenarios where organizations require flexibility, scalability, and multi-channel content delivery capabilities. It empowers developers to create customized, omnichannel experiences while simplifying content management and streamlining workflows for content editors.</p>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Advanced Frontend',
    level: 2,
    question: 'What are static site generators and when would they be used (give an example)?',
    answer: 
      <>
        <p>Static site generators (SSGs) are tools that generate static HTML files from templates and content, typically written in markup or a templating language. Unlike traditional dynamic websites, which generate web pages dynamically in response to each user request, static sites serve pre-rendered HTML files to users, resulting in faster load times and improved security.</p>
        <p><strong>Example:</strong> A personal blog where the content is primarily text-based articles with occasional images and code snippets.</p>
        <p><strong>Usage:</strong></p>
        <ul>
          <li><strong>Simplicity and Performance:</strong> A static site generator would be used in this scenario to create a lightweight, fast-loading website. Since the blog primarily consists of static content (text articles, images, code snippets), there is no need for server-side processing or database queries. Generating static HTML files allows for faster page loads and better performance, especially for users with slower internet connections or limited bandwidth.</li>
          <li><strong>Ease of Maintenance:</strong> With a static site generator, content authors can write blog posts using simple markup languages like Markdown or reStructuredText. The generator then converts these plain-text files into HTML pages during the build process. This simplifies the content creation and publishing workflow, as authors can focus on writing content without worrying about complex content management systems or database interactions.</li>
          <li><strong>Security:</strong> Static sites are inherently more secure than dynamic sites because there is no server-side code execution or database interaction. Since static sites consist only of HTML, CSS, and JavaScript files, there are fewer attack vectors for malicious actors to exploit. This makes static site generators a suitable choice for websites that prioritize security and want to minimize the risk of vulnerabilities.</li>
          <li><strong>Version Control and Collaboration:</strong> Static site generators often integrate well with version control systems like Git. Content files, templates, and configuration are stored as text files in a Git repository, allowing for easy versioning, collaboration, and rollback of changes. Multiple authors can collaborate on content creation, review changes using pull requests, and maintain a complete history of revisions.</li>
          <li><strong>Scalability and Reliability:</strong> Static sites are highly scalable and reliable, as they can be served from content delivery networks (CDNs) or simple web servers without the need for complex server configurations or scaling mechanisms. This makes them suitable for websites with fluctuating traffic patterns or those expecting sudden spikes in visitors.</li>
        </ul>
        <p>Overall, static site generators are used in scenarios where simplicity, performance, security, and ease of maintenance are paramount. They are particularly well-suited for blogs, documentation sites, portfolios, landing pages, and other content-focused websites that do not require dynamic content generation or server-side processing.</p>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Advanced Frontend',
    level: 2,
    question: 'What are low-code and no-code platforms and when would they be used (give an example)?',
    answer: 
      <>
        <p>Low-code and no-code platforms are tools and platforms that enable users to build software applications with minimal or no hand-coding required. These platforms typically provide visual development interfaces, drag-and-drop components, and pre-built templates to streamline the application development process.</p>
        <p><strong>Example:</strong> A small business wants to create a custom web application to manage their inventory and sales tracking.</p>
        <p><strong>Usage:</strong></p>
        <ul>
          <li><strong>Rapid Application Development:</strong> A low-code or no-code platform would be used in this scenario to quickly build and deploy the required application without extensive coding or development expertise. Business users or citizen developers can use visual interfaces and pre-built components to assemble the application logic, forms, and workflows, significantly reducing the time and effort required to develop the application.</li>
          <li><strong>Customization and Flexibility:</strong> Low-code and no-code platforms offer a high degree of customization and flexibility, allowing users to tailor the application to their specific business requirements. Users can easily modify existing templates, add new features, or integrate with external systems using built-in connectors and APIs, without the need for deep technical knowledge or coding skills.</li>
          <li><strong>Cost-Effectiveness:</strong> Building applications with low-code or no-code platforms can be more cost-effective compared to traditional software development approaches. Since these platforms automate many aspects of the development process and require fewer resources, businesses can save on development costs, time-to-market, and ongoing maintenance expenses.</li>
          <li><strong>Empowering Citizen Developers:</strong> Low-code and no-code platforms empower non-technical users, often referred to as citizen developers, to take an active role in application development. Business users, subject matter experts, and departmental teams can contribute to building and iterating on applications, reducing reliance on IT departments and accelerating innovation within the organization.</li>
          <li><strong>Iterative Development and Prototyping:</strong> These platforms support iterative development and rapid prototyping, allowing users to quickly create prototypes, gather feedback, and iterate on the application based on user input. This iterative approach enables businesses to adapt to changing requirements, market conditions, and user needs more effectively.</li>
          <li><strong>Examples of Low-code/No-code Platforms:</strong> Examples of low-code and no-code platforms include Microsoft Power Apps, Salesforce Lightning Platform, Google App Maker, Mendix, OutSystems, and Bubble. These platforms offer a range of features and capabilities for building web and mobile applications, workflow automation, data visualization, and more, catering to different use cases and industries.</li>
        </ul>
        <p>Overall, low-code and no-code platforms are used in scenarios where businesses need to quickly build custom software applications, address specific business needs, and empower non-technical users to participate in the development process, all while minimizing costs and technical complexity.</p>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Advanced Frontend',
    level: 2,
    question: 'What is modularity and how is it different from component-based architecture?',
    answer: 
      <>
        <p><strong>Modularity</strong> in software engineering refers to the practice of breaking down a system into smaller, self-contained units or modules, each responsible for a specific function or feature. These modules encapsulate related functionality, data, and behavior, allowing for easier development, testing, maintenance, and reuse of code. Modularity promotes code organization, scalability, and flexibility, as changes or updates to one module can be made independently without affecting other parts of the system. It also facilitates collaboration among developers, as teams can work on different modules concurrently while maintaining clear interfaces and dependencies between them.</p>
        <p><strong>Component-based architecture</strong>, on the other hand, involves building software systems using pre-defined, reusable components that can be assembled to create larger applications. While modularity focuses on organizing code into cohesive units, component-based architecture emphasizes the use of pre-built, interchangeable components to construct complex systems.</p>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Advanced Frontend',
    level: 2,
    question: 'What is a cross-site request?',
    answer: 
      <>
        <p>A cross-site request is a type of HTTP request initiated by a web application from one origin (domain) to another. It occurs when a client-side script running in the context of a web page makes a request to a different domain than the one from which the script originated. Cross-site requests can be either cross-site scripting (XSS) attacks, where malicious scripts execute in the victim's browser, or legitimate requests made by web applications for purposes like accessing resources from external domains or integrating with third-party services.</p>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Advanced Frontend',
    level: 2,
    question: 'What is XML?',
    answer: 
      <>
        <p>XML (Extensible Markup Language) is a markup language used for storing and transporting data in a structured format. It consists of tags that define the structure and meaning of the data, making it easily readable by both humans and machines. XML is widely used in various applications, including web development, data interchange, configuration files, and document formats, due to its flexibility, extensibility, and platform independence.</p>
      </>
  },
  {
    rating: null,
    subject: 'frontend',
    topic: 'Advanced Frontend',
    level: 2,
    question: 'What is data binding?',
    answer: 
      <>
        <p>Data binding is a technique used in software engineering to establish a connection between the user interface (UI) and the application logic or data model. It allows changes in one to automatically reflect in the other, simplifying the synchronization of data between the two. This can enhance the responsiveness and interactivity of an application by reducing the need for manual updates or callbacks.</p>
      </>
  },
]


// {
//   rating: null,
//   subject: 'frontend',
//   topic: 'Basic Frontend',
//   level: 0,
//   question: '',
//   answer: 
//     <>
//     </>
// },