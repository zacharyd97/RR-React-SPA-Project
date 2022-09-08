import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Projects() {
  const [gitHubRepoURL, setGitHubRepoURL] = useState('');

  useEffect(()=>{
    fetch('https://api.github.com/users/zacharyd97')
    .then(res => res.json())
    .then(data => {
        setGitHubRepoURL(data.repos_url)
    })
  }, [])

  return (
    <div className='card' style={{border: 'none'}}>
        <Card style={{width: "18rem", margin: 'auto'}}>
            <Card.Body>
                <Card.Title>GitHub Repos</Card.Title>
                <Card.Text><a href={gitHubRepoURL}><Button>Link to GitHub Repos</Button></a></Card.Text>
            </Card.Body>
        </Card>
    </div>
  );
}

export default Projects;