import './styles.css'
export const Button = ({ text, onClick, disabled}) =>
{ 
    return <button disabled={disabled} className='btn' onClick={onClick}>{text}</button>;
};
