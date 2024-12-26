import clsx from "clsx";

const Button = ({ id, title, containerClass, leftIcon, rightIcon }) => {
  return (
    <button
      id={id}
      className={clsx(
        `group relative w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${containerClass}`
      )}
    >
      {leftIcon}
      <span className="inline-flex relative overflow-hidden font-general text-xs uppercase">
        <div>{title}</div>
      </span>
      {rightIcon}
    </button>
  );
};

export default Button;
