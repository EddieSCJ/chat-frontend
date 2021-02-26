const messageService = () => {

  const send = (username, message) => {
    const postOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      cache: 'no-cache',
      body: JSON.stringify({ username, message })
    }
    fetch('http://localhost:8080/messages', postOptions)
      .then(response => response.json())
      .then(data => console.log(data));
  }

  return {
    send
  }
}

module.exports = messageService();