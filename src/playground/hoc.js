// Higer order component (HOC)
// A componenet that renders another component

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponenet) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info.</p>}
      <WrappedComponenet {...props}/>
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);

// const isAuthenticated = (WrappedComponenet) => {
//   return (props) => (
//     <div>
//       {props.isAuthenticated ? }
//       <WrappedComponenet {..props} />
//     </div>
//   );
// }

ReactDOM.render(<AdminInfo isAdmin={true} info='details' />, document.getElementById('app'));
// ReactDOM.render(<AdminInfo isAuthenticated={true} info='details' />, document.getElementById('app'));