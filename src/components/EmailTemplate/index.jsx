import * as React from 'react';

export const EmailTemplate = ({firstName}) => (
  <div>
    <h1>New customer request!</h1>
    <div>
        <h1>Hello, {firstName}</h1>
      
    </div>
  </div>
);