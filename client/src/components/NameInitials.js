
 
export const user = JSON.parse( localStorage.getItem( 'user' ) )
 
export const fullName = `${user && user.firstName} ${user && user.lastName}`

  const nameToInitials = (fullName) => {
  const namesArray = fullName.trim().split(' ');
  if (namesArray.length === 1) return `${namesArray[0].charAt(0)}`;
  else return `${namesArray[0].charAt(0)}${namesArray[namesArray.length - 1].charAt(0)}`;
}
 
 export default nameToInitials