import React from 'react'
import Card from './components/Card'


const App = () => {

const jobOpenings = [
  {
    brandLogo: "https://i.pinimg.com/1200x/45/20/dd/4520ddfc56208707045c56232e946f7f.jpg",
    company: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://i.pinimg.com/736x/1b/56/fd/1b56fd706cdbaa4646fd0472193d5005.jpg",
    company: "Apple",
    datePosted: "2 weeks ago",
    post: "UI Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$55/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://i.pinimg.com/736x/3d/84/61/3d8461a8b24c40feee6c17890a8053f9.jpg",
    company: "Meta",
    datePosted: "10 days ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$50/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://i.pinimg.com/736x/ad/78/5a/ad785a9fb1587a496092b3d2f4e912b8.jpg",
    company: "Amazon",
    datePosted: "1 week ago",
    post: "Software Development Engineer",
    tag1: "Full Time",
    tag2: "Entry Level",
    pay: "$48/hr",
    location: "Chennai, India"
  },
  {
    brandLogo: "https://i.pinimg.com/1200x/72/a0/50/72a0500ff35991d147a6b48e4bffc721.jpg",
    company: "Netflix",
    datePosted: "3 weeks ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$80/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://i.pinimg.com/736x/15/cf/7f/15cf7f65d56e8fcf16fa08e45ceae81d.jpg",
    company: "Microsoft",
    datePosted: "4 days ago",
    post: "Web Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$40/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://i.pinimg.com/736x/0e/91/e6/0e91e6c53e2a7ac9b6465f5e5bbf8989.jpg",
    company: "Uber",
    datePosted: "6 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$52/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://i.pinimg.com/1200x/7d/3a/a4/7d3aa450915125e7948175e1123a199a.jpg",
    company: "Adobe",
    datePosted: "2 weeks ago",
    post: "JavaScript Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$50/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://i.pinimg.com/1200x/e4/88/77/e488777d759169c74b74aa95f07adbed.jpg",
    company: "Tesla",
    datePosted: "1 month ago",
    post: "Frontend Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$75/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://i.pinimg.com/736x/8b/41/7e/8b417e97e366798fe684924b316a0193.jpg",
    company: "X (Twitter)",
    datePosted: "8 days ago",
    post: "UI Developer",
    tag1: "Contract",
    tag2: "Mid Level",
    pay: "$60/hr",
    location: "Remote"
  }
];

  return (

    <div className='parent'>
      {
        jobOpenings.map(function(elem){
          return <Card 
          logo = {elem.brandLogo}
          company = {elem.company}
          dayPosted = {elem.datePosted}
          Post = {elem.post}
          jobtype01 = {elem.tag1}
          jobtype02 = {elem.tag2}
          pay = {elem.pay}
          location = {elem.location}

          />
        })
      }
    </div>
  )
}

export default App
