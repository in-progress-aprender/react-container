export {};

 

declare global {

  interface Window {
    __RUNTIME_CONFIG__: {
      RANDOM_USER_URL: string;  
    };

  }

}