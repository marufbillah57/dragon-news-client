import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaWhatsapp, FaTwitter, FaTwitch} from 'react-icons/fa';
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarousel from '../BrandCarousel/BrandCarousel';

const RightSideNav = () => {
    return (
        <div>
            <ButtonGroup vertical>
                <Button className='mb-2' variant='outline-primary'> <FaGoogle></FaGoogle> Login With Google</Button>
                <Button variant='outline-dark'> <FaGithub></FaGithub> Login With Github</Button>
            </ButtonGroup>
            <div>
                <h5>Find Us On</h5>
                <ListGroup>
                    <ListGroup.Item className='mb-2'><FaFacebook/> Facebook </ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaWhatsapp /> Whatsapp </ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitter /> Twitter </ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitch /> Twitch </ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <BrandCarousel></BrandCarousel>
            </div>
        </div>
    );
};

export default RightSideNav;