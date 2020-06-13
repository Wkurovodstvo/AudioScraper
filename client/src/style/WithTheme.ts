import React from 'react';
import { Omit, withTheme as withThemeOri, WithTheme } from '@material-ui/core';

export type ThemeProps = WithTheme;

export const withTheme: () => <T>(
  component: React.ComponentType<T>
) => React.ComponentClass<Omit<T, 'theme'>> = withThemeOri as any;
