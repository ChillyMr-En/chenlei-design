'use client';

import AtomicLab from '../components/AtomicLab';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const projectInfo = [
  { id: '01', title: '物流调度系统数字化迭代', description: '重构海量运单处理链路，通过 NCW-design 规范将系统操作效率提升 30% 以上。', img: '/p1.png' },
  { id: '02', title: '核心挑战：多任务并行与信息过载', description: '原始界面布局凌乱，调度员需在多个窗口间频繁切换，容错率低，作业效率极其低下。', img: '/p2.png' },
  { id: '03', title: '解决方案：NCW-design 栅格系统', description: '引入响应式 12 栅格系统，重新规划信息层级，让核心调度数据一目了然。', img: '/p3.png' },
];

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  // 1. useScroll 监听整个 600vh 的区域，offset 设置为 start start 到 end end
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <main style={{ backgroundColor: '#000', color: '#fff', width: '100%' }}>

      {/* 1. Hero Section - 标准流 */}
      <section style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', position: 'relative' }}>
        <h1 style={{ fontSize: 'clamp(40px, 8vw, 72px)', fontWeight: '900', letterSpacing: '-0.05em' }}>
          构建数字时代<br />的交互秩序
        </h1>
        <p style={{ fontSize: '20px', color: '#a1a1aa', marginTop: '24px' }}>
          专注于大型 B 端系统设计，用严谨的设计语言拆解复杂逻辑。
        </p>
      </section>

      {/* 2. 叙事滚动区 - 600vh */}
      <div
        ref={containerRef}
        style={{
          height: '600vh',
          position: 'relative',
        }}
      >
        {/* Sticky 容器 - 钉在屏幕中心 */}
        <div style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden'
        }}>

          {/* 左侧文字流 */}
          <div style={{ flex: '1', height: '100%', position: 'relative', marginLeft: '10%', display: 'flex', alignItems: 'center' }}>
            {projectInfo.map((info, index) => {
              // 精确等分 3 组：0.0, 0.33, 0.66
              const start = index / projectInfo.length;
              const end = (index + 1) / projectInfo.length;

              // --- 节奏控制：进出场各占区间 15%，中间 70% 用于停留 ---
              const buffer = 0.15; // 动画缓冲区

              // 文字透明度：[进场淡入, 坐稳停留, 离场淡出]
              const opacityRange = [start, start + buffer, end - buffer, end];
              const opacity = useTransform(scrollYProgress, opacityRange, [0, 1, 1, 0]);

              // --- ⭐ 方案 B：微视差爬升控制 ⭐ ---
              // 我们使用一个非线性的 Y轴输出数组
              // [入场起始(更靠下), 就位定点(偏高), 停留结束(极微上移), 离场谢幕(完全游出)]
              
              // 我们调整数值让文字视觉重心上移 (相比 0 抬高 60px)
              const yRange = [start, start + buffer, end - buffer, end];
              const yOutput = [150, -60, -80, -150]; // 从 -60 到 -80 的微小变化会产生高级的视差感
              
              const y = useTransform(scrollYProgress, yRange, yOutput);

              return (
                <motion.div
                  key={info.id}
                  style={{
                    opacity,
                    y,
                    position: 'absolute',
                    maxWidth: '400px',
                  }}
                >
                  <span style={{ color: '#52525b', fontSize: '14px', fontWeight: 'bold', marginBottom: '16px', display: 'block' }}>
                    {info.id} / CASE STUDY
                  </span>
                  <h2 style={{ fontSize: '42px', fontWeight: 'bold', marginBottom: '20px', lineHeight: '1.2' }}>
                    {info.title}
                  </h2>
                  <p style={{ color: '#a1a1aa', fontSize: '18px', lineHeight: '1.6' }}>
                    {info.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* 右侧图片流 */}
          <div style={{
            flex: '1.2',
            height: '70vh',
            marginRight: '10%',
            position: 'relative',
            borderRadius: '32px',
            overflow: 'hidden',
            border: '1px solid #27272a',
            backgroundColor: '#111' // 增加深色背景，优化淡入淡出效果
          }}>
            {projectInfo.map((info, index) => {
              const start = index / projectInfo.length;
              const end = (index + 1) * 0.25; // 这里之前有个小数学错误，已修正为 index/projectInfo.length
              const endCorrect = (index + 1) / projectInfo.length; // 修正后的end
              const buffer = 0.15;

              // 图片透明度：同步交替淡入淡出
              const imgOpacityRange = [start, start + buffer, endCorrect - buffer, endCorrect];
              const imgOpacity = useTransform(scrollYProgress, imgOpacityRange, [0, 1, 1, 0]);
              
              // 保留并微调缓慢放大效果：在整个 33% 的行程中从 1.1 缓慢缩回到 1.0
              const scaleRange = [start, endCorrect];
              const scaleOutput = [1.1, 1.0];
              const scale = useTransform(scrollYProgress, scaleRange, scaleOutput);

              return (
                <motion.div
                  key={`img-${info.id}`}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    opacity: imgOpacity,
                    scale
                  }}
                >
                  <Image
                    src={info.img}
                    alt={info.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                  />
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>

      {/* 3. 原子实验室 */}
      <AtomicLab />

      {/* Footer */}
      <footer style={{ height: '40vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#000', borderTop: '1px solid #18181b' }}>
        <h2 style={{ color: '#27272a', fontSize: '14px', letterSpacing: '0.2em' }}>END OF SHOWCASE</h2>
      </footer>

    </main>
  );
}