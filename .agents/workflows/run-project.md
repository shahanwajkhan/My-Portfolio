---
description: How to run the 3D Portfolio
---

To run this project locally and ensure all 3D modules load correctly, follow one of these methods:

### Method 1: Use a Local Server (Recommended)
Since this project uses ES Modules (Three.js), a local server is required to avoid CORS issues.

// turbo
1. Open a terminal in the project directory: `c:\Users\shaha\OneDrive\Desktop\MyPortfolio`
2. Run the following command:
```powershell
npx serve .
```
3. Open the URL provided (usually `http://localhost:3000`) in your browser.

### Method 2: VS Code Live Server
If you are using VS Code:
1. Install the **Live Server** extension.
2. Right-click on `index.html` in the explorer.
3. Select **"Open with Live Server"**.

### Method 3: Python Simple Server
If you have Python installed:
1. Open a terminal in the project directory.
2. Run:
```bash
python -m http.server 8000
```
3. Visit `http://localhost:8000`.
