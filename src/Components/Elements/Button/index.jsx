const Button = (props) => {
  const { children = "default", classname = "bg-black" } = props;
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${classname} text-white`}
      type="button"
      onClick={() => console.log("click")}
    >
      {children}
    </button>
  );
};

export default Button;
