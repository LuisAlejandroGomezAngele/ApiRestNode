
const { sql, dbConfig } = require('./Config/config'); // Asegúrate de que la ruta sea correcta

async function verUsuarios(ID) {
    try {
        await sql.connect(dbConfig);
        const result = await sql.query`SELECT * FROM Users where id = ${ID}`;
        console.log(result);
        await sql.close();
        return result.recordset;
    } catch (err) {
        console.error('Error al realizar la consulta:', err);
        await sql.close();
        throw err;
    }
}

// Exportar la función getData
module.exports.verUsuarios = verUsuarios;
