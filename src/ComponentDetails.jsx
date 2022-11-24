// import React from 'react';

// const ComponentDetails = (props) => {
  
//   console.log(props);
  
//     return(
//       <div className="ui container comment">
//         <div className="comment">
//           <a href="/" className="avatar"> 
//           <img  alt=""  />
//           </a>
//           <div className='content'>
//             <a href='/'className='author'> 
//               {props.author}
//             </a>
//             <div className='metadata'>
//               <span className='date' style={{color:'red'}}>{props.timeOfPost}</span>
//             </div>
//             <div className='text'>
//               <h3>{props.comment}</h3>
//             </div>
//           </div>
//         </div>
//       </div>
       
    
//     );
//   };
 
//   export default ComponentDetails;


// component details

// import ComponentDetails from './ComponentDetails';
// import ApprovalCard from './ApprovalCard';

// const App = () => {
//   return(
//     <div className="ui container comment">
//       <ApprovalCard>
//         <div>
//           <h3>Warning!</h3>
//           Are you sure you want to quite?
//         </div>
//           <ComponentDetails author="mark" 
//           timeOfPost="Today at 2:40pm"
//           comment="wow! Apolo quirlus is here again for react class wonderful!"
//           />
//        </ApprovalCard>
//       <ApprovalCard>
//           <ComponentDetails author="quirilus" 
//           timeOfPost="Today at 6:30am"
//           comment ="Nice one and much love" 
//           //avatar ={faker.image.avatar()}
//           />
//       </ApprovalCard>
//       <ApprovalCard>
//           <ComponentDetails author="vitalis" 
//           timeOfPost="Yesterday at 7:40pm"
//           comment="What was he saying over there"
//           />
//        </ApprovalCard>
//     </div>
//   );
// };
