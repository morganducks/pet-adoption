import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const PetsUpdate = (props) => {

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
    const { id } = useParams();
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();


    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${id}`)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setPetName(res.data.petName)
                setPetType(res.data.petType)
                setPetDesc(res.data.petDesc)
                setPetImage(res.data.petImage)
                setPetGender(res.data.petGender)
                setPetAge(res.data.petAge)
                setSkillOne(res.data.petSkillOne)
                setSkillTwo(res.data.petSkillTwo)
                setSkillThree(res.data.petSkillThree)

            })
            .catch((err) => {
                console.log(err);
            })
    }, [id])

    const submitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/pets/${id}`, {
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
                console.log("edited")
                navigate(`/pets/${id}`)
            })
            .catch((err) => {
                console.log(err)
                console.log("err.response:", err.response);
                console.log("err.response.data:", err.response.data);
                console.log("err.response.data.errors:", err.response.data.errors);
                setErrors(err.response.data.errors);
            })
    }

    return (
        <div style={{ marginTop: "0px", marginBottom: "40px" }}>
            <div className="heroImage">
                <h1 className="heroText"><Link to="/">Paul&rsquo;s Pet Shelter</Link></h1>
                <button className="mainButton"><Link to={"/pets/add"}>Put a pet up for adoption</Link></button>
            </div>

            <div className="petListContainer mainContainer">
            <div className="editLink"><Link to={`/`}>Back Home</Link>
                </div>
                <div><h2>Edit {petName}'s information</h2></div>
                <img className="editPageImg" src={petImage} />
                <form onSubmit={submitHandler}>
                    <div style={{ marginTop: "40px" }}>
                        <div className="petsRow">
                            <label htmlFor="Name">Pet Name</label>
                            <input value={petName} onChange={(e) => {
                                setPetName(e.target.value)
                            }}
                                type="text" name="Name" />
                            <br />
                            {
                                errors.petName ?
                                    <span className="errorMessage">{errors.petName.message}</span>
                                    : null
                            }
                        </div>

                        <div className="petsRow">
                            <label>Pet Type</label>
                            <select value={petType} name="petType" onChange={(e) => setPetType(e.target.value)} >
                                <option defaultValue hidden>Select a pet type</option>
                                <option value="Dog">Dog</option>
                                <option value="Cat">Cat</option>
                                <option value="Fish">Fish</option>

                            </select>
                            <br />
                            {
                                errors.petType ?
                                    <span className="errorMessage">{errors.petType.message}</span>
                                    : null
                            }

                        </div>
                        <div className="petsRow">
                            <label>Pet Image</label>
                            <input value={petImage} onChange={(e) => setPetImage(e.target.value)} type="text" />
                        </div>
                        <div className="petsRow">
                            <label htmlFor="Age">Pet Age</label>
                            <input value={petAge} onChange={(e) => {
                                setPetAge(e.target.value)
                            }}
                                type="text" name="Age" />
                        </div>
                        <div className="petsRow">
                            <label htmlFor="Gender">Pet&rsquo;s Gender</label>
                            <input type="text" name="Gender" onChange={(e) => setPetGender(e.target.value)}
                                value={petGender}
                            />
                        </div>
                        <div className="petsRow">
                            <label htmlFor="Desc">Describe your pet</label>
                            <input value={petDesc} onChange={(e) => setPetDesc(e.target.value)}
                                type="textarea" name="Desc"
                            />
                            <br />
                            {
                                errors.petDesc ?
                                    <span className="errorMessage">{errors.petDesc.message}</span>
                                    : null
                            }
                        </div>

                        <div className="petsRow">
                            <h3>Pet&rsquo;s Skills</h3>
                            <input type="text" name="skillOne" onChange={(e) => setSkillOne(e.target.value)}
                                value={petSkillOne}
                            />
                            {/* {
                        errors.petsGender?
                        <span className="errorMessage">{errors.petsGender.message}</span>
                        :null 
                    }*/}
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
                            {/* {
                        errors.petsGender?
                        <span className="errorMessage">{errors.petsGender.message}</span>
                        :null 
                    }*/}
                        </div>


                    </div>
                    <button className="mainButton editButton" style={{ marginRight: "30px" }}>Update {petName}'s info</button>
                    <button className="mainButton"><Link to="/">Cancel</Link></button>
                </form>
            </div>
        </div>
    )
}

export default PetsUpdate