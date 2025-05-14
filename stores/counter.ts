import { defineStore } from "pinia";
import SecureLS from "secure-ls";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    count: 1,
    isActive: true,
  }),
  persist: {
    storage: {
      getItem: (key) => {
        return new SecureLS({
          isCompression: false,
          encodingType: "AES",
        }).get(key);
      },
      setItem: (key, value) => {
        return new SecureLS({
          isCompression: false,
          encodingType: "AES",
        }).set(key, value);
      },
    },
  },
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++;
    },
  },
});
