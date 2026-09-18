import Card from './components/Card'

const App = () => {

  const jobs = [
  {
    brandLogo: "https://thumbs.dreamstime.com/b/google-logo-vector-format-white-background-illustration-407571048.jpg ",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$55/hr",
    place: "Bengaluru, India"
  },

  {
    brandLogo: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/960px-Microsoft_logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail",
    companyName: "Microsoft",
    datePosted: "1 week ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$65/hr",
    place: "Hyderabad, India"
  },

  {
    brandLogo: "https://thumbs.dreamstime.com/b/amazon-logo-white-background-montreal-canada-july-printed-paper-98221126.jpg",
    companyName: "Amazon",
    datePosted: "3 days ago",
    post: "Software Development Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$60/hr",
    place: "Bengaluru, India"
  },

  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
    companyName: "Apple",
    datePosted: "2 weeks ago",
    post: "UI/UX Designer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$70/hr",
    place: "Mumbai, India"
  },

  {
    brandLogo: "https://static.dezeen.com/uploads/2021/11/meta-facebook-rebranding-name-news_dezeen_2364_col_sq.jpg",
    companyName: "Meta",
    datePosted: "6 days ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$58/hr",
    place: "Gurugram, India"
  },

  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2f0U6HVw6nPZh0FFt2_rtoIViUA-1J1cvgMkeqWhwJkWbrZSzrpQgCk4&s=10",
    companyName: "Netflix",
    datePosted: "3 weeks ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$75/hr",
    place: "Mumbai, India"
  },

  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-YQWFHeJz2yEG0sMZGYIDzZIpPg0bExM1Iygwkwbd2Q&s=10",
    companyName: "NVIDIA",
    datePosted: "10 days ago",
    post: "AI/ML Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$72/hr",
    place: "Bengaluru, India"
  },

  {
    brandLogo: "https://design-language-website.netlify.app/design/language/8b1c6077efa114b3a77b276f916c62f4/logo_colordont_6.svg",
    companyName: "IBM",
    datePosted: "4 days ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$50/hr",
    place: "Pune, India"
  },

  {
    brandLogo: "https://companieslogo.com/img/orig/ADBE-fb158b30.png?t=1740130206",
    companyName: "Adobe",
    datePosted: "2 weeks ago",
    post: "Product Designer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    place: "Noida, India"
  },

  {
    brandLogo: "https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img,w_313,h_157/https://graphicdesignergeeks.com/wp-content/uploads/2024/04/Oracle-2.png",
    companyName: "Oracle",
    datePosted: "10 weeks ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$62/hr",
    place: "Hyderabad, India"
  }
]

  return (
    <div className='parent'>
        {jobs.map(function(elem,idx){
          
          return <div key={idx}>
            <Card brandLogo={elem.brandLogo} companyName={elem.companyName} datePosted={elem.datePosted} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} place={elem.place}/>
          </div>
        })}
    </div>
  )
}

export default App
