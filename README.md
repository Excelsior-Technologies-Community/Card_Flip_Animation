# Card Flip Animation

A simple and elegant React application demonstrating a 3D card flip animation using CSS transforms and perspective. Click on the cards to flip them and reveal the back content.

## Features

- **Interactive Card Flipping**: Click any card to smoothly flip it and view the back content
- **3D Perspective Effect**: Utilizes CSS 3D transforms for realistic card flipping animation
- **Responsive Design**: Cards are centered and responsive across different screen sizes
- **Smooth Transitions**: 0.8-second transition for a polished user experience
- **Customizable Content**: Easily pass front and back content as props

## Technologies Used

- **React 19**: Modern React with hooks for state management
- **Vite**: Fast build tool and development server
- **CSS3**: 3D transforms, transitions, and flexbox for styling
- **ESLint**: Code linting for consistent code quality

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/card-flip-animation.git
   cd card-flip-animation
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Usage

The application displays two sample cards with different content. Click on any card to flip it. You can customize the card content by modifying the props in `src/App.jsx`:

```jsx
<Card frontContent="Your Front Text" backContent="Your Back Text" />
```

## Project Structure

```
card-flip-animation/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   ├── Card.jsx
│   │   └── Card.css
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── screenshort/
│   ├── A1.png
│   ├── A2.png
│   ├── A3.png
│   └── A4.png
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

## Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint for code quality checks

## Screenshots

![Screenshot 1](screenshort/A1.png)
![Screenshot 2](screenshort/A2.png)
![Screenshot 3](screenshort/A3.png)
![Screenshot 4](screenshort/A4.png)

## Browser Support

This application works in all modern browsers that support CSS 3D transforms:
- Chrome 36+
- Firefox 16+
- Safari 9+
- Edge 12+

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).
