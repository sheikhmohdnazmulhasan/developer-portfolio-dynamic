# Dynamic Developer Portfolio

A dynamic and responsive developer portfolio website built with Next.js and Tailwind CSS.

## Description

Dynamic Developer Portfolio is a modern, customizable portfolio template for developers to showcase their skills, projects, and professional experience. Built with Next.js for optimal performance and SEO, and styled with Tailwind CSS for a sleek, responsive design.

## Features

- Responsive design that looks great on desktop and mobile devices
- Dynamic content loading for projects and blog posts
- Dark mode toggle for improved readability
- Contact form with email integration
- SEO optimized with Next.js built-in features
- Easy to customize and extend

## Usage

This portfolio template is designed to be easy to use and customize. Here's how you can get started:

1. **Content Management**: Update the `data` folder with your personal information, projects, and blog posts.

2. **Styling**: Modify the components in the `components` folder to change the layout and design. Adjust the Tailwind CSS classes in the components to fine-tune the styling.

3. **Configuration**: Set up your environment variables in a `.env.local` file for features like the contact form:

   ```
   NEXT_PUBLIC_EMAIL_SERVICE=your_email_service
   NEXT_PUBLIC_EMAIL_TEMPLATE=your_email_template
   NEXT_PUBLIC_EMAIL_USER=your_email_user_id
   ```

4. **Development**: Run `npm run dev` to start the development server and visit `http://localhost:3000` in your browser.

5. **Production**: Build the project with `npm run build` and start the production server with `npm start`.

## Customization

The portfolio is designed to be easily customizable:

- **Personal Information**: Edit the `data/personal.js` file to update your name, bio, social links, etc.
- **Projects**: Add or modify projects in the `data/projects.js` file.
- **Blog Posts**: Manage your blog posts in the `data/posts` directory.
- **Styling**: Tailor the look and feel by adjusting the Tailwind CSS classes in the component files.

## Contact

[Sheikh Mohammad Nazmul H.](https://facebook.com/sheikhmohdnazmulhasan) - nazmulofficial@outlook.com
