import '../App.css'

function Form() {

    return(
        <form>
            <div className="fields">
                <label htmlFor="title">Project Name</label> <br></br>
                <input type="text" id="title" name="title"></input>                
            </div>

            <div className="fields">
                <label htmlFor="task">Task Name</label> <br></br>
                <input type="text" id="task" name="task"></input>   
                <input type="checkbox" id="billable" name="billable"></input>
                <label htmlFor="billable">Billable</label>             
            </div>

            <div className="buttons">
                <button type="submit">Add Activity</button>
                <button type="reset">Cancel</button>
            </div>                     
        </form>
    )
}

export default Form