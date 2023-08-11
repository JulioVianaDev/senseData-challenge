const router= require('express').Router()
const TransactionsController = require('../controllers/TransactionsController')
router.get('/',TransactionsController.allTransactionss)
router.post('/createTransaction',TransactionsController.registerTransactions)
router.patch('/editTransaction/:id',TransactionsController.editTransactions)
router.delete('/deleteTransaction/:id',TransactionsController.deleteTransactions)

module.exports=router