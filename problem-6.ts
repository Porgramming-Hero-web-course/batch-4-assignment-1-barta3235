interface Profile {
    name: string;
    age: number;
    email: string;
}

const updateProfile = (obj: Profile, update: Partial<Profile>) => {
    return {
        ...obj, ...update
    }
}