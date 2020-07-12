declare module 'tailwindcss/defaultTheme' {
  const defaultTheme: {
    colors: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      [colorName: string]: any;
    };
  };

  export = defaultTheme;
}
