export default function Home() {
  return (
    <main 
      className="flex min-h-screen flex-col items-center justify-center bg-black text-white px-6"
      style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
    >
      <div className="text-center space-y-8" style={{ textAlign: 'center' }}>
        <h1 
          className="text-6xl md:text-8xl font-bold tracking-tight"
          style={{ fontSize: '64px', fontWeight: '900', marginBottom: '24px', lineHeight: '1.2' ,letterSpacing: '-0.05em'}}
        >
          构建物流时代的<br />交互语言
        </h1>
        
        <p 
          className="text-xl text-zinc-400 font-light"
          style={{ fontSize: '20px', color: '#a1a1aa', maxWidth: '600px', margin: '0 auto' }}
        >
          4 年行业深耕，以设计驱动复杂系统的效率变革。
        </p>

        <div className="pt-10 flex gap-6 justify-center" style={{ marginTop: '40px', display: 'flex', gap: '20px', justifyContent: 'center' }}>
          <button style={{ backgroundColor: '#fff', color: '#000', padding: '12px 32px', borderRadius: '999px', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}>
            精选作品集
          </button>
          <button style={{ backgroundColor: 'transparent', color: '#fff', padding: '12px 32px', borderRadius: '999px', border: '1px solid #3f3f46', cursor: 'pointer' }}>
            了解关于我
          </button>
        </div>
      </div>
    </main>
  );
}