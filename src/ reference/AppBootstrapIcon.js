import React, { useState } from 'react';
import {ArchiveFill,  Bell, Airplane} from 'react-bootstrap-icons';

export default function AppBootstrapIcon() {
  return (
    <div>
      <ArchiveFill />
      <Airplane size="20" color="red" />
      <Bell size="30" color="gray" />
    </div>
  );
}
