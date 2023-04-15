import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";



const PetsListOne = (props) => {
    const [onePet, setOnePet] = useState({});
    const [petLike, setPetLike] = useState(0);
    const { id } = useParams();
    const navigate = useNavigate();


    useEffect(() => {
        axios.get("http://localhost:8000/api/pets/" + id)
            .then((res) => {
                console.log(res);
                // debugger
                setOnePet(res.data);
                if (res.data.petLike) {
                    console.log(res.data.petLike)
                    setPetLike(res.data.petLike)
                }
                return (res)

            })
            .catch((err) => console.log(err));
    }, [id])

    const likeHandler = (petLike) => {

        setPetLike(petLike)
        // console.log(typeof petLike)
        axios.put(`http://localhost:8000/api/pets/${id}`, {
            petLike
        })
            .then((res) => {
                setPetLike(res.data.petLike)
                console.log(res);
                console.log(res.data);
                console.log("edited")
                document.getElementById('likeButton').disabled = true;
            })
            .catch((err) => {
                console.log(err)
            })
    }




    const deletePets = (idFromBelow) => {
        axios.delete(`http://localhost:8000/api/pets/${idFromBelow}`)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                navigate("/")
            })
            .catch((err) => console.log(err));
    }

    //    remember to add to model
    return (
        <div style={{ marginTop: "0px", marginBottom: "40px" }}>
            <div className="heroImage">
                <h1 className="heroText"><Link to="/">Paul&rsquo;s Pet Shelter</Link></h1>
                <button className="mainButton"><Link to={"/pets/add"}>Put a pet up for adoption</Link></button>
            </div>

            <div className="mainContainer">
                <div className="homeLink"><Link to={`/`}>Back Home</Link>
                </div>
                <div className="singlePetHeader"><h2>Details about: {onePet.petName}</h2></div>
                <div className="">
                    <div className="onePetsBackground" key={onePet._id}>
                        <div className="onePetImageContainer">
                            <img className="onePetImage" alt={onePet.petName} src={onePet.petImage} />
                        </div>
                        <div className="onePetInfo">
                            <button className="mainButton adopt" onClick={() => deletePets(onePet._id)}>Adopt {onePet.petName}</button>
                            <p className="petDetails"><span style={{ fontWeight: "700" }}>Pet Type:</span> {onePet.petName} is a {onePet.petType}</p>
                            <p className="petDetails"><span style={{ fontWeight: "700" }}>Age:</span> {onePet.petAge}</p>
                            <p className="petDetails"><span style={{ fontWeight: "700" }}>Gender:</span> {onePet.petGender}</p>
                            <p className="petDetails"><span style={{ fontWeight: "700" }}>Description:</span> {onePet.petDesc}</p>
                            <h3>Skills</h3>

                            <p className="petDetails">{onePet.petSkillOne}</p>
                            <p className="petDetails">{onePet.petSkillTwo}</p>
                            <p className="petDetails">{onePet.petSkillThree}</p>
                            <div>

                            </div>

                            <div className="editLink"><Link to={`/pets/edit/${onePet._id}`}>Edit {onePet.petName}'s info</Link>
                            </div>
                            <div className="likesBox">
                                <h3>{onePet.petName} has {petLike} likes</h3>
                                <button className="mainButton" id="likeButton" onClick={() => likeHandler(petLike + 1)}>Give {onePet.petName} some love</button>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>

    )
}


export default PetsListOne
