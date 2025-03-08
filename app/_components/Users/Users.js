import User from "./User";

function Users({ data }) {
    return (
        <div className="flex flex-col gap-3 w-full items-center">
            {data?.map((userData, i) => (
                <User {...userData} key={`users-${userData._id}`} />
            ))}
        </div>
    );
}

export default Users;
