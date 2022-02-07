import React from 'react';

const Button: React.FunctionComponent<{
  onClick: () => void,
  Title?: String
}> = (props) => {
  
  return(<button className='button' onClick={props.onClick}>{props.Title}</button>)
};

export default Button;
