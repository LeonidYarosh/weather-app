import * as React from 'react'
import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'

// createDevTools takes a monitor and produces a DevTools component
const DevTools = createDevTools(
  <DockMonitor
    toggleVisibilityKey='h'
    changePositionKey='ctrl-q'
    defaultPosition="bottom"
    defaultIsVisible={false}
  >
    <LogMonitor theme='tomorrow' />
  </DockMonitor>
)

export default DevTools
