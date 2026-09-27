import { motion } from "motion/react";

export function GridBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <svg className="h-full w-full" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1440 900">
        <defs>
          <pattern id="clavis-grid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path
              d="M48 0H0V48"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-primary/20"
            />
          </pattern>
          <radialGradient id="clavis-fade" cx="50%" cy="38%" r="65%">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <mask id="clavis-mask">
            <rect width="1440" height="900" fill="url(#clavis-fade)" />
          </mask>
        </defs>

        <rect width="1440" height="900" fill="url(#clavis-grid)" mask="url(#clavis-mask)" />

        <g mask="url(#clavis-mask)" className="text-primary" fill="none" stroke="currentColor">
          {[
            "M-50 620 C 320 620, 380 300, 720 300 S 1120 560, 1500 560",
            "M-50 740 C 380 740, 460 420, 720 420 S 1180 680, 1500 680",
            "M-50 480 C 300 480, 400 180, 720 180 S 1100 400, 1500 400",
          ].map((d, i) => (
            <motion.path
              key={d}
              d={d}
              strokeWidth={0.8}
              strokeOpacity={0.45}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2.6, delay: i * 0.25, ease: "easeInOut" }}
            />
          ))}

          {[
            { cx: 720, cy: 300, r: 4 },
            { cx: 1080, cy: 430, r: 3 },
            { cx: 360, cy: 520, r: 3 },
          ].map((c, i) => (
            <motion.circle
              key={`${c.cx}-${c.cy}`}
              {...c}
              fill="currentColor"
              stroke="none"
              initial={{ opacity: 0.15 }}
              animate={{ opacity: [0.15, 0.7, 0.15] }}
              transition={{ duration: 4, repeat: Infinity, delay: i * 0.8 }}
            />
          ))}
        </g>
      </svg>
    </div>
  );
}
