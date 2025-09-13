<div align="center">

# **3D Interactive Portfolio Website**

**A personal portfolio to showcase my journey as a Software Engineer, featuring an interactive 3D background, modern UI, and seamless animations.**

</div>

<p align="center">
  <a href="https://your-live-demo-url.com" target="_blank">
    <img src="https://img.shields.io/badge/Live_Demo-View_Site-4c1d95?style=for-the-badge&logo=vercel" alt="Live Demo">
  </a>
  <a href="https://github.com/thuan-NM/Portfolio" target="_blank">
    <img src="https://img.shields.io/github/stars/thuan-NM/Portfolio?style=for-the-badge&logo=github&color=fde047" alt="GitHub Stars">
  </a>
</p>

---

## 🌟 **About The Project**

This project is more than just a resume; it's a dynamic and visually engaging presentation of my skills, projects, and professional experience. Built from the ground up with modern web technologies, it aims to provide an immersive experience for visitors through a fluid 3D background, subtle animations, and a clean, responsive layout.

## ✨ **Key Features**

-   🎨 **Modern & Responsive UI**: Sleek design that adapts perfectly to any screen size, from mobile devices to large desktop monitors.
-   🌌 **Interactive 3D Background**: A captivating and lightweight background animation created with **Three.js**, providing a unique visual experience.
-   🚀 **Smooth Animations**: User interactions and scroll events are enhanced with smooth, performant animations using the AOS library.
-   🌐 **Multi-Language Support**: Integrated language switcher for seamless content translation between English (EN) and Vietnamese (VI).
-   📬 **Functional Contact Form**: An easy-to-use contact form powered by **EmailJS** to ensure messages are delivered directly to my inbox.
-   🐳 **Fully Dockerized**: The entire application is containerized using **Docker** and **Nginx**, ensuring a consistent environment for development and deployment.
-   🔄 **Automated CI/CD Pipeline**: A **GitHub Actions** workflow automates the process of building and publishing the Docker image to Docker Hub on every push to `main`.

## 🛠️ **Tech Stack**

This portfolio is built with a curated set of modern and efficient technologies.

| Category          | Technologies                                                                                           |
| ----------------- | ------------------------------------------------------------------------------------------------------ |
| **Core Frontend** | `HTML5`, `CSS3`, `JavaScript (ES6+)`                                                                   |
| **3D & Animation**| `Three.js`, `Particles.js`, `AOS (Animate On Scroll)`                                                    |
| **Web Server**    | `Nginx`                                                                                                |
| **DevOps**        | `Docker`, `Docker Compose`, `GitHub Actions`                                                           |

## 🚀 **Getting Started Locally**

To get a local copy up and running, follow these simple steps.

### **Prerequisites**

-   **Docker Desktop**: Make sure you have [Docker](https://www.docker.com/get-started) and Docker Compose installed on your system.
-   **Git**: You'll need Git to clone the repository.

### **Installation & Setup**

1.  **Clone the repository:**

    git clone https://github.com/thuan-NM/Portfolio.git
    cd Portfolio


2.  **Configure EmailJS Credentials:**
    Before you can use the contact form, you need to add your personal EmailJS keys.
    -   Navigate to `js/contact-form.js`.
    -   Update the `emailJsConfig` object with your credentials:

        const emailJsConfig = {
          serviceId: 'YOUR_SERVICE_ID',
          templateId: 'YOUR_TEMPLATE_ID',
          publicKey: 'YOUR_PUBLIC_KEY',
        };


3.  **Run with Docker Compose:**
    This single command will build the Docker image and start the Nginx server.

    docker-compose up -d --build


4.  **View in Browser:**
    Once the container is running, open your favorite browser and go to:
    **[http://localhost:8080](http://localhost:8080)**

## 🚢 **Deployment & Automation**

This project is configured for automated deployment using GitHub Actions.

-   **Workflow**: The `.github/workflows/docker-build-push.yml` file defines the CI/CD pipeline.
-   **Trigger**: The workflow runs automatically on every `push` to the `main` branch.
-   **Action**: It builds the `Dockerfile`, logs into Docker Hub, and pushes the new image tagged as `latest`.

To enable this for your own fork, you must configure the following secrets in your repository settings:
-   `DOCKERHUB_USERNAME`: Your Docker Hub username.
-   `DOCKERHUB_TOKEN`: An access token generated from your Docker Hub account.

## 🤝 **Contributing**

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/thuan-NM/Portfolio/issues).

## 📄 **License**

This project is distributed under the MIT License. See `LICENSE` for more information.

---

<div align="center">
  <p><strong>Made with ❤️ by Nguyen Minh Thuan</strong></p>
</div>