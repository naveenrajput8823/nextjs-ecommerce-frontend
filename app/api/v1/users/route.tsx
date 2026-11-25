// app/api/users/route.js

export async function GET() {
    return Response.json({
        message: "Users fetched successfully"
    });
}

export async function POST(request) {
    const body = await request.json();

    return Response.json({
        message: "User created",
        user: body
    });
}