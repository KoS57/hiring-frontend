
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Office.css'

const Office = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [home, setHome] = useState([]);
    const [office, setOffice] = useState([]);


    useEffect(() => {
        axios.get("http://localhost:4000/api/devices.json").then(response => {
            setHome(response.data.data[0].attributes);
            setOffice(response.data.data[1].attributes);
        })

    }, []);


    const blockedToggle = () => {
        if (isLoaded) {
            setIsLoaded(false)
        } else (
            setIsLoaded(true)
        )

    }


    return (
        <div className="inform-section">
            <div className="block-circle">
                <div className="circle">

                </div>
            </div>

            <div className="block-server">
                <div className="block-name">
                    <div className="name">
                        {isLoaded ? home.name : office.name}

                    </div>
                </div>


                <div className="block-model">
                    <div className="model">

                        {isLoaded ? home.model_number : office.model_number}
                    </div>
                </div>

                <div className="block-state">
                    <div className="state">
                        <div>
                            <label class="switch">
                                <input type="checkbox" onClick={blockedToggle} />
                                <span class="slider round"></span>
                            </label>
                        </div>

                        <div className="locked">
                            {isLoaded ? home.state : office.state}
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Office;