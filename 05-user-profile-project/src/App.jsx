import React from 'react'
import Card from './components/Card'



const App = () => {
  const profiles = [
  // Profile 1 
  {
    available: "Available",
    price: "$55/hr",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZFiT3xz5TcqEtQrEl_M_dDVKdKKEg5VLAzPC9po0qVJDRsirkeHMLBQw&s=10",
    name: "Wade Wilson",
    role: "UI/UX Designer",
    company: "Epic Coders",
    type: "Freelancer",
    skills: ["UI", "UX", "Photoshop"],
    moreSkills: "+4",
    description: "Wade is a creative UI/UX designer with an impressive portfolio."
  },

  // Profile 2
  {
    available: "Not Available",
    price: "$42/hr",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIl97WqQdvvTrhUIrXpc7yjeKIrxttOIvniHMYn1MpYVsIDYSa5dytMnY&s=10",
    name: "Sarah Miller",
    role: "Mobile Designer",
    company: "Pixel Studio",
    type: "Freelancer",
    skills: ["Figma", "UI", "Mobile"],
    moreSkills: "+5",
    description: "Sarah specializes in creating beautiful mobile app interfaces."
  },

  // Profile 3
  {
    available: "Available",
    price: "$60/hr",
    image: "https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww",
    name: "Alex Carter",
    role: "Product Designer",
    company: "Design Hub",
    type: "Freelancer",
    skills: ["UI", "UX", "Figma"],
    moreSkills: "+6",
    description: "Alex creates simple and user-friendly designs for modern digital products."
  },

  // Profile 4
  {
    available: "Available",
    price: "$48/hr",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbuqXBnvPYZAvrSNX3H4oXEEGn07-_OyJwetQGpnjBncu0bhn-imM9QIj2&s=10",
    name: "Kritika Khurana ",
    role: "UX Designer",
    company: "Creative Minds",
    type: "Freelancer",
    skills: ["UX", "Research", "Figma"],
    moreSkills: "+4",
    description: "Emma focuses on user research and creating smooth digital experiences."
  },

  // Profile 5
  {
    available: "Not Available",
    price: "$35/hr",
    image: "https://xsgames.co/randomusers/assets/avatars/male/6.jpg",
    name: "Daniel Smith",
    role: "Web Designer",
    company: "WebCraft",
    type: "Freelancer",
    skills: ["HTML", "CSS", "UI"],
    moreSkills: "+3",
    description: "Daniel creates responsive websites with clean and modern interfaces."
  },

  // Profile 6
  {
    available: "Available",
    price: "$52/hr",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4pLdUmSBDWaVE2QyJTry00M-9fzi49nRKa0Yfr2dqSA&s",
    name: "Olivia Brown",
    role: "Graphic Designer",
    company: "Visual Lab",
    type: "Freelancer",
    skills: ["Photoshop", "Illustrator", "UI"],
    moreSkills: "+7",
    description: "Olivia combines creativity and visual design to create memorable experiences."
  },

  // Profile 7
  {
    available: "Available",
    price: "$45/hr",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmNNZ1pyYAzRJAIqBWyYSamjYRfJHEQc7aDnfsVUcgQQ&s",
    name: "James Anderson",
    role: "Frontend Designer",
    company: "Code Studio",
    type: "Freelancer",
    skills: ["HTML", "CSS", "React"],
    moreSkills: "+4",
    description: "James designs modern frontend interfaces with responsive layouts."
  },

  // Profile 8
  {
    available: "Not Available",
    price: "$38/hr",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQEQp7Nr8iBwE5z4HcHA89iH0j2-zdtwxN33RFVJn5e9w2WRRoueXJxDKB&s=10",
    name: "Aayushi Verma",
    role: "Interaction Designer",
    company: "Motion Lab",
    type: "Freelancer",
    skills: ["UX", "Motion", "Figma"],
    moreSkills: "+5",
    description: "Sophia creates interactive experiences with intuitive design patterns."
  },

  // Profile 9
  {
    available: "Available",
    price: "$58/hr",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfPOhhLFDKfsGARpOPmDeOjFl-orD6SsvGr5KRFdJ0bDjIGXN6syaZWMWz&s=10",
    name: "Michael Davis",
    role: "UI Designer",
    company: "Next Design",
    type: "Freelancer",
    skills: ["UI", "Figma", "Prototype"],
    moreSkills: "+6",
    description: "Michael specializes in clean user interfaces and interactive prototypes."
  },

  // Profile 10
  {
    available: "Available",
    price: "$50/hr",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSduGihPfXg1NrKNb8Q9a6ADHFcr0VgtShrCJP82gAue3KufAk9ducpWDI&s=10",
    name: "Mia Taylor",
    role: "Mobile Designer",
    company: "App Works",
    type: "Freelancer",
    skills: ["Mobile", "UI", "UX"],
    moreSkills: "+5",
    description: "Mia designs mobile applications with a strong focus on usability."
  },

  // Profile 11
  {
    available: "Not Available",
    price: "$40/hr",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnpDBJzsK7snpvWyXxorWbpMlmreK-mw3x1xUT0G1wpMa07bw9w19E5sk&s=10",
    name: "Narendra Modi",
    role: "MERN Stack | DSA",
    company: "Insight Labs",
    type: "Freelancer",
    skills: ["DSA", "ReactJS", "NodeJs"],
    moreSkills: "+5",
    description: "Bipadtaran is a MERN Stack Dev skilled in DSA, React, Node.js and MongoDB."
  },

  // Profile 12
  {
    available: "Available",
    price: "$65/hr",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSis1a-hykLWINmoLKhOP_u-AKYHGyUKIPee4gL__qKGFSpI6R7BJ5479zc&s=10",
    name: "Ava Thompson",
    role: "Product Designer",
    company: "Future Works",
    type: "Freelancer",
    skills: ["Product", "UI", "UX"],
    moreSkills: "+8",
    description: "Ava designs digital products from early concepts to polished interfaces."
  }
];



  return (
    <div className='parent'>
      {profiles.map(function(elem){
        return <Card available={elem.available} price={elem.price} image={elem.image} name={elem.name} role={elem.role} company={elem.company} skills={elem.skills} moreSkills={elem.moreSkills} type={elem.type}  description={elem.description} />
      })}
    </div>
  )
}

export default App
