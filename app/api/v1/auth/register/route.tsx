import users from "../user";

let id = 0;

export async function POST(request) {

    const body = await request.json();

    const user = {
        id: ++id,
        ...body
    };

    users.push(user);

    console.log("All Users:", users);

    return Response.json({
        message: "User created",
        user: user
    });
}