const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "INSERISCI_PASSWORD",
  database: "INSERISCI_NOME_DB",
});

connection.connect((err) => {
  if (err) {
    console.error("❌ Errore di connessione al database:", err.message);
    return;
  }
  console.log("✅ Connessione al database MySQL riuscita!");
});

module.exports = connection;
