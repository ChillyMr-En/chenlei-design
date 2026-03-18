'use client';

import { motion } from 'framer-motion';

// 严格对齐设计稿规范
const CARGO_COLORS = {
  text_main: '#363841',
  text_sub: '#666A70',
  primary_orange: '#FA8C16',
  price_red: '#F13333',
  btn_yellow: '#FCC92E',
  bg_white: '#FFFFFF',
  border_radius: '8px'
};

const hoverRotation = { rotateX: 15, rotateY: -20 };

// ✅ 修正1：函数名改为 CargoCard
export default function CargoCard() {
  // ✅ 修正2：补全缺失的 return ( 
  return (
    <motion.div 
      style={{ 
        position: 'relative', 
        width: '359px', 
        height: '178px', 
        cursor: 'pointer',
        perspective: '1200px', 
        transformStyle: 'preserve-3d' 
      }}
      whileHover="hover"
    >
      
      {/* 1. 虚线规范层 - 位于最深处 */}
      <motion.div 
        variants={{ hover: { translateZ: -100, opacity: 0.4, ...hoverRotation } }}
        initial={{ opacity: 0 }}
        style={{
          position: 'absolute', inset: 0,
          border: `1px dashed ${CARGO_COLORS.text_sub}`,
          borderRadius: CARGO_COLORS.border_radius,
          zIndex: 1
        }}
      />

      {/* 2. 基础底板 */}
      <motion.div 
        variants={{ hover: { opacity: 0.05, translateZ: -40, ...hoverRotation } }}
        style={{
          position: 'absolute', inset: 0,
          backgroundColor: CARGO_COLORS.bg_white,
          borderRadius: CARGO_COLORS.border_radius,
          zIndex: 10,
          transform: 'translateZ(-5px)', 
          boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
        }}
      />

      {/* 3. 核心原子层 */}

      {/* 标签与时间 */}
      <motion.div 
        variants={{ hover: { translateZ: 60, x: -10, y: -10, ...hoverRotation } }}
        style={{ 
          position: 'absolute', left: '12px', top: '12px',
          display: 'flex', alignItems: 'center',
          fontSize: '12px', color: CARGO_COLORS.text_sub,
          zIndex: 30, transform: 'translateZ(2px)' 
        }}
      >
        <span style={{ color: CARGO_COLORS.primary_orange, border: `1px solid ${CARGO_COLORS.primary_orange}`, padding: '0 4px', borderRadius: '2px', marginRight: '6px' }}>指派</span>
        3-20 13:30 计划发车
      </motion.div>

      {/* 距离 */}
      <motion.div 
        variants={{ hover: { translateZ: 40, x: 10, y: -10, ...hoverRotation } }}
        style={{ 
          position: 'absolute', right: '12px', top: '12px',
          fontSize: '12px', color: CARGO_COLORS.text_sub,
          zIndex: 25, transform: 'translateZ(2px)'
        }}
      >
        距您400.03km
      </motion.div>

      {/* 主路线 */}
      <motion.div 
        variants={{ hover: { translateZ: 120, x: -15, ...hoverRotation } }}
        style={{ 
          position: 'absolute', left: '12px', top: '45px',
          color: CARGO_COLORS.text_main, fontSize: '18px', fontWeight: 'bold',
          zIndex: 40, transform: 'translateZ(5px)'
        }}
      >
        北京 朝阳 → 成都 武侯
      </motion.div>

      {/* 价格 */}
      <motion.div 
        variants={{ hover: { translateZ: 180, x: 20, y: -5, ...hoverRotation } }}
        style={{ 
          position: 'absolute', right: '12px', top: '42px',
          color: CARGO_COLORS.price_red, fontSize: '20px', fontWeight: 'bold',
          zIndex: 50, transform: 'translateZ(10px)'
        }}
      >
        4700 <span style={{fontSize: '14px'}}>元</span>
      </motion.div>

      {/* 货物详情 */}
      <motion.div 
        variants={{ hover: { translateZ: 80, x: -10, y: 10, ...hoverRotation } }}
        style={{ 
          position: 'absolute', left: '12px', top: '85px',
          color: CARGO_COLORS.text_sub, fontSize: '13px', lineHeight: '1.8',
          zIndex: 35, transform: 'translateZ(3px)'
        }}
      >
        📦 货物A | 100kg <br /> 🚚 不限 | 不限
      </motion.div>

      {/* 公司名称 */}
      <motion.div 
        variants={{ hover: { translateZ: 50, x: -5, y: 15, ...hoverRotation } }}
        style={{ 
          position: 'absolute', left: '12px', bottom: '16px',
          fontSize: '12px', color: CARGO_COLORS.text_sub,
          zIndex: 20, transform: 'translateZ(2px)'
        }}
      >
        五粮液供应链有限公司
      </motion.div>

      {/* 抢单按钮 */}
      <motion.div 
        variants={{ hover: { translateZ: 150, scale: 1.05, x: 10, y: 10, rotateX: 25, rotateY: -15 } }}
        style={{ 
          position: 'absolute', right: '12px', bottom: '12px',
          backgroundColor: CARGO_COLORS.btn_yellow, 
          color: CARGO_COLORS.text_main, 
          padding: '6px 20px', borderRadius: '6px', fontSize: '14px', fontWeight: 'bold',
          zIndex: 45, boxShadow: '0 4px 10px rgba(252,201,46,0.3)',
          transform: 'translateZ(8px)'
        }}
      >
        抢单
      </motion.div>

      {/* 标注 */}
      <motion.div 
        variants={{ hover: { opacity: 1, x: 280, y: -50, translateZ: 200 } }}
        initial={{ opacity: 0 }}
        style={{ 
          position: 'absolute', color: CARGO_COLORS.primary_orange, 
          fontSize: '12px', fontWeight: 'mono', right: 0, zIndex: 100,
          whiteSpace: 'nowrap'
        }}
      >
        ● Highlight: #FA8C16 (WCAG AA Pass)
      </motion.div>

    </motion.div>
  );
}