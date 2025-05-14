export default defineNuxtPlugin(() => {
  return {
    provide: {
      hello: (msg: string) => `Hello${msg}`,
      custom: (msg: string) => `custom${msg}`,
      number: (msg: number) => `number${msg}`,
      consoleIt: (data: any) => console.log("consoleIt", data),
    },
  };
});
