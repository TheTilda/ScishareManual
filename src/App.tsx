import React from 'react';

const files = [
  { name: 'S1109.pdf', path: 'S1109.pdf' },
  { name: 'S1203.pdf', path: 'S1203.pdf' },
  { name: 'S1205.pdf', path: 'S1205.pdf' },
  { name: 'S3201.pdf', path: 'S3201 (1).pdf' },
];

function App() {
  return (
    <div style={{
      minHeight: '100vh', background: '#f4f6fb', display: 'flex', flexDirection: 'column', alignItems: 'center', margin: 0
    }}>
      <div style={{
        background: '#fff', margin: '32px 0 0 0', padding: '32px 20px 24px 20px', borderRadius: 18, boxShadow: '0 2px 12px rgba(0,0,0,0.07)', maxWidth: 420, width: '100%'
      }}>
        <h1 style={{ fontSize: '2em', marginBottom: '0.2em', color: '#1976d2', textAlign: 'center' }}>Скачать инструкции</h1>
        <p style={{ textAlign: 'center', color: '#555', marginBottom: '2em', fontSize: '1.08em' }}>
          Выберите нужный файл для скачивания. Ссылки работают с QR-кодами и открываются на любом устройстве.
        </p>
        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5em 0' }}>
          {files.map(file => (
            <li key={file.name}>
              <a
                href={file.path}
                download
                style={{
                  display: 'flex', alignItems: 'center', background: '#f0f4fa', borderRadius: 12, marginBottom: 18, padding: '16px 18px', textDecoration: 'none', color: '#1976d2', fontSize: '1.13em', fontWeight: 500, boxShadow: '0 1px 4px rgba(25,118,210,0.04)', transition: 'background 0.18s, box-shadow 0.18s, color 0.18s'
                }}
                onMouseOver={e => (e.currentTarget.style.background = '#1976d2', e.currentTarget.style.color = '#fff', e.currentTarget.style.boxShadow = '0 2px 12px rgba(25,118,210,0.10)')}
                onMouseOut={e => (e.currentTarget.style.background = '#f0f4fa', e.currentTarget.style.color = '#1976d2', e.currentTarget.style.boxShadow = '0 1px 4px rgba(25,118,210,0.04)')}
              >
                <span style={{ display: 'inline-block', marginRight: 14, fontSize: '1.5em', color: '#e53935', flexShrink: 0 }}>📄</span>
                {file.name}
              </a>
            </li>
          ))}
        </ul>
        <p style={{ textAlign: 'center', color: '#888', fontSize: '0.98em' }}>
          Если вы открыли страницу по QR-коду — просто нажмите на нужный файл для скачивания.
        </p>
      </div>
      <style>{`
        @media (max-width: 600px) {
          .container {
            margin: 0 !important;
            border-radius: 0 !important;
            min-height: 100vh !important;
            box-shadow: none !important;
            padding: 24px 6px 18px 6px !important;
            max-width: 100vw !important;
          }
          h1 {
            font-size: 1.3em !important;
          }
          .file-link {
            font-size: 1em !important;
            padding: 13px 10px !important;
          }
        }
      `}</style>
    </div>
  );
}

export default App;
