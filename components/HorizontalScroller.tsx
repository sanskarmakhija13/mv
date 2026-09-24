"use client";

import {
  type PointerEvent as ReactPointerEvent,
  type ReactNode,
  type WheelEvent as ReactWheelEvent,
  useRef,
} from "react";

export function HorizontalScroller({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const drag = useRef({ active: false, startX: 0, scrollLeft: 0 });

  function onPointerDown(event: ReactPointerEvent<HTMLDivElement>) {
    if (event.pointerType === "touch") return;
    const el = ref.current;
    if (!el) return;

    drag.current = {
      active: true,
      startX: event.clientX,
      scrollLeft: el.scrollLeft,
    };
    el.setPointerCapture(event.pointerId);
    el.classList.add("is-dragging");
  }

  function onPointerMove(event: ReactPointerEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el || !drag.current.active) return;
    el.scrollLeft = drag.current.scrollLeft - (event.clientX - drag.current.startX);
  }

  function endDrag(event: ReactPointerEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el || !drag.current.active) return;

    drag.current.active = false;
    el.classList.remove("is-dragging");

    if (el.hasPointerCapture(event.pointerId)) {
      el.releasePointerCapture(event.pointerId);
    }
  }

  function onWheel(event: ReactWheelEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;

    if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) return;
    if (Math.abs(event.deltaY) < 1) return;

    const maxScroll = el.scrollWidth - el.clientWidth;
    const movingRight = event.deltaY > 0;
    const movingLeft = event.deltaY < 0;
    const canMove =
      (movingRight && el.scrollLeft < maxScroll - 1) ||
      (movingLeft && el.scrollLeft > 1);

    if (!canMove) return;

    event.preventDefault();
    el.scrollLeft += event.deltaY;
  }

  return (
    <div
      ref={ref}
      className={className}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      onWheel={onWheel}
    >
      {children}
    </div>
  );
}
