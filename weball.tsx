import React from "react";

// Simple placeholder React component to avoid bundler/type errors.
// If you intended this file to be an Express server, move the server
// implementation to a separate file (e.g. `server.js`) outside the
// Vite/React client bundle.

export default function WebAll(): JSX.Element {
  return (
    <div style={{padding: 12, fontFamily: 'Inter, sans-serif'}}>
      <h2>WebAll</h2>
      <p>This is a placeholder component. The original file contained an Express server which
      would break the Vite client build. If you need the server, run it separately with Node.</p>
    </div>
  );
}