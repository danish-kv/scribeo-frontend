import DOMPurify from 'dompurify';

const QuillContent = ({ content }) => {
  const sanitizedContent = DOMPurify.sanitize(content);

  return (
    <div 
      className="mt-1 p-1 text-gray-800 quill-content" 
      dangerouslySetInnerHTML={{ __html: sanitizedContent }}
    >
      <style jsx>{`
        .quill-content h1 { @apply text-2xl font-bold mb-4; }
        .quill-content h2 { @apply text-xl font-bold mb-3; }
        .quill-content h3 { @apply text-lg font-bold mb-2; }
        .quill-content p { @apply mb-4; }
        .quill-content ul { @apply list-disc ml-4 mb-4; }
        .quill-content ol { @apply list-decimal ml-4 mb-4; }
        .quill-content blockquote { @apply border-l-4 border-gray-300 pl-4 italic; }
        .quill-content a { @apply text-blue-600 hover:text-blue-800 underline; }
        .quill-content pre { @apply bg-gray-100 p-2 rounded my-2; }
        .quill-content code { @apply bg-gray-100 px-1 rounded; }
      `}</style>
    </div>
  );
};

export default QuillContent