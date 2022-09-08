import Card from "react-bootstrap/Card"



function AboutMe() {
    return (
        <div className="AboutMe">
            <h1>About me</h1>
            <img src="https://picsum.photos/300" className="self" alt="self image"/>

            <Card bg="dark">
                <Card.Body class='text-light'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Card.Body>
            </Card>
        </div>
        
    )
}

export default AboutMe