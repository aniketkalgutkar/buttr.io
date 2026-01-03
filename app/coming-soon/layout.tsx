import { Metadata } from "next"


export const metadata: Metadata = {
  title: {
    default: 'Buttr.io | Smooth Market Intelligence for the LLM Era',
    template: '%s | Coming Soon',
  },
  description: 'The future of X',
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    // <!DOCTYPE html>
    // <html lang="en">
    //   <head>
    //     <meta charSet="UTF-8" />
    //     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    //     <title>Buttr.io | Smooth Market Intelligence for the LLM Era</title>
    //     <script src="https://cdn.tailwindcss.com" />
    //     <link rel="preconnect" href="https://fonts.googleapis.com" />
    //     <link rel="preconnect" href="https://fonts.gstatic.com" />
    //     <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Syncopate:wght@400;700&display=swap" rel="stylesheet" />
    //     {/* <script type="importmap">
    //       {
    //         "imports": {
    //           "react/": "https://aistudiocdn.com/react@^19.2.0/",
    //           "react": "https://aistudiocdn.com/react@^19.2.0",
    //           "react-dom/": "https://aistudiocdn.com/react-dom@^19.2.0/",
    //           "lucide-react": "https://aistudiocdn.com/lucide-react@^0.553.0",
    //           "@google/genai": "https://aistudiocdn.com/@google/genai@^1.29.0",
    //           "framer-motion": "https://aistudiocdn.com/framer-motion@^12.23.24"
    //         }
    //       }
      //   </script> */}
      // </head>
    //   <body>
    //     {/* <div id="root"></div> */}
    //     {/* <script type="module" src="/index.tsx"></script> */}
    //   </body>
    // </html>
    <>
      {children}
    </>  
  )
}
