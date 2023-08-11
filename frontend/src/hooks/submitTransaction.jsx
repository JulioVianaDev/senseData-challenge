export async function submitTransaction(json) {
  try {
    const response = await fetch('http://localhost:8080/transactions/createTransaction', {
      method: 'POST',
      body: json,
    });
    console.log(json)
    if (response.ok) {
      console.log('Transaction created successfully');
    } else {
      console.error('Failed to create Transaction');
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
}