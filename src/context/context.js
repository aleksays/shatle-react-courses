// import { useState } from 'react';

// function ThirdChildComponent({ setIsShow }) {
//   return (
//     <button type="button" onClick={() => setIsShow(true)}>Some Button</button>
//   );
// }

// function SecondChildComponent({ setIsShow }) {
//   return <ThirdChildComponent setIsShow={setIsShow} />
// }

// function FirstChildComponent({ setIsShow }) {
//   return <SecondChildComponent setIsShow={setItShow} />
// }
// export default function Parent() {
//   cont [isShow, setIsShow] = useState(false);

//   return <FirstChildComponent setIsShow={setIsShow} />;
// }