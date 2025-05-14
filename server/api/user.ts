import sql from "mssql";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  console.log("Request Body:", body);

  if (!body.email) {
    throw createError({ statusCode: 400, message: "Email is required" });
  }

  const config = {
    user: "SA",
    password: "Naeema@1979",
    server: "localhost", // Change this to your actual SQL Server host
    database: "Library",
    options: {
      trustServerCertificate: true, // Use this if you're running locally
    },
  };

  let pool: sql.ConnectionPool | undefined;

  try {
    // Create and connect to the SQL Server
    pool = await sql.connect(config);

    // Insert into the table
    const result = await pool.request().query`
      INSERT INTO [dbo].[User] (USER_EMAIL) VALUES (${body.email})
    `;

    return { message: "User added successfully", result };
  } catch (error: any) {
    return { error: error.message };
  } finally {
    // Close the connection if it was successfully created
    if (pool) {
      await pool.close();
    }
  }
});
