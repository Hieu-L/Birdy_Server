import React from 'react'
import { Modal} from "@mantine/core";
import PeopleCard from "./PeopleCard"
import FriendCard from './FriendCard';


function PeopleModal(props) {
      return (
        <Modal
          size="40%"
          opened={props.modalOpened}
          onClose={() => props.setModalOpened(false)}
        >
        
        {props.card === "people" ? <PeopleCard page='modal'/> : <FriendCard page='modal'/> }
        
        </Modal>
      );
}

export default PeopleModal