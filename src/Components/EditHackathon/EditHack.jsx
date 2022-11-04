import React, { useRef } from 'react'

const EditHack = (props) => {

    const challengeName = useRef("");
    const newStartDate = useRef();
    const newEndDate = useRef();
    const newDescription = useRef("");
    const levelType = useRef("");
  
  
    const HackSubmitHandler = (event) => {
      event.preventDefault();
  
      const newObj = {
        name: challengeName.current.value,
        start:newStartDate.current.value,
        end:newEndDate.current.value,
        description:newDescription.current.value,
        level:levelType.current.value
      }
      props.editedValue(newObj)
    }
  

  return (
    <>
        <div className="list_body">
        <nav className="nav_bar">
          <nav className="nav_icon">
            <img
              width="82px"
              height="39px"
              src="https://s3-alpha-sig.figma.com/img/99ba/7507/b588a3af66673e7bb695c247d66635cc?Expires=1668384000&Signature=LJohw53McWLZpkFmq1NAp911kx-GQWPGKzCr-DLGSkchi627Sp30tobWElNhxt2RXcgCXvRzIjfMYNWaw6oOsd7tN-qP8VHYGjSvKoymg40fBEudERVHoF8vzUYpgyD4D7UIsYWPFL2tyaGizBMm0XjomFbX00y78KIxrpfNn-b9A8U1VIgPKzoKZfrdnSX~QH0DhrmUXQpbF9tCSTkWpDGtg9YbYUwLBXNBfw3W5hmYZvWU4nJzcYdLynP4Blm21WeZhTJNCxEg88uDN23Q5PQ7z00QPfUN1dqnAbvAkB6pLh3dQ2ur~ySZTCUI1AidnpR6dlzzfPgRkqyU1NdVfw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            />
          </nav>
        </nav>
        <div className="create_body">
          <div className="create_heading">Challenge Details</div>
          <form onSubmit={HackSubmitHandler} className="form_">
            <label className="label">Challenge Name</label>
            <br />
            <input ref={challengeName} className="inpt" type="text"/>
            <br />
            <label className="label">Start Date</label>
            <br />
            <input ref={newStartDate} className="inpt" type="Date" />
            <br />
            <label className="label">End Date</label>
            <br />
            <input ref={newEndDate} className="inpt" type="Date" />
            <br />
            <label className="label">Description</label>
            <br />
            <textarea ref={newDescription} className="inpt describe" type="text" />
            <br />
            <label className="label">Image</label>
            <br />
            <button className="btn" type="text">Upload</button>
            <br/>
            <label ref={levelType} className="label">Level Type</label>
            <br />
            <select ref={levelType} name="membership" className="membership">
              <option value="easy" defaultValue>Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
            <br />
            <button className="btn create_btn" type="submit">
              Create Challenge
            </button>
            <br />
          </form>
        </div>
      </div>
    </>
  )
}

export default EditHack