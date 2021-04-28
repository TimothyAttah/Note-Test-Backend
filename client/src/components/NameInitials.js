
export const user = JSON.parse( localStorage.getItem( 'user' ) );
export const info = JSON.parse( localStorage.getItem( 'info' ) );
 

 export const fullName = `${ user &&  user.firstName } ${ user && user.lastName }`
//  export const fullName = `${ user.result ? user.result.firstName : user.firstName } ${ user.result ? user.result.lastName : user.lastName }`


const nameToInitials = (  ) => {
    
  const namesArray = fullName.trim().split(' ');
  if (namesArray.length === 1) return `${namesArray[0].charAt(0)}`;
  else return `${namesArray[0].charAt(0)}${namesArray[namesArray.length - 1].charAt(0)}`;
}
 
export default nameToInitials;
