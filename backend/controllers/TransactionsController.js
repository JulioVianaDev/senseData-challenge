const Transaction =require("../models/Transaction");
module.exports = class TransactionsController{
  static async allTransactionss(req,res){
    const transactions = await Transaction.find()
    return res.status(200).json(transactions)
  }
  static async registerTransactions(req,res){
    const { title,
      type,
      categoria,
      value,
    } = req.body
    const transaction = new Transaction({
      title,type,categoria,value
    })
    await transaction.save()

    return res.status(201).json({transaction})
  }
  static async deleteTransactions(req, res) {
    try {
      const transaction = await Transaction.findByIdAndRemove(req.params.id)
      if (!transaction) {
        return res.status(404).json({ message: "transação não encontrado" });
      }
      res.json({ message: "transação excluído com sucesso" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Ocorreu um erro ao excluir o transação" });
    }
  }
  static async editTransactions(req, res) {
    try {
      const { title,
        type,
        categoria,
        value,
      } = req.body

      const transaction = await Transaction.findById(req.params.id); // Fetch the user by ID
      // Update the user's information
      transaction.type = type;
      transaction.categoria = categoria;
      transaction.title = title;
      transaction.value = value;

      await transaction.save(); // Save the updated user

      res.json(transaction);
  } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Erro ao editar o usuário." });
  }
  }
}