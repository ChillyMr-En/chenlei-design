'use client';

import CargoCard from './atoms/CargoCard';
export default function AtomicLab() {
  return (
    <section style={{ 
      minHeight: '150vh', // 高度稍微收缩一点更紧凑
      backgroundColor: '#000', 
      padding: '120px 0',
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center',
      gap: '180px' // 增加组件间的呼吸感
    }}>
      
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: 'bold', color: '#fff' }}>
          NCW-design 原子实验室
        </h2>
        <p style={{ color: '#666', marginTop: '12px' }}>物流业务组件解构展示</p>
      </div>

      {/* 展台 1：货源卡片 */}
      <div className="showcase-item">
        <CargoCard />
      </div>

    </section>
  );
}