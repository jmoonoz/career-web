import React from 'react'
import Typewriter from "typewriter-effect"
import "../style/mission.scss"

function Mission() {
    const leftBracket = "[";
    const rightBracket = "]";
    return (
        <section id="Mission">
            <h1 className="section-title">
                Mooñoz {leftBracket}
                <Typewriter
                    className="type-text"
                    onInit={(typewriter) => {
                        typewriter.typeString(" moon-yos")
                            .pauseFor(2000)
                            .deleteAll()
                            .start();
                    }}
                    options={{
                        loop:true
                    }}
                />
                {rightBracket}
            </h1>
            <p>
                we are here to user in a new era of design. 
            </p>
        </section>
    )
}

export default Mission
