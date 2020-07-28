import React from 'react';
import { Button, UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap';

const Popover = () => {
    return (
        <div>
            <Button id="PopoverClick" type="button">
                Contact Me
      </Button>
            {' '}
            <UncontrolledPopover trigger="click" placement="bottom" target="PopoverClick">
                <PopoverHeader>Info</PopoverHeader>
                <PopoverBody>
                    email: "erik.dono@gmail.com",<br></br>

                    phone: "609-273-2048"
                </PopoverBody>
            </UncontrolledPopover>
        </div>
    );
}

export default Popover;