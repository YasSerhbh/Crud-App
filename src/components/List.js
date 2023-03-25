import React, {Component} from "react"

class List extends Component {

    delete = (e) => {
        this.props.handleDelete(e.target.parentNode.id)
    }

    edit = (e) => {
        this.props.handleEdit(e.target.parentNode.id)
    }

    save = (e) => {
        // console.log(e.target.parentNode.children[0].value)
        this.props.handleSave(e.target.id, e.target.children[0].value)
    }

    render() {

        var addCourses = this.props.courses.map(e => {
            if (e.edit) {
                return(
                    <form onSubmit={this.save} className="element-edit" key={e.id} id={e.id}>
                        <input type='text' placeholder={e.name}  />
                        <input  type='submit' value="Save Changes" />
                    </form>
                )
            }else {
            return (
                <div className="element" key={e.id} id={e.id}>
                    <span>{e.name}</span>
                    <button className="edit" onClick={this.edit}>Edit Course</button>
                    <button className="delete" onClick={this.delete}>Delete Course</button>
                </div>
            )
            }
        })

        return (
            <div className="list">
                {this.props.courses.length > 0 ? addCourses : <p>There is No Courses To Show</p>}
            </div>
            );
        }
}

export default List;