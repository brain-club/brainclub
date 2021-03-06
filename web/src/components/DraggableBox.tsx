import React from 'react'
import { useDrag } from 'react-dnd'
import { ItemTypes } from 'model/ItemTypes'

const style: React.CSSProperties = {
  position: 'absolute',
  cursor: 'move',
}

export interface BoxProps {
  id: any
  left: number
  top: number
  hideSourceOnDrag?: boolean
}

export const DraggableBox: React.FC<BoxProps> = ({
  id,
  left,
  top,
  hideSourceOnDrag,
  children,
}) => {
  const [{ isDragging }, drag] = useDrag({
    item: { id, left, top, type: ItemTypes.BOX },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })

  if (isDragging && hideSourceOnDrag) {
    return <div ref={drag} />
  }
  return (
    <div ref={drag} style={{ ...style, left, top }}>
      {children}
    </div>
  )
}
