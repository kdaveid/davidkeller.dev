import { Github, Linkedin } from "lucide-react";
import profileImage from "@/assets/david-profile.png";

const Index = () => {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-12">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-0 max-w-4xl w-full">
        {/* Profile Image */}
        <div className="flex-1 flex justify-center md:justify-end md:pr-12">
          <img
            src={profileImage}
            alt="David E. Keller"
            className="w-64 h-auto md:w-80 lg:w-96 object-cover"
          />
        </div>

        {/* Divider */}
        <div className="hidden md:block divider-vertical h-96" />

        {/* Content */}
        <div className="flex-1 md:pl-12 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            David E. Keller
          </h1>
          
          <p className="mt-2 text-lg md:text-xl text-muted-foreground font-medium">
            Software Engineer
          </p>

          {/* Social Icons */}
          <div className="mt-6 flex justify-center md:justify-start gap-4">
            <a 
              href="https://github.com/kdaveid" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon" 
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/david-e-keller/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon" 
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>

        </div>
      </div>
    </main>
  );
};

export default Index;
