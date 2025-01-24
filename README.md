# Company Dashboard

A modern dashboard built with React, Vite, TypeScript, and TailwindCSS.



### Local Setup

```bash
# Install dependencies
pnpm install

# Start development server
pnpm run dev
```

The app will be available at `http://localhost:5173` with the API running on `http://localhost:3001`.

### Docker Setup

```bash
# Build the image
docker build -t company-dash .

# Run the container
docker run -p 5173:5173 -p 3001:3001 company-dash
```

