import React from 'react';
import { ListGroup } from 'react-bootstrap';
import Button from "react-bootstrap/Button";
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png'

const RightNav = () => {
    return (
      <div>
        <h2 className='mt-4'>Login With</h2>
        <Button className="mb-2" variant="outline-primary">
          <FaGoogle /> Login with Google
        </Button>
        <Button variant="outline-secondary">
          <FaGithub />
          Login with Github
        </Button>
        <div className='mt-4'> 
          <h4>Find us on</h4>
          <ListGroup>
            <ListGroup.Item>
              {" "}
              <FaFacebook />
              Facebook
            </ListGroup.Item>
            <ListGroup.Item>
              <FaTwitter />
              Twitter
            </ListGroup.Item>
            <ListGroup.Item>
              <FaInstagram />
              Instagram
            </ListGroup.Item>
          </ListGroup>
        </div>
        <QZone></QZone>
        <div>
            <img src={bg} alt="" />
        </div>
      </div>
    );
};

export default RightNav;