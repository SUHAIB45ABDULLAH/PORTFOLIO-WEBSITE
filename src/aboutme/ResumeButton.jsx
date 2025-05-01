export default function ResumeButton() {
  return (
    <div className="mt-8">
      <a
        href="/Suhaib-Abdullah-goodcv.com-190225.140318.pdf"
        download="Suhaib_Resume.pdf"  // Custom filename added here
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full shadow-lg transition-all"
      >
        Download Resume
      </a>
    </div>
  );
}
