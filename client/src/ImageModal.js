import React from 'react'
import { Modal} from "@mantine/core";
import "./ImageModal.css"


import angry from "./mood/angry.png";
import bored from "./mood/bored.png";
import bye from "./mood/bye.png";
import crying from "./mood/crying.png";
import depressed from "./mood/depressed.png";
import eating from "./mood/eating.png";
import encouraging from "./mood/encouraging.png";
import full from "./mood/full.png";
import funny from "./mood/funny.png";
import hungry from "./mood/hungry.png";
import love from "./mood/love.png";
import money from "./mood/money.png";
import no from "./mood/no.png";
import not_talking from "./mood/not_talking.png";
import ok from "./mood/ok.png";
import pose from "./mood/pose.png";
import scared from "./mood/scared.png";
import sexy from "./mood/sexy.png";
import shocked from "./mood/shocked.png";
import sick from "./mood/sick.png";
import sleeping from "./mood/sleeping.png";
import stop_it from "./mood/stop_it.png";
import what from "./mood/what.png";
import yay from "./mood/yay.png";
import yes_sir from "./mood/yes_sir.png";


function PeopleModal(props) {

    let imageList = [ [angry,"angry"] , [bored, "bored"], [bye,"bye"], [crying,"crying"], [depressed,"depressed"], [eating,"eating"], [encouraging,"encouraging"], [full,"full"], [funny,"funny"], [hungry,"hungry"], [love,"love"], [money,"money"], [no,"no"], [not_talking,"not_talking"], [ok,"ok"], [pose,"pose"], [scared,"scared"], [sexy,"sexy"], [shocked,"shocked"], [sick,"sick"], [sleeping,"sleeping"], [stop_it,"stop_it"], [what,"what"], [yay,"yay"], [yes_sir,"yes_sir"]]
    
    const select = (elem) => {
        props.setImage(elem)
        props.setModalOpened(false)
        console.log("hey")
    }


    const imageButtons = imageList.map((img) =>
        <button onClick = {() => select(img[1])}>
            <img className="mood-img" src={img[0]} alt="" />
        </button>
    );

      return (
        <Modal
          size="45%"
          opened={props.modalOpened}
          onClose={() => props.setModalOpened(false)}
        > 
        <h2 className='mood-title'>Mood</h2>
        <div className="grid">
            {imageButtons}
        </div> 
        
        </Modal>
      );
}

export default PeopleModal