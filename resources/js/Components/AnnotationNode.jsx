import { memo } from 'react';

function AnnotationNode({ data }) {
  return (
    <section className='flex flex-col'>
      <h1 className="text-6xl text-custom-white pb-10">Legend</h1>
      <article className="gap-2 w-80 shadow-md rounded-md ml-2 overflow-y-auto text-custom-white text-3xl" style={{ padding: 10, display: 'flex' }}>
        <svg width="50px" height="50px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#86efac"><path fill="#86efac" d="M3.25 1A2.25 2.25 0 001 3.25v9.5A2.25 2.25 0 003.25 15h9.5A2.25 2.25 0 0015 12.75v-9.5A2.25 2.25 0 0012.75 1h-9.5z"/>
        </svg>
        <p>Subjects in this color are completed.</p>
      </article>
      <article className="gap-2 w-80 shadow-md rounded-md ml-2 overflow-y-auto text-custom-white text-3xl" style={{ padding: 10, display: 'flex' }}>
        <svg width="50px" height="50px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#be123c"><path fill="#be123c" d="M3.25 1A2.25 2.25 0 001 3.25v9.5A2.25 2.25 0 003.25 15h9.5A2.25 2.25 0 0015 12.75v-9.5A2.25 2.25 0 0012.75 1h-9.5z"/>
        </svg>
        <p>Subjects in this color are taken and failed.</p>
      </article>
      <article className="gap-2 w-80 shadow-md rounded-md ml-2 overflow-y-auto text-custom-white text-3xl" style={{ padding: 10, display: 'flex' }}>
        <svg width="50px" height="50px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#06b6d4"><path fill="#06b6d4" d="M3.25 1A2.25 2.25 0 001 3.25v9.5A2.25 2.25 0 003.25 15h9.5A2.25 2.25 0 0015 12.75v-9.5A2.25 2.25 0 0012.75 1h-9.5z"/>
        </svg>
        <p>Subjects in this color can be taken the next coming term.</p>
      </article>
      <article className="gap-2 w-80 shadow-md rounded-md ml-2 overflow-y-auto text-custom-white text-3xl" style={{ padding: 10, display: 'flex' }}>
        <svg width="50px" height="50px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#ecf3f9"><path fill="#ecf3f9" d="M3.25 1A2.25 2.25 0 001 3.25v9.5A2.25 2.25 0 003.25 15h9.5A2.25 2.25 0 0015 12.75v-9.5A2.25 2.25 0 0012.75 1h-9.5z"/>
        </svg>
        <p>Subjects in this color have not been taken and cannot be taken next coming term.</p>
      </article>
      <article className="gap-2 w-80 shadow-md rounded-md ml-2 overflow-y-auto text-custom-white text-3xl" style={{ padding: 10, display: 'flex' }}>
        <svg width="50px" height="50px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#ff8a5b"><path fill="#ff8a5b" d="M3.25 1A2.25 2.25 0 001 3.25v9.5A2.25 2.25 0 003.25 15h9.5A2.25 2.25 0 0015 12.75v-9.5A2.25 2.25 0 0012.75 1h-9.5z"/>
        </svg>
        <p>Subjects in this color is currently taken.</p>
      </article>
      {/* {data.arrowStyle && (
        <div className="arrow" style={data.arrowStyle}>
          ⤹
        </div>
      )} */}
    </section>
  );
}

export default memo(AnnotationNode);
