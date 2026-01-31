import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Index = () => {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-12">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-0 max-w-4xl w-full">
        {/* Profile Image */}
        <div className="flex-1 flex justify-center md:justify-end md:pr-12">
          <img
            src="https://organicthemes.com/demo/profile/files/2018/05/profile-pic.jpg"
            alt="Profile"
            className="w-64 h-auto md:w-80 lg:w-96 object-cover"
          />
        </div>

        {/* Divider */}
        <div className="hidden md:block divider-vertical h-96" />

        {/* Content */}
        <div className="flex-1 md:pl-12 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Your Name
          </h1>
          
          <p className="mt-2 text-lg md:text-xl text-muted-foreground font-medium">
            Full Stack Developer
          </p>

          {/* Social Icons */}
          <div className="mt-6 flex justify-center md:justify-start gap-4">
            <a href="#" className="social-icon" aria-label="GitHub">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="social-icon" aria-label="LinkedIn">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="social-icon" aria-label="Twitter">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="mailto:your.mail@gmail.com" className="social-icon" aria-label="Email">
              <Mail className="w-6 h-6" />
            </a>
          </div>

          {/* Navigation Links */}
          <div className="mt-6 flex justify-center md:justify-start gap-2 text-base">
            <a href="#projects" className="link-accent font-medium">
              Projects
            </a>
            <span className="text-muted-foreground">-</span>
            <a href="#blogs" className="link-accent font-medium">
              Blogs
            </a>
          </div>

          {/* Email */}
          <div className="mt-4">
            <a 
              href="mailto:your.mail@gmail.com" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              your.mail@gmail.com
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Index;
