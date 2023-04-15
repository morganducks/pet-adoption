import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'


const PetsAdd = (props) => {

    const { allPets, setAllPets } = props;
    const [petName, setPetName] = useState("");
    const [petType, setPetType] = useState("");
    const [petImage, setPetImage] = useState("");
    const [petGender, setPetGender] = useState("");
    const [petAge, setPetAge] = useState("");
    const [petDesc, setPetDesc] = useState("");
    const [petSkillOne, setSkillOne] = useState("");
    const [petSkillTwo, setSkillTwo] = useState("");
    const [petSkillThree, setSkillThree] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();



    const submitHandler = (e) => {

        e.preventDefault();
        axios.post("http://localhost:8000/api/pets", {
            petName,
            petType,
            petGender,
            petAge,
            petImage,
            petDesc,
            petSkillOne,
            petSkillTwo,
            petSkillThree,
        })

            .then((res) => {
                console.log(res);
                console.log(res.data);
                setPetName("")
                setPetType("")
                setPetImage("")
                setPetGender("")
                setPetAge("")
                setPetImage("")
                setPetDesc("")
                setSkillOne("")
                setSkillTwo("")
                setSkillThree("")
                navigate("/");
            })
            .catch((err) => {
                console.log(err)
                console.log("err.response:", err.response);
                console.log("err.response.data:", err.response.data);
                console.log("err.response.data.errors:", err.response.data.errors);
                setErrors(err.response.data.errors);
            })
    }

    //w6d2 code
    return (
        <div>
            <div className="heroImage">
                <h1 className="heroText"><Link to="/">Paul&rsquo;s Pet Shelter</Link></h1>
                <button className="mainButton"><Link to={"/pets/add"}>Put a pet up for adoption</Link></button>
            </div>
            <div className="mainContainer">
                <div className="editLink"><Link to={`/`}>Back Home</Link>
                </div>

                <form className="formContainer" onSubmit={submitHandler}>
                    <div>
                        <div className="addButtonRow">
                            <h2>Add a Pet for adoption</h2>
                        </div>
                        <div className="addButtonRow">
                            <p>* required</p>
                        </div>
                        <div className="petsRow">
                            <h3>Pet&rsquo;s Name*</h3>
                            <input value={petName} type="text" name="Name" onChange={(e) => setPetName(e.target.value)}
                            />
                            <br />
                            {
                                errors.petName ?
                                    <span className="errorMessage">{errors.petName.message}</span>
                                    : null
                            }

                        </div>

                        <div className="petsRow">
                            <h3>Pet Type*</h3>
                            <select value={petType} name="petType" onChange={(e) => setPetType(e.target.value)} >
                                <option defaultValue hidden>Select a pet type</option>
                                <option value="Dog">Dog</option>
                                <option value="Cat">Cat</option>
                            </select>
                            <br />
                            {
                                errors.petType ?
                                    <span className="errorMessage">{errors.petType.message}</span>
                                    : null
                            }

                        </div>
                        <div className="petsRow">
                            <h3>Pet Image</h3>
                            <input value={petImage} onChange={(e) => setPetImage(e.target.value)} type="text" />
                        </div>
                        <div className="petsRow">
                            <h3>Pet&rsquo;s Gender</h3>
                            <input type="text" name="Gender" onChange={(e) => setPetGender(e.target.value)}
                                value={petGender}
                            />
                        </div>
                        <div className="petsRow">
                            <h3>Pet&rsquo;s Age</h3>
                            <input type="text" name="Age" onChange={(e) => setPetAge(e.target.value)}
                                value={petAge}
                            />

                        </div>

                        <div className="petsRow">
                            <h3>Describe your pet*</h3>
                            <textarea type="text" name="Desc" onChange={(e) => setPetDesc(e.target.value)}
                                value={petDesc}
                            />
                            <br />
                            {
                                errors.petDesc ?
                                    <span className="errorMessage">{errors.petDesc.message}</span>
                                    : null
                            }

                        </div>

                        <div className="petsRow">
                            <h3>Pet Skills (optional)</h3>
                            <input type="text" name="skillOne" onChange={(e) => setSkillOne(e.target.value)}
                                value={petSkillOne}
                            />

                        </div>
                        <div className="petsRow">
                            <input type="text" name="skillTwo" onChange={(e) => setSkillTwo(e.target.value)}
                                value={petSkillTwo}
                            />

                        </div>
                        <div className="petsRow">
                            <input type="text" name="skillThree" onChange={(e) => setSkillThree(e.target.value)}
                                value={petSkillThree}
                            />

                        </div>
                        <div className="addButtonRow">
                            <button className="mainButton" style={{ marginRight: "30px" }}>Add pet</button>
                            <button className="mainButton"><Link to="/">Cancel</Link></button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )

}

export default PetsAdd