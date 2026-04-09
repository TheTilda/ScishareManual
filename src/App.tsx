import React, { useState } from 'react';

const AFFECTED_MODELS = ['S1109', 'S1201'];

const files = [
  { name: 'S1109.pdf', path: 'S1109.pdf' },
  { name: 'S1203.pdf', path: 'S1203.pdf' },
  { name: 'S1205.pdf', path: 'S1205.pdf' },
  { name: 'S3201.pdf', path: 'S3201.pdf' },
  { name: 'S1181.pdf', path: 'S1181.pdf' },
];

const noWaterSteps = [
  {
    title: 'Убедитесь, что бак вставлен до щелчка',
    desc: 'Если бак стоит не полностью, вода не подаётся в помпу.',
  },
  {
    title: 'Сделайте несколько пустых проливов (без капсулы)',
    desc: 'Вставьте бак с водой, включите машину и нажимайте кнопку пролива несколько раз подряд. Через 5–7 запусков вода начнёт втягиваться — это нормальная «прокачка» системы.',
  },
  {
    title: 'Проверьте клапан на дне бака',
    desc: 'На дне бака есть маленький подпружиненный клапан. При установке он должен открываться сам. Если двигается туго — нажмите на него пальцем, он должен ходить легко.',
  },
];

function NoticeBanner() {
  const [open, setOpen] = useState(true);
  if (!open) return null;
  return (
    <div style={{
      background: '#fffbeb',
      border: '1.5px solid #f59e0b',
      borderRadius: 14,
      padding: '12px 14px',
      marginBottom: 20,
      position: 'relative',
    }}>
      <button
        onClick={() => setOpen(false)}
        aria-label="Закрыть"
        style={{
          position: 'absolute', top: 10, right: 12,
          background: 'none', border: 'none', cursor: 'pointer',
          fontSize: '1em', color: '#b45309', lineHeight: 1, padding: 0,
        }}
      >✕</button>

      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8, paddingRight: 20 }}>
        <span style={{ fontSize: '1.1em', flexShrink: 0 }}>⚠️</span>
        <p style={{ margin: 0, fontWeight: 700, color: '#92400e', fontSize: '0.92em' }}>
          Важно для моделей {AFFECTED_MODELS.join(' и ')}
        </p>
      </div>

      <p style={{ margin: '0 0 10px 0', color: '#78350f', fontSize: '0.82em', lineHeight: 1.45 }}>
        Из кофемашины не льётся вода? Насос пустой с завода — решается за пару минут:
      </p>

      <ol style={{ margin: 0, padding: 0, listStyle: 'none' }}>
        {noWaterSteps.map((step, i) => (
          <li key={i} style={{ display: 'flex', gap: 10, marginBottom: i < noWaterSteps.length - 1 ? 10 : 0 }}>
            <span style={{
              flexShrink: 0, width: 20, height: 20, borderRadius: '50%',
              background: '#f59e0b', color: '#fff',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontWeight: 700, fontSize: '0.75em', marginTop: 1,
            }}>{i + 1}</span>
            <div>
              <p style={{ margin: 0, fontWeight: 600, color: '#78350f', fontSize: '0.82em' }}>{step.title}</p>
              <p style={{ margin: '2px 0 0 0', color: '#92400e', fontSize: '0.78em', lineHeight: 1.4 }}>{step.desc}</p>
            </div>
          </li>
        ))}
      </ol>

      <p style={{ margin: '10px 0 0 0', color: '#b45309', fontSize: '0.75em', fontStyle: 'italic' }}>
        Производитель устраняет дефект. Если не помогло — обратитесь в поддержку.
      </p>
    </div>
  );
}

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

        <NoticeBanner />

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
