const plugin = require('tailwindcss/plugin')

module.exports = plugin.withOptions(function (options) {
  return function ({ addUtilities }) {
    const name = options?.name ?? 'bg-stripes'
    return addUtilities({
      [`.${name}`]: {
        // Set options with fallback values
        '--stripes-color': options?.color ?? '255 255 255',
        '--stripes-opacity': options?.opacity ?? '0.2',
        '--stripes-size': options?.size ?? 12,
        '--stripes-angle': options?.angle ?? '-45deg',
        '--stripes-speed': options?.speed ?? '0.7s',

        position: 'relative',
        overflow: 'hidden',
        '&>*': { isolation: 'isolate' },
        '&:before': {
          content: '""',
          position: 'absolute',
          top: 0,
          right: 0,
          height: '100%',
          width: 'calc(100% + var(--stripes-size))',
          backgroundImage: `linear-gradient(
              var(--stripes-angle),
              rgb(var(--stripes-color) / var(--stripes-opacity)),
              rgb(var(--stripes-color) / var(--stripes-opacity)) 10%,
              transparent 10%,
              transparent 50%,
              rgb(var(--stripes-color) / var(--stripes-opacity)) 50%,
              rgb(var(--stripes-color) / var(--stripes-opacity)) 60%,
              transparent 60%,
              transparent
            )`,
          backgroundSize: 'var(--stripes-size) var(--stripes-size)',
          animation: 'animated-stripes var(--stripes-speed) linear infinite',
        },
      },
      '@keyframes animated-stripes': {
        '0%': {
          transform: 'translateX(0)',
        },
        '100%': {
          transform: 'translateX(var(--stripes-size))',
        },
      },
    })
  }
})
