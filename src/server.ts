import app from './api';

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.group(`Listening: http://localhost:${PORT}`);
});