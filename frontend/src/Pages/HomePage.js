import { Container } from "react-bootstrap";

const HomePage = () => {
    return (
        <Container>
            <h4>Demo Video:</h4>
            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/oGiaj4IXqnY"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            ></iframe>
        </Container>
    );
};

export default HomePage;
