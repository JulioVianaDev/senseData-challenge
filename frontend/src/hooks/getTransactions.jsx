export const getTransactions = async()=>{
  const getData = await fetch('http://localhost:8080/transactions')
  const json = await getData.json()
  return json
}