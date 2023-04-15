import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


const PetsListAll = (props) => {

    // const navigate = useNavigate();

    const { allPets, setAllPets } = props;



    useEffect(() => {
        axios.get("http://localhost:8000/api/pets")
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setAllPets(res.data);
            })
            .catch((err) => console.log(err));
    }, [])

    // const deletePets = (idFromBelow) => {
    //     axios.delete(`http://localhost:8000/api/pets/${idFromBelow}`)
    //         .then((res) => {
    //             console.log(res);
    //             console.log(res.data);
    //             setAllPets(allPets.filter(pets => pets._id !== idFromBelow))
    //         })
    //         .catch((err) => console.log(err));
    // }

    //    remember to add to model
    return (
        <div style={{ marginTop: "0px", marginBottom: "40px" }}>
            <div className="heroImage">
                <h1 className="heroText"><Link to="/">Paul&rsquo;s Pet Shelter</Link></h1>
                <button className="mainButton"><Link to={"/pets/add"}>Put a pet up for adoption</Link></button>
            </div>
            <div style={{textAlign: "center", marginTop: "40px", marginBottom: "0px", paddingBottom: "0px"}}><h2>These pets need a good home!</h2></div>
                <div className="petListContainer mainContainer">
                
                    {
                        allPets.map((pets, index) => {
                            return (

                                <div className="petsBackground" key={index}>

                                    <div className="listContainerHome" key={pets._id}>
                                        
                                        <Link className="nameLink" to={`/pets/${pets._id}`}>
                                            <h3 className="listName">{pets.petName}</h3></Link>
                                            
                                            <Link className="petImageLink" to={`/pets/${pets._id}`}><img className="petImage" alt={pets.petName} src={pets.petImage} /></Link>
                                            
                                        <p className="listStylesHome"><span style={{ fontWeight: "700"}}>Type: {pets.petType}</span></p>
                                        {/* <p className="listStyles"><span style={{ fontWeight: "700" }}>Age:</span> {pets.petAge}</p>

                                        <p className="listStyles"><span style={{ fontWeight: "700" }}>Gender:</span> {pets.petGender}</p> */}

                                        <div className="viewLinkBtn"><Link to={`/pets/${pets._id}`}>Get to know more about {pets.petName}</Link></div>
                                        <div className="homeEditLink"><Link to={`/pets/edit/${pets._id}`}>Edit {pets.petName}'s info</Link>
</div>
                                    </div>

                                </div>

                            )
                        })
                    }
                </div>

            </div>


    )

}

export default PetsListAll