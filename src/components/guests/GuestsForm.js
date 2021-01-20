import React from 'react'

const GuestsForm = () => {
    return (
    <div className="invite-section">
    <h1>Invite Someone</h1>
    <form >
      <input type="text" placeholder="Name" name="name"  />
      <input type="text" placeholder="Phone" name="phone" />
      <p className="options-label">
        Dietary</p>
      <div className="options">
        <label className="container">Non-Veg
        <input type="radio" name="diet" value="Non-Veg" />
          <span className="checkmark"></span>
        </label>
        <label className="container">Vegan
        <input type="radio" name="diet" value="Vegan"/>
          <span className="checkmark"></span>
        </label>
        <label className="container">Pescatarian
        <input type="radio" name="diet" value="Pescatarian"  />
          <span className="checkmark"></span>
        </label>
      </div>
      <input type="submit" value='Add Guest' className="btn" />
    </form>

  </div>
)
}

export default GuestsForm
