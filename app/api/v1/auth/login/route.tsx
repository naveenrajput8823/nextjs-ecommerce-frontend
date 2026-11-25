import users from "../user";

export async function POST(request) {
    const body = await request.json();
    const userInDb = users.find(u => u.email === body.email);
    if (!userInDb) {
        return Response.json({ message: "Account Doesn't Exist!" });
    }
    else {
        if (userInDb.password === body.password) {
            return Response.json({
                message: "Login Successfull!",
                user: userInDb
            })
        }
        else {
            return Response.json({
                message: "Invalid Credentials!",
            })
        }
    }
}