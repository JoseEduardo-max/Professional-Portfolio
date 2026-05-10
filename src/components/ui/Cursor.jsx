import { useCursor } from '@/hooks/useCursor'
import { cn } from '@/utils/cn'

export function Cursor() {
  const { dotRef, ringRef, hovering } = useCursor()

  return (
    <>
      <div
        ref={dotRef}
        className={cn(
          'cursor-dot',
          hovering && 'hovering'
        )}
      />
      <div
        ref={ringRef}
        className={cn(
          'cursor-ring',
          hovering && 'hovering'
        )}
      />
    </>
  )
}