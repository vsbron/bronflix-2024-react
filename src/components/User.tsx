import avatar from "@/assets/profile.png";

function User() {
  // Returned JSX
  return (
    <div>
      <img
        src={avatar}
        className="rounded-full"
        width={50}
        height={50}
        alt="BroN"
        title="BroN avatar"
      />
    </div>
  );
}

export default User;
