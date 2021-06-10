function Homepage (currentUser) {
  if (currentUser) {
    return (
      <h1>WELCOME TO ShareBnb, {currentUser.username}!</h1>
    )
  } else {
    return (
      <h1>WELCOME TO ShareBnB!</h1>
    )
  } 
}

export default Homepage;