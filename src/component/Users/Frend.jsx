
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Frends.css'

const Frend = () => {
    const [count, setHome] = useState([]);


    useEffect(() => {
        axios.get("http://localhost:4000/api/users.json").then(response => {
            setHome(response.data.data);

        })

    }, []);




    return (
        <div>
            {count.map(i => (
                <div className="inform-section">
                    <div className="block-circle">
                        <div className="circle">

                        </div>
                    </div>

                    <div className="block-server">
                        <div className="block-name">
                            <div className="name">
                                {i.attributes.name}

                            </div>
                        </div>


                        <div className="block-model">
                            <div className="model">

                                {i.attributes.email}
                            </div>
                        </div>

                        <div className="block-state">

                            <div className="state">
                                {!!i.attributes.starts_at ?
                                    <div>
                                        <div>
                                            {new Date(i.attributes.starts_at).toLocaleTimeString([], { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })} -
                                            {new Date(i.attributes.ends_at).toLocaleTimeString([], { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })}
                                        </div>
                                        <div className="upcoming">
                                            <div className="text">UPCOMING</div>
                                        </div>
                                    </div>
                                    :
                                    <div className="online">
                                        <div className="text">ACTIVE</div>
                                    </div>




                                }

                            </div>

                        </div>
                    </div>

                </div>

            ))}
        </div>

    )
}

export default Frend;