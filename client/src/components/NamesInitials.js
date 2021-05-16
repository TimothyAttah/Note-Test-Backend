export const user = JSON.parse( localStorage.getItem( 'user' ) );

export const fullName = `${ user && user.results && user.results.firstName } ${ user && user.results && user.results.lastName  }`


const NamesInitials = ( { fullName } ) => {
  const namesArray = fullName.trim().split( ' ' );
  if ( namesArray.length === 1 ) {
    return `${namesArray[0].charAt(0)}`
  } else {
    return `${ namesArray[ 0 ].charAt( 0 ) }${ namesArray[ namesArray.length - 1 ].charAt( 0 ) }`
  }
}

export default NamesInitials
