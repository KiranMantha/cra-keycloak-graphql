const envVariables = {
  ...((window.__RUNTIME_CONFIG__ || { ...process.env }) as object),
};

export const config: Record<string, string> = {...envVariables};
