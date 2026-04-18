document.addEventListener("DOMContentLoaded", () => {
  const downloadButton = document.getElementById("download-report-btn");

  downloadButton.addEventListener("click", () => {
    const csvContent = [
      ["Indicateur", "Valeur"],
      ["Date", new Date().toLocaleDateString("fr-FR")],
      ["Chiffre d’affaires", "24 580 €"],
      ["Dépenses", "8 240 €"],
      ["Factures en attente", "18"],
      ["Trésorerie", "16 340 €"],
    ]
      .map((row) => row.join(";"))
      .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "rapport-comptaflow.csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(url);
  });
});
