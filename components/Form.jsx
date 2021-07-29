export default function Form({
  children, action, buttonText, onSubmit,
}) {
  return (
    <form action={action} method="POST" encType="multipart/form-data" onSubmit={onSubmit}>
      <div className="py-12 grid grid-cols-1 gap-6 w-full">
        {children}
        <button type="submit" className="btn btn-primary w-36">{buttonText}</button>
      </div>
    </form>

  );
}
