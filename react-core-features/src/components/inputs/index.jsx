import React from 'react';

class Inputs extends React.Component {
    // state
    state = {
        name: '',
        country: '',
        bio: '',
        birthDay: '',
        gender: '',
        agree: false,
        skills: []
    }

    handleChange = event => {
        console.log(event.target.name, event.target.value)
        this.setState(
          {
              [event.target.name]: event.target.value 
          }  
        )
    } 
    handleCheckBox = event => {
        this.setState(
            {
                agree: event.target.checked
            }
        )
    }
    handleSkillsChange = event => {
        if(event.target.checked) {
            this.setState(
                {skills: [...this.state.skills, event.target.value]}
            )
        }
    }

    render() {
        const { name, country, bio, birthDay, agree, skills} = this.state

        return (
            <div style={{padding: '15px', margin:'15px', border: '1px solid black'}}>
                <h1>Form</h1>
                <input 
                    type="text"
                    name="name"
                    placeholder="name"
                    className="my-2 form-control"
                    onChange={this.handleChange}
                    value={name}
                />
                
                <select name="country" className="my-2 form-control"
                    onChange={this.handleChange}
                    value="country"
                >
                    <option>Select Country</option>
                    <option>Bangladesh</option>
                    <option>Turkey</option>
                </select>

                <textarea name="bio" placeholder="bio" className="my-2 form-control"
                    onChange={this.handleChange}
                    value="bio"
                />
                
                <input type="date" name="birthDay" placeholder="birthday" className="my-2 form-control"
                    onChange={this.handleChange}
                    value="birthDay"
                />

                <div>
                    <input type="radio" name="gender" value="Male"   onChange={this.handleChange}/> Male
                    <input type="radio" name="gender" value="Female"  onChange={this.handleChange}/> Female
                </div>
                <div>
                    <input type="checkbox" name="agree" onChange={this.handleCheckBox} checked={agree} /> I Agree
                </div>

                <div>
                    Skills: <br/>
                    <input 
                        type="checkbox"
                        name="skills"
                        value="Java"
                        checked={skills.includes('Java')}
                        onChange={this.handleSkillsChange}
                    /> Java

                    <input 
                        type="checkbox"
                        name="skills"
                        value="Python"
                        checked={skills.includes('Python')}
                        onChange={this.handleSkillsChange}
                    /> Python

                    <input 
                        type="checkbox"
                        name="skills"
                        value="JavaScript"
                        checked={skills.includes('JavaScript')}
                        onChange={this.handleSkillsChange}
                    /> JavaScript
                </div>

                <button type="submit" className="btn btn-primary" onClick={ () => console.log(this.state) }>Submit</button>
            </div>
        )
    }
}

export default Inputs;