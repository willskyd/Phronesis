

import React from 'react';
import SettingsIcon from "@mui/icons-material/Settings";
import services from "./Static";


const Services = () => {
  return (
    <div style={{ background: '#1D2723', minHeight: '100vh', width: '100%' }}>
      {/* The header will remain at the top as usual */}
      <div style={{ width: '100%', maxWidth: 500, background: '#1D2723', borderRadius: 16, boxShadow: '0 2px 16px rgba(0,0,0,0.08)', padding: '2rem 1.5rem', margin: '4rem auto 0 auto' }}>
        <h2 style={{ display: 'flex', alignItems: 'center', fontSize: '2rem', fontWeight: 700, marginBottom: '2rem', color: '#e3e3e3', justifyContent: 'center' }}>
          {/* <ExpandMoreIcon style={{ marginRight: 12, color: '#e3e3e3' }} /> */}
          SERVICE
        </h2>
        <div style={{ width: '100%' }}>
          {services.map((data) => (
            <a
              key={data.id}
              href={`/services/${data.id}/${data.title}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '1rem',
                borderRadius: 8,
                marginBottom: '1rem',
                background: '#f1f5f9',
                textDecoration: 'none',
                color: '#222',
                fontWeight: 500,
                fontSize: '1.1rem',
                boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
                transition: 'background 0.2s',
              }}
              onMouseOver={e => e.currentTarget.style.background = '#e3eaf3'}
              onMouseOut={e => e.currentTarget.style.background = '#f1f5f9'}
            >
              <SettingsIcon style={{ marginRight: 12, color: '#1976d2' }} />
              {data.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
