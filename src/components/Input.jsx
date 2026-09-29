import { useState } from "react";

const STATE_CLASS = {
  default:
    "border-neutral-100 bg-white text-neutral-500 placeholder:text-neutral-200",
  focus:
    "border-primary-500 bg-white text-neutral-500 placeholder:text-neutral-200 ring-1 ring-primary-500",
  filled: "border-neutral-300 bg-white text-neutral-500",
  disabled:
    "border-neutral-100 bg-neutral-100 text-neutral-200 placeholder:text-neutral-200 cursor-not-allowed",
};

export default function Input({
  label,
  id,
  type = "text",
  placeholder,
  value,
  onChange,
  disabled = false,
  error,
  onFocus,
  onBlur,
  ...props
}) {
  const [focused, setFocused] = useState(false);

  const state = disabled
    ? "disabled"
    : focused
      ? "focus"
      : value
        ? "filled"
        : "default";

  return (
    <div className="flex w-full max-w-80 flex-col gap-1.5">
      {label && (
        <label htmlFor={id} className="body-sm text-neutral-500">
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        data-state={state}
        {...props}
        onFocus={(event) => {
          setFocused(true);
          onFocus?.(event);
        }}
        onBlur={(event) => {
          setFocused(false);
          onBlur?.(event);
        }}
        className={`w-full rounded-[3px] border p-[10px] body-md outline-none transition-colors ${disabled ? "" : "focus:border-primary-500 focus:ring-1 focus:ring-primary-500"} ${STATE_CLASS[state]}`}
      />
      {error && <p className="caption text-red-500">{error}</p>}
    </div>
  );
}
