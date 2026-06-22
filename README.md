# AV - Photography | Modern Photography Portfolio 📷

A clean, responsive, and blazing-fast full-stack photography portfolio. Designed to showcase visual storytelling, this project includes a secure admin panel for uploading images, which are automatically compressed into modern `.webp` formats and stored via a lightweight Node.js backend.

## ✨ Features

* **Modern UI/UX:** Clean, minimalist aesthetic built with Tailwind CSS.
* **Responsive Grid:** Adapts flawlessly from mobile devices to ultrawide monitors.
* **Lightning Fast:** Implements native image `lazy loading` and automatic `.webp` image conversion to ensure crisp visuals and fast load times.
* **Secure Admin Upload:** Password-protected modal for uploading new photographs directly from the browser.
* **Lightweight Backend:** Powered by Node.js and Express, utilizing a simple `data.json` file as a database—no complex database setup required.

## 🛠️ Tech Stack

**Frontend:**
* HTML5 / Vanilla JavaScript
* Tailwind CSS (via CDN)

**Backend:**
* Node.js & Express.js
* Multer (for handling `multipart/form-data`)
* Sharp (for high-performance WebP image processing)
* Local JSON File System (Database)

## 🚀 Getting Started (Local Development)

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites
You will need [Node.js](https://nodejs.org/) installed on your computer.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Arjunren/Image-Gallery
   cd Image-Gallery

```

2. **Install backend dependencies:**
```bash
npm install

```


3. **Start the development server:**
```bash
npm start

```


4. **View the website:**
Open your browser and navigate to `http://localhost:3000`.

## 📸 How to Upload Images

1. Click the **Upload Photo** button in the top right corner of the navigation bar.
2. Enter the default administrator password: `admin321` (You can change this in the frontend JavaScript code).
3. Provide a title for your photograph and select an image (`.jpg`, `.png`, or `.webp`) from your device.
4. Click **Upload**. The backend will automatically compress the image to `.webp`, save it to `/public/uploads`, update the `data.json` database, and refresh the gallery immediately.

## ⚠️ Important Deployment Notes

Because this application uses the local file system (`data.json` and the `/public/uploads` folder) to store data permanently, **it is not suitable for serverless deployment platforms like Vercel or Netlify.**

Serverless platforms use ephemeral (temporary) storage. If deployed there, any images you upload will be deleted as soon as the server goes to sleep.

**Recommended Deployment Platforms:**
To keep the application working exactly as it does locally, deploy this repository to a platform that supports persistent disks or standard Node.js hosting, such as:

* **Render.com** (Web Service with a Persistent Disk)
* **Railway.app**
* **DigitalOcean Droplets / AWS EC2**

*(If you wish to use Vercel, you will need to modify the backend to use cloud storage like AWS S3 or Cloudinary, and a cloud database like MongoDB).*

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

```

```
