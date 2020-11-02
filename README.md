# React RUT

The goal of this bundle is provide a chilean RUT utilities for [React].

## Install

with NPM:

```bash
npm install react-rut
```

with Yarn:

```bash
yadn add react-rut
```

## Usage

```tsx
import React from 'react';
import { useRut } from 'react-rut';

const Component: React.FC = () => {
  // you can set a default value with "useRut('1-9')"
  const [{ formattedValue }, setRut] = useRut();

  return (
    <input
      value={formattedValue}
      onChange={(e) => setRut(e.target.value)}
    />
  );
};

export default Component;
```

## Testing

```bash
npm run test
```

[React](https://reactjs.org/)
