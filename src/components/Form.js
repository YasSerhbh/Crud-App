import React from "react"

function Form(props) {

        const addCourse = e => {
        e.preventDefault();
        if (e.target.parentNode.children[0].value) {
        props.handleAdd(e.target.parentNode.children[0].value)
        }
    }

        return (
            <form>
                 <input type="text" placeholder="Course Name" className="coursetype"/>
                 <input type="submit" onClick={addCourse} value="Add Course" className="courseadd"/>
            </form>
            );
        }


export default Form;