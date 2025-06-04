import {
  Mail,
  Linkedin,
  Youtube,
  MessageSquare,
  ArrowRight,
  Send,
  Twitter,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] text-white font-sans">
      {/* Top CTA Section */}
      <div className="bg-[#1E293B] py-10 px-6 md:px-20 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm uppercase tracking-wider text-gray-300">
          Heard Enough?
        </div>
        <h2 className="text-3xl font-bold text-center">
          Contact <span className="border-b-4 border-blue-400 italic">Us</span>
        </h2>
        <button className="bg-blue-500 hover:bg-blue-600 text-black rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
          <ArrowRight size={24} />
        </button>
      </div>

      {/* Social Links */}
      <div className="py-10 px-6 md:px-20 border-t border-[#2e3a33] flex flex-col md:flex-row justify-between items-center">
        <h2 className="text-lg md:text-xl font-semibold mb-4 md:mb-0">
          Connect with us
        </h2>
        <div className="flex gap-6 text-white">
          <a
            href="mailto:blockbuddy69@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
          >
            <Mail size={22} />
          </a>
          {/* <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <MessageSquare size={22} />
          </a> */}
          <a
            href="https://www.linkedin.com/in/manas-srivastava-7618371b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="https://youtube.com/@block_buddy19?si=4EnyBxNEkqYvDp_6"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <Youtube size={22} />
          </a>
          <a
            href="http://t.me/blockbuddy19"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
          >
            <Send size={22} />
          </a>
          <a
            href="https://x.com/block_buddy19?t=TpmBm6c4BsvEuTlz_ipuZA&s=09"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
          >
            <Twitter size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
