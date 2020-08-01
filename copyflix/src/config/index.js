const URL = window.location.hostname.includes ('localhost')
    ? 'http://localhost:3001'
    : 'https://imersao-react-alura-bice.vercel.app';

export default {
    URL,
};