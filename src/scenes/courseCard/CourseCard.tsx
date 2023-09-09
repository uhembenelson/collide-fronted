import Ux from "../../assets/ui.png"
import UI from "@/assets/ui.png"
import Rk from "@/assets/react.png"
import Bk from "@/assets/bk.png"

import Mali from "@/assets/mali.png";

import Tw from "@/assets/t.png";
import In from "@/assets/i.png";
import Fb from "@/assets/f.png";
import Ig from "@/assets/i.png";
import Nels from "@/assets/nelsonn.png"


import { useAppDispatch } from "@/store/store"
import { addCourseDetail } from "@/store/features/CourseDetails"
const Index =()=>{


    const data = [ 
        {
          id: "1",
          category:"UI/UX Design",
         title:"UI/UX Design ",
          description:`In this course you will learn the Foundations of User Interface and User Experience
           Design. We will cover core concepts such as Design Thinking,
            UX Research, Brand Identity, Design Theory, Wireframes & Prototypes.`,
          location:"Onsite / Online",
          price:"25000",
          duration: 5,
          status: "Enroll",
          imageURL: UI,
          name:"Akwunté Amali",
          bio:`Drawing from an extensive background in UI/UX design, Mali has honed
           the ability to translate complex concepts into elegant, user-friendly 
           
           interfaces. By collaborating closely with cross-functional teams, Mali 
           effectively gathers insights and user feedback to refine designs, ensuring 
           each iteration aligns perfectly with project goals and end-user needs. With 
           a passion for delivering exceptional user experiences, Mail's work reflects a balance between artistic 
          flair and a dedication to creating purposeful, engaging digital products.`,
          image:Mali,
          socials: [{
            icon: Tw, url: "#"},
            {icon :In ,url: "https://www.linkedin.com/in/akwunteamali/" },
            {icon :Ig, url: ""},
            {icon :Fb, url: ""},
          ],
          
          outline: [
            {
              time : "Month 1",
              tile: "Introduction to Design Thinking",
              content: [
              {title:'1. Introduction to Design Thinking.'},
              {title:'2. Empathy and User-Centered Design'},
              {title:'3. Definition and Problem Framing.'},
              {title:'4. Ideation and Creativity'},
              {title:'5. Prototyping and Testing'},
              {title:'6. Design hand-off & implementation.'}
            ]
            },
            {
              time : "Month 2",
              tile: "Design Theory & Fundamentals",
              content: [
                {title:'1. Grids & Layouts'},
                 {title:'2. Colour theory'}, 
                 {title:'3. Typography'},
                 {title:'4. Motion & Micro-interactions.'},
                 {title:'5. Collaborative tools for Design.'},
                 {title:'6. Design & Prototyping for mobile & Web.'},
                 {title:'7. Design Systems.'},
                ]
            },
            {
              time : "Month 3",
              tile: "UX Research Methodologies",
              content: [
                {title:'1. Qualitative & Quantitative Research.)'},
    
              {title:'2. How to conduct user interviews & gather feedback.'},
              {title: '3. How to frame a Problem Statement.'},
              {title:'4. Importance of Empathy maps.'},
              {title:'5. User Journey-mapping made easy.'},
              {title:'6. Feedback, Iteration & Testing.'},
  
            ]
            },
            {
              time : "Month 4",
              tile: "Advanced Application of UX Principles.",
              content: [{
                title:'1. Case Study: Fintech Solution.'
              }]
            },
            {
              time : "Month 5",
              tile: "Deep dive into Prototyping.",
              content: [{
                title:'1. Portfolio Project Kick-off..'
              }]
            }
  
          ]
          
         
        
        
        
      },
          {
          id: "2",
          category:"Frontend Development",
          title:"React Js & Tailwind css ",
          description:`Welcome to our Frontend Web Development Essentials course! 
          This program will equip you with the fundamental skills needed to excel as a frontend developer. Over the upcoming months, you'll learn HTML and CSS for crafting web layouts and designs. You'll dive into React.js, a powerful library for building interactive interfaces. Tailwind CSS will help you style with efficiency. Advanced concepts like state management and SOLID design principles will elevate your skills.
           You'll also master Git and GitHub for effective version control. 
          By the end of this course, you'll have a portfolio of projects showcasing your expertise.
           Let's begin this journey into the world of web development!`,
          location:"Onsite / Online",
          price:"25000",
          duration: 6,
          status: "Enroll",
          imageURL: Rk,
         
        outline: [
          {
            time : "Month 1",
            tile: "Introduction to Web Development and HTML/CSS",
            content: [
            {title:'1. Basics of HTML structure'},
            {title:'2. Semantic HTML elements'},
            {title:'3. Basic styling properties'},
            {title:'4. Selectors and specificity'},
            {title:'5. Box model and layout'},
            {title:'6. Introduction to responsive design'},
            {title:'7. Flexbox and Grid layout'},
            {title:'8. CSS transitions and animations'},
            {title:'9. Advanced CSS and Flexbox'}
  
          ]
          },
          {
            time : "Month 2",
            tile: "JavaScript Mastery Journey",
            content: [
              {title:'1. Getting Started'},
               {title:'2. Variables and Data Types'}, 
               {title:'3. Operators and Expressions'},
               {title:'4. Control Flow and Conditional Statements'},
               {title:'5. Functions Basics'},
               {title:'6. Function Scope and Closures'},
               {title:'7. Arrays and Loops'},
               {title:'8. Project: Simple Task List'},
               {title:'9. Introduction to the DOM'},
               {title:'10. Event Handling'},
               {title:'11  Project: Interactive To-Do List'},
               {title:'12. Introduction to Asynchronous Programming'},
               {title:'13. Fetch API and Promises'},
               {title:'14. Project: Weather App'},
              ]
          },
          {
            time : "Month 3 - 4",
            tile: "Deep Dive into React.js and Tailwind",
            content: [
              {title:'1. Introduction to React.js and its core concepts (components, JSX, state, props)'},
  
            {title:'2. Building a simple React application'},
            {title: '3. Working with React hooks and functional components'},
            {title:'4. React Router for navigation'},
            {title:'5. Managing component state'},
            {title:'6. Lifecycle methods'},
            {title:'7. Handling user input and forms'},
            {title:'8. React Router for navigation'},
            {title:'9. Introduction to Redux and its benefits'},
            {title:'10. Creating slices, actions, and reducers'},
            {title:'10. Customizing and Responsive Design with Tailwind'},
            {title:'11. Responsive design with Tailwind'},
            {title:'12. Creating reusable components with Tailwind'},
           
          ]
          },
          {
            time : "Month 5",
            tile: "Advanced React, Version Control, and Project",
            content: [
              {title:'1. Higher-Order Components (HOCs)'},
  
            {title:'2. Render props'},
            {title: '3. Error boundaries and testing'},
            {title:'4. Deep dive into React context'},
            {title:'5. Creating and using custom hooks for code reuse'},
            {title:'6. Optimizing performance using code splitting'},
            {title:'7. Implementing lazy loading for components'},
            {title:'8. Implementing dynamic routes and navigation'},
            {title:'9. Learning Git fundamentals'},
            {title:'10. Creating slices, actions, and reducers'},
            {title:'10. Customizing and Responsive Design with Tailwind'},
            {title:'11. Responsive design with Tailwind'},
            {title:'12. Creating reusable components with Tailwind'},
          ]
          },
          {
            time : "Month 6",
            tile: "Advanced Project and Final Touches with SOLID Principles",
            content: [
              {title:'1. Understanding SOLID design principles'},
  
            {title:`2. Applying SOLID principles in your project's architecture and code organization`},
            {title: '3. Performance optimization techniques in React'},
            {title:'4. Deployment options for React applications'},
            {title:'5. Finalizing your project, testing, and deployment strategies'}
          ]
          }
        ],
        name:"Uhembe Nelson",
        bio:`Nelson is a Software Engineer with a strong passion for crafting innovative solutions that make a positive difference in people's lives.
        As a software engineer, Nelson thrives on turning ideas into reality. From concept to code, He takes pride in architecting robust and scalable products that push the boundaries of what's possible
        
        `,
        image:Nels,
        socials: [{
          icon: Tw, url: "#"},
          {icon :In ,url: "https://www.linkedin.com/in/nelson-uhembe-a9a70393/" },
          {icon :Ig, url: "https://www.instagram.com/uhembenelson/"},
          {icon :Fb, url: "https://web.facebook.com/UhembeNelsonU/"},
        ],
        
  
        
      },
      {
          id: "3",
          category:'Android & IOS App Development',
         title:"React Native",
          description:`By the end of this course, you will have developed practical React Native skills, 
          including building functional IOS and Android apps with Redux Toolkit integration, API interactions, and deployment experience`,
          location:"Onsite / Online",
          price:"25000",
          duration: 6,
          status: "Enroll",
          imageURL: Bk,
          outline: [
            {
              time : "Month 1",
              tile: "Introduction to React Native and Setup",
              content: [
              {title:'1. What is React Native?'},
              {title:'2. Advantages and use cases'},
              {title:'3. Comparisons with other mobile development frameworks'},
              {title:'4. Setting Up Your Development Environment'},
              {title:'5. Installing Node.js and npm'},
              {title:'6. Installing React Native CLI and Xcode/Android Studio'},
              {title:'7. Creating and running your first React Native project'},
              {title:'8. Components, JSX, and props'},
              {title:'9. Styling with inline styles and stylesheets'},
              {title:'9. Handling user input and touch events'},
    
            ]
            },
            {
              time : "Month 2",
              tile: "React Navigation and UI Components",
              content: [
                {title:'1. Navigation and Routing with React Navigation'},
                 {title:'2. Setting up stack and tab navigators'}, 
                 {title:'3. Passing params and navigation options'},
                 {title:'4. Navigating between screens'},
                 {title:'5. Using FlatList and SectionList for dynamic lists'},
                 {title:'6. Implementing modals, alerts, and dialogs'},
                 {title:'7. Gestures and animations with React Native Gesture Handler'},
                
                ]
            },
            {
              time : "Month 3",
              tile: "Redux Toolkit Fundamentals",
              content: [
                {title:'1. Introduction to State Management'},
    
              {title:'2. Understanding the need for state management'},
              {title: '3. Concepts of Redux and Redux Toolkit'},
              {title:'4. Installing Redux Toolkit'},
              {title:'5. Creating a Redux store and initial setup'},
              {title:'6. Defining slices and reducers'},
              {title:'7. Creating actions with Redux Toolkit'},
              {title:'8. Using selectors for efficient data retrieval'},
             
             
            ]
            },
            {
              time : "Month 4",
              tile: "Advanced State Management and API Integration",
              content: [
                {title:'1. Global State Management with RTK'},
    
              {title:'2. Combining multiple slices in a store'},
              {title: '3. Entity adapters for managing normalized data'},
              {title:'4. State normalization and denormalization'},
              {title:'5. Fetching data from APIs using Axios or Fetch'},
              {title:'6. Storing API responses in the Redux store'},
              {title:'7. Error handling and loading states'},
              
            ]
            },
            {
              time : "Month 6",
              tile: "Project Development - To-Do List App",
              content: [
                {title:'1. Project Introduction: To-Do List App'},
    
              {title:`2. Designing the app's UI and features`},
              {title: '3. Planning the Redux store structure'},
              {title:'4. Creating Redux slices for tasks'},
              {title:'5. Adding, editing, and deleting tasks'},
              {title:'6. Handling task completion status'},
              
            ]
            },
            {
              time : "Month 6",
              tile: "Project Refinement and Deployment",
              content: [
                {title:'1. Project Refinement and Testing'},
    
              {title:`2. Styling and UI improvements`},
              {title: '3. Implementing additional features'},
              {title:'4. Writing unit tests for Redux logic'},
              {title:'5. Building APK/IPA files for Android/iOS'},
              {title:'6. Publishing the app to Google Play/App Store'},
              {title:'6. Continuous integration and deployment pipelines'},
              
            ]
            }
          ],
          name:"Uhembe Nelson",
          bio:`Nelson is a Software Engineer with a strong passion for crafting innovative solutions that make a positive difference in people's lives.
          As a software engineer, Nelson thrives on turning ideas into reality. From concept to code, He takes pride in architecting robust and scalable products that push the boundaries of what's possible
          
          `,
          image:Nels,
          socials: [{
            icon: Tw, url: "#"},
            {icon :In ,url: "https://www.linkedin.com/in/nelson-uhembe-a9a70393/" },
            {icon :Ig, url: "https://www.instagram.com/uhembenelson/"},
            {icon :Fb, url: "https://web.facebook.com/UhembeNelsonU/"},
          ],
          
      },
  
  
      {
        id: "4",
        category:'Backend Development',
       title:"Nodejs & MongoDB",
        description:`By the end of the course, you will have gained a solid understanding of 
        backend development using Node.js and MongoDB, along with the ability to build, deploy, and scale web applications`,
        location:"Onsite / Online",
        price:"25000",
        duration: 6,
        status: "Enroll",
        imageURL: Bk,
        outline: [
          {
            time : "Month 1",
            tile: "Introduction to Backend Development and Node.js",
            content: [
            {title:'1. Introduction to backend development and its role in web applications'},
            {title:'2. Setting up the development environment (Node.js, npm, code editor)'},
            {title:'3. Basics of JavaScript for server-side programming'},
            {title:'4. Introduction to Node.js: event loop, non-blocking I/O'},
            {title:'5. Building a simple command-line application using Node.js'},
            {title:'6. Introduction to Express.js framework for building web applications'},
            {title:'7. Creating a basic web server using Express'},
  
          ]
          },
          {
            time : "Month 2",
            tile: "Working with APIs and RESTful Services",
            content: [
              {title:'1. Understanding APIs (Application Programming Interfaces) and their importance'},
               {title:'2. Introduction to RESTful architecture'}, 
               {title:'3. Designing RESTful endpoints and HTTP methods'},
               {title:'4. Building a RESTful API using Express.js'},
               {title:'5. Handling middleware for authentication, logging, and error handling'},
               {title:'6. Introduction to version control and its importance in collaborative development.'},
               {title:'6. Set up a GitHub account and create a repository.'},
               {title:'6. Learn basic Git commands like git init, git add, git commit, and git push.'},
               {title:'6. Collaborate with others by forking repositories and creating pull requests.'},
               
              
              ]
          },
          {
            time : "Month 3",
            tile: "Data Storage with MongoDB",
            content: [
              {title:'1. Introduction to databases and their types (SQL vs. NoSQL)'},
  
            {title:'2. Understanding MongoDB and its advantages'},
            {title: '3. Setting up MongoDB and connecting it to your Node.js application'},
            {title:'4. Creating, reading, updating, and deleting documents in MongoDB'},
            {title:'5. Modeling data and relationships using Mongoose (Object-Document Mapping library)'},
            {title:'6. Performing basic queries and aggregation operations in MongoDB'},
           
           
           
          ]
          },
          {
            time : "Month 4",
            tile: "Authentication and Authorization",
            content: [
              {title:'1. Introduction to authentication and authorization concepts'},
  
            {title:'2. Implementing user registration and login functionality'},
            {title: '3. Using JSON Web Tokens (JWT) for secure authentication'},
            {title:'4. Hashing and salting passwords for security'},
            {title:'5. Role-based access control and authorization mechanisms'},
            {title:'6. Implementing password reset functionality via email'},
          
          ]
          },
          {
            time : "Month 5",
            tile: "Advanced Backend Concepts",
            content: [
              {title:'1. Using asynchronous programming patterns (Promises, async/await)'},
  
            {title:`2. Handling file uploads and downloads`},
            {title: '3. Implementing real-time features using WebSockets or Socket.io'},
            {title:'4. Using middleware for input validation and sanitization'},
            {title:'5. Caching strategies for improved performance (Redis)'},
            {title:'6. Error handling and logging best practices'},
            
          ]
          },
          {
            time : "Month 6",
            tile: " Deployment and Scaling",
            content: [
              {title:'1. Introduction to deployment options (hosting, cloud platforms)'},
            {title:`2. Deploying a Node.js application using platforms like Heroku or AWS`},
            {title: '3. Setting up environment variables for configuration'},
            {title:'4. Continuous integration and continuous deployment (CI/CD) pipelines'},
            {title:'5. Performance optimization and scaling strategies'},
            {title:'6. Monitoring application health and performance (tools like New Relic or Datadog)'},
          
            
          ]
          }
        ],
        name:"Uhembe Nelson",
        bio:`Nelson is a Software Engineer with a strong passion for crafting innovative solutions that make a positive difference in people's lives.
        As a software engineer, Nelson thrives on turning ideas into reality. From concept to code, He takes pride in architecting robust and scalable products that push the boundaries of what's possible
        
        `,
        image:Nels,
        socials: [{
          icon: Tw, url: "#"},
          {icon :In ,url: "https://www.linkedin.com/in/nelson-uhembe-a9a70393/" },
          {icon :Ig, url: "https://www.instagram.com/uhembenelson/"},
          {icon :Fb, url: "https://web.facebook.com/UhembeNelsonU/"},
        ],
        
    },
    
  ]

    return(
      <>
      {
        data.map((item)=>{
            return(
                <div className="bg-[#122015] w-1/4 rounded-2xl p-10">
                <div className="">
                    <img src={item.imageURL} alt="" className="h-[60px] w-full bg-cover " style={{borderRadius:10}} />
                </div>
                <div className=" mt-5 flex-end">
                    <p className="text-white text-[18px] font-semibold">{item.category}</p>
                </div>
            </div>
            )
        })
      }
      </>
    )
}

export default Index