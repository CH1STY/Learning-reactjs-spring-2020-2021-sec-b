
export const AddToDiary=()=>{

    
    return (
        <div align="center">
            <h1>Adding to Diary</h1>
            <form>
                
                <table>
                    <tbody>
                    <tr>
                        <td><label>Enter Details</label></td>
                        <td><textarea name="details" placeholder="Enter Details"></textarea></td>
                    </tr>

                    <tr>
                        <td> <label>Select Priority </label></td>
                        <td>  <select name="priority">
                                
                                <option value="High">High</option>
                                <option value="Medium">Medium</option>
                                <option value="Low" >Low</option>
                            </select></td>
                    </tr>
                    </tbody>
                </table>
               
              
            </form>
        </div>
    )

}