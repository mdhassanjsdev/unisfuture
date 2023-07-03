async function createTodo(data) {
    "use server"

    await prisma.User.create({
        data: {
            name: data.name,
            email: data.email,
            Degree: data.Degree,
            Payment: true
        }
    })

}

export default createTodo