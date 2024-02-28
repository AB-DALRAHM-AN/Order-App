export const Button = ({children, textOnly, className, ...props}) => {
  let classes =  textOnly ? "text-button" : "button";
  classes += ' ' + className;
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
