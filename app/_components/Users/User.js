function User({ name, profile, socials, role }) {
    return (
        <>
            <span className="w-full h-fit rounded-lg flex gap-4 align-middle relative ">
                <div className="w-28 h-26 my-auto rounded-full overflow-hidden border-4 border-gray-dark/20">
                    <img src={profile} alt="profile pics" />
                </div>
                <div className="bg-gradient-to-r from-gray-dark/40 to-100% to-transparent pl-16 py-2 -z-10 w-56 h-20 absolute top-4 left-16"></div>
                <div className="flex flex-col my-auto text-nowrap text-ellipsis overflow-hidden  rounded-xl ">
                    <div className=" text-nowrap text-ellipsis overflow-hidden">
                        {name}
                    </div>

                    <div className="text-gray-mid text-nowrap text-ellipsis overflow-hidden">
                        {role}
                    </div>
                    <div className="flex gap-3 text-gray-mid/50  text-nowrap text-ellipsis overflow-hidden transition-all">
                        {socials?.map((s) => (
                            <a
                                className="hover:text-red-light transition-all duration-300"
                                href={s.link}
                                key={name + s.social}
                                target="_blank"
                            >
                                {s.social}
                            </a>
                        ))}
                    </div>
                </div>
            </span>
        </>
    );
}

export default User;
